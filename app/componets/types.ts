import React from 'react'

export type Children = 
{
    children: React.ReactNode,
    className?: string,
    onClick?: (...args: any) => any,
}

export type tabsChildren = 
{
    children: React.ReactNode,
    className?: string,
    onClick?: (...args: any) => any,
    tab_header:
    {
        label:string
        route:string
        // icons:IconType | undefined
    }[]
    tab_body:
    {
        label:string,
        component:()=>JSX.Element,
    }[]
}