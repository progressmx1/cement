import React from 'react'

export type Children = 
{
    children: React.ReactNode,
    className?: string,
    onClick?: (...args: any) => any,
}