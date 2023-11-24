import React from 'react'
import Table from '../table'


const Head = ["Name","Code","Manufacturer","Quantity"]
const data= 
[
    {
        name:"Cement 1",
        Code:"C1",
        Manufacturer:"Lafage",
        Quantity:300,
    },
    {
        name:"Cement 3",
        Code:"C3",
        Manufacturer:"Lafage",
        Quantity:300,
    },
    {
        name:"Cement 4",
        Code:"C4",
        Manufacturer:"Lafage",
        Quantity:300,
    }
]

export default function InStock() {
  return (
    <div className='flex flex-col mt-6 w-full md:w-3/4 lg:w-2/4'>
        <div>Instock</div>
        <div>
            <Table Head={Head} data={data} />
        </div>
    </div>
  )
}
