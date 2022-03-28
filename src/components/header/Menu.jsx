import React from 'react'
import { BsChevronDown } from 'react-icons/bs';
import { MenuData } from '../../data/Data';

function Menu() {

    return (
        <div className='flex gap-x-3'>
            {
                MenuData?.map((data, index) => {
                    return (
                        <p key={index+data} className='group cursor-pointer flex items-center gap-x-1'>
                            {data} <span className='group-hover:rotate-180 transition-all duration-200'><BsChevronDown /></span>
                        </p>
                    )
                })
            }
        </div>
    )
}

export default Menu