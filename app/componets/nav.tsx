import React, { useState } from 'react'
import {AiOutlineHome,AiOutlinePieChart, AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {FaUsersCog} from 'react-icons/fa'
import {CiBag1} from 'react-icons/ci'
import List from './list'
import ListItem from './listItem'
import { NavLink } from '@remix-run/react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { Typography } from '@material-tailwind/react'

const data = 
[
    {
        name:"Dashboard",
        link:"./",
        icon:AiOutlineHome
    },
    {
        name:"Stock",
        link:"/stocks",
        icon:CiBag1
    },
    {
        name:"Reports",
        link:"./",
        icon:AiOutlinePieChart
    },
    {
        name:"Accounts",
        link:"./",
        icon:FaUsersCog
    },
]
export default function NavBar() {

    const [open, setOpen] = useState(false);
    const handleMobile = () => setOpen(!open);

  return (
    <>
        <div className='fixed flex flex-row gap-4 bg-blue-900 text-white w-full h-auto z-1 p-4 mb-28'>
            <div className='w-2/4'>
                <Typography variant="h4" className="text-bold">
                    Cement
                </Typography>
            </div>
            <div className='hidden lg:block lg:w-full'>
                <List className='flex-row gap-2 float-right'>
                    {
                        data.map((links)=>(
                            <ListItem key={links.name} className='flex-row gap-1 place-content-center align-center mx-auto hover:bg-blue-500 hover:rounded-md p-1'>
                                <links.icon className='w-5 h-5'></links.icon>
                                <NavLink to={links.link}>{links.name}</NavLink>
                            </ListItem>  
                        ))
                    }
                </List>
            </div>
            <div className='absolute right-[60px] top-5 lg:hidden'>
            {!open? 
                <AiOutlineMenu className='text-[#0068ff] hover:cursor-pointer font-semibold h-8 w-8 p-1 rounded-full' onClick={handleMobile}/>
                :<AiOutlineClose className='text-[#0068ff] hover:cursor-pointer h-8 w-8 p-1 rounded-full' onClick={handleMobile}/>}
        </div>
        </div>
        <div className={open? 'absolute bg-white top-12 right-3 z-[2] p-4 rounded-lg border-[1px] border-gray-600  lg:hidden': "hidden"}>
            <List className='flex-col gap-2'>
                {
                    data.map((links)=>(
                        <ListItem key={links.name} className='flex-row gap-1 hover:bg-blue-500 hover:rounded-md p-1'>
                            <links.icon className='w-5 h-5'></links.icon>
                            <NavLink to={links.link}>{links.name}</NavLink>
                        </ListItem>  
                    ))
                }
            </List>
        </div>
    </>
  )
}

