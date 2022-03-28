import React from 'react'
import { requirementData } from '../../../data/Data'
import Title from '../Title'
import Box from './Box'

function Requirements() {
    return (
        <div className='flex flex-col items-center py-7'>
            <Title title="Requirements" />
            {
                requirementData?.map((item, index) => <Box key={item+index} title={item.title} information={item.information} />)
            }
        </div>
    )
}

export default Requirements