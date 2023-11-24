import type {Bill} from "./types.server";
import { prisma } from "./prisma.server";
import { json} from "@remix-run/node";
import {createBill} from "./user.server";


export async function createBills(bill:Bill)
{
    
    let bills = await createBill(bill)

    if(!bills)
    {
        console.log("Something went wrong in creating new bill")
        return json(
            {
                error:"Something went wrong while creating a bill",
            },
            {status:400}
        )
    }
    return null
}


export async function getBill(ownerID: string,patientID: string)
{
    if (typeof ownerID !== 'string')
    {
      return null
    }
    // console.log("owner id : ",ownerID)
  
    try {

        // console.log("patient found")
      const bill = await prisma.bill.findMany({
        where: { createdBy: ownerID,patientId:patientID,status:"active"},
        include:{billItems:true}
      })
    //   console.log("patients : ",patient)
      return bill

    } catch {
      throw "no one found"
    }
}
export async function updateBillStatus(ownerID: string, billId:string,status:string)
{
    if (typeof ownerID !== 'string') 
    {
      return null
    }
    try {
        const bill = await prisma.bill.update({
        where: {id:billId},
        data: { status : status},
      })
      if(!bill)
      {
        console.log("bill cannot be deleted")
      }
      return null
    } catch {
      throw "no one found"
    }
}
export async function updateBillLockStatus(billId:string,status:string)
{
    try {
        const bill = await prisma.bill.update({
        where: {id:billId},
        data: { lockStatus : status},
      })
      if(!bill)
      {
        console.log("bill cannot be locked")
      }
      return null
    } catch {
      throw "bill cannot be locked"
    }
}