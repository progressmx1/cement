import React from 'react'


type Content = 
{
    value: String,
    percentage: String
}

function CardBody(props : Content) {
  return (
    <div className='grid grid-flow-col'>
        <span className='text-black font-semibold text-[50px] text-left mt-3'>
            {props.value}
        </span>
        <div className='flex flex-row place-content-end mt-[28px] w-full'>
            <span className='flex place-content-center bg-green-50
                font-bold text-green-700 mt-3 rounded-lg
                h-6 w-2/4'>
                {props.percentage}
            </span>
        </div>
    </div>
  )
}

export default CardBody