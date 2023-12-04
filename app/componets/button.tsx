import React from 'react'

type Button = 
{
    className?:String,
    name: String
}

function Button(props: Button) {
  return (
    <>
        <button className={`flex flex-row p-2 place-content-center rounded-lg ${props.className}`}>{props.name}</button>
    </>
  )
}

export default Button