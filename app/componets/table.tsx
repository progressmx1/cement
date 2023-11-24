import React from 'react'

type Table = 
{
    Head : Array<String>,
    data : 
    {
        name: String,
        Code: String,
        Manufacturer: String,
        Quantity: Number,
    }[]
}

export default function Table(props: Table) {
  return (
    <div>
        <table className='mt-4 w-full text-left border-[1px] rounded-xl'>
            <thead className='p-4 bg-gray-600 text-white'>
                {
                    props.Head.map((head)=>(
                        <th>{head}</th>
                    ))
                }
            </thead>
           <tbody className='p-4'>
           {
                 props.data.map(({name, Code,Manufacturer,Quantity},index)=>(
                    <tr className={index%2 == 0?"bg-gray-400":"bg-white"}>
                        <td>{name}</td>
                        <td>{Code}</td>
                        <td>{Manufacturer}</td>
                        <td>{`${Quantity}`}</td>
                    </tr>
                ))
            }
           </tbody>
        </table>
    </div>
  )
}