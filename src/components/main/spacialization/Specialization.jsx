import React from 'react'
import Title from '../Title'
import Box from './Box'
import { specializationData } from '../../../data/Data'

function Specialization() {

    return (
        <div className='bg-gray-300 flex flex-col items-center space-y-10 pb-10'>
            <div className='flex flex-col items-center'>
                <Title title="Popular Specialization" />
                <p>Below are some popular specialization of computer science</p>
            </div>

            <div className='flex items-center justify-between gap-x-7 gap-y-8 flex-wrap max-w-[950px]'>
                {
                    specializationData?.map((item, index) => <Box key={index + item} text={item} />)
                }
            </div>
        </div>
    )
}

export default Specialization