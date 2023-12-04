import React, { useState } from 'react'
import {AiOutlinePieChart, AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { BiTachometer } from "react-icons/bi";
import { RiUserSettingsLine, RiDashboard3Line  } from "react-icons/ri";
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
        icon:RiDashboard3Line 
    },
    {
        name:"Stock",
        link:"/stocks",
        icon:CiBag1
    },
    {
        name:"Reports",
        link:"/reports",
        icon:AiOutlinePieChart
    },
    {
        name:"Accounts",
        link:"./",
        icon: RiUserSettingsLine
    },
]
export default function NavBar() {

    const [open, setOpen] = useState(false);
    const handleMobile = () => setOpen(!open);

  return (
    <>
        <div className='fixed flex flex-row gap-4 bg-[#1F2937] text-white w-full h-auto z-[100] p-4 mb-28'>
            <div className=''>
                <Typography variant="h4" className="text-bold">
                    Cement
                </Typography>
            </div>
            <div className='hidden lg:block lg:w-full pl-3'>
                <List className='flex-row gap-x-4 font-semibold'>
                    {
                        data.map((links)=>(
                            <ListItem key={links.name} className='flex-row gap-1 place-content-center align-center mx-auto hover:bg-black hover:rounded-md p-1'>
                                {/* <links.icon className='w-[18px] h-[18px]'></links.icon> */}
                                <NavLink to={links.link}>{links.name}</NavLink>
                            </ListItem> 
                        ))
                    }
                </List>
            </div>
            {/* <div className='flex flex-row float-right bg-red-500'>
                <div className='rounded-full p-2 bg-blue-300'>
                    P
                </div>
            </div> */}
            <div className='absolute right-[60px] top-5 lg:hidden'>
            {!open? 
                <AiOutlineMenu className='text-white hover:cursor-pointer font-semibold h-8 w-8 p-1 rounded-full' onClick={handleMobile}/>
                :<AiOutlineClose className='text-white hover:cursor-pointer h-8 w-8 p-1 rounded-full' onClick={handleMobile}/>}
        </div>
        </div>
        <div className={open? 'fixed bg-white top-[55px] right-3 z-[105] p-4 rounded-lg border-[1px] border-gray-600  lg:hidden': "hidden"}>
            <List className='flex-col gap-2'>
                {
                    data.map((links)=>(
                        <ListItem key={links.name} className='flex-row gap-1 text-sm hover:bg-gray-300 hover:rounded-md p-1'>
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

