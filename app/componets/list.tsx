import React from 'react'
import { Children } from './types'

export default function List(props: Children) {
  return (
    <div>
        <ul className={`flex ${props.className}`}>
            {props.children}
        </ul>
    </div>
  )
}