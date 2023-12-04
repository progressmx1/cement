import { Typography } from '@material-tailwind/react'
import React from 'react'

type Name = {text: String, ClassName?:String}

export default function CardHead(props: Name) {
  return (
    <>
        {/* <h3 className={`text-black font-semibold text-sm ${props.ClassName}`}>{props.text}</h3> */}

        <Typography variant="h3" className="text-black font-semibold text-sm">
            {props.text}
        </Typography>
    </>
  )
}
