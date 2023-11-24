import React from 'react'
import { Children } from './types'


export default function ListItem(props: Children) {
  return (
    <div>
        <li className={`flex hover:cursor-pointer ${props.className}`}>
            {props.children}
        </li>
    </div>
  )
}