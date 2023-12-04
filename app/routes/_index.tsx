import React, { useState } from 'react'
import Card from '~/componets/card'
import CardHead from '~/componets/cardHead'
import CardBody from '~/componets/cardBody'
import PageTitle from '~/componets/pagetitle'
import Recipts from '~/componets/reports/recipts'
import { BiPlus } from 'react-icons/bi'
// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";
import Dialog from '~/componets/dialog'
import Sales from '~/componets/reports/sales'

function _index() {

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(!open);

  const [open, setOpen] = useState(false);
  const handleDialog = () => setOpen(!open);
  return (
    <>
        {/* <NavBar/> */}
        <div className='relative top-44 flex flex-col gap-y-6 mx-1 md:mx-6'>
          <div className='flex flex-col gap-y-7'>
           <div className='flex flex-row align-middle gap-x-4'>
              <PageTitle title="Today's Sales"/>
              {/* <BiPlus className='w-5 h-5 text-[#1F2937]' /> */}
              <div onClick={handleDialog} className='bg-[#1F2937] flex justify-center place-items-center w-6 h-6 rounded-full hover:cursor-pointer hover:bg-gray-700'>
                    <BiPlus className='w-5 h-5 text-white' />
              </div>
           </div>
            <div className='grid grid-flow-row md:grid-flow-col md:grid-cols-3 gap-4'>
                <Card>
                  <CardHead text="Items Sold"></CardHead>
                  <CardBody value="90" percentage="20%"></CardBody>
                </Card>
                <Card>
                  <CardHead text="Total Cost"></CardHead>
                  <CardBody value="400" percentage="10%"></CardBody>
                </Card>
                <Card>
                  <CardHead text="Profit"></CardHead>
                  <CardBody value="900" percentage="5%"></CardBody>
                </Card>
            </div>
          </div>
          <Recipts></Recipts>
        </div>
        {open?
              <Dialog position="fixed" onClick={handleDialog} className='bg-gray-600 bg-opacity-20'>
                <Sales></Sales>
              </Dialog> :
              
              ""}
        {/* <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Add new sale</DialogHeader>
          <DialogBody className='w-full'>
            <Sales></Sales>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
      </Dialog> */}

    </>
  )
}

export default _index