import React from 'react'
import { Children } from './types'

export default function Card(props:Children) {
  return (
    <div className='grid grid-flow-row bg-white rounded-lg border-[1px] border-gray-300 p-4'>
        {props.children}
    </div>
  )
}