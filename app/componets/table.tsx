import React from 'react'
import Button from './button'
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
    <div className='flex flex-col w-full'>
        <div className='-m-1.5 overflow-x-auto'>
            <div className='p-1.5 min-w-full inline-block align-middle'>
                <div className='overflow-hidden'>
                    <table className='min-w-full divide-y divide-gray-600 dark:divide-gray-900'>
                        <thead>
                            {
                                props.Head.map((head)=>(
                                    <th key={`${head}`} scope="col" className='px-6 py-3 text-start text-sm font-semibold text-black uppercase'>{head}</th>
                                ))
                            }
                        </thead>
                        <tbody className='p-4'>
                        {
                                props.data.map(({name, Code,Manufacturer,Quantity},index)=>(
                                    // <tr className={index%2 == 0?"bg-gray-400":"bg-white"}>
                                    <tr key={index} className="hover:bg-gray-500 dark:hover:bg-gray-900">
                                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-500'>{name}</td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-500'>{Code}</td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-500'>{Manufacturer}</td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-500'>{`${Quantity}`}</td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-500'>
                                            <Button className="bg-blue-600 text-white w-full h-8" name="Edit" ></Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
       
    </div>
  )
}