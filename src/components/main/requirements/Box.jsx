import React from 'react'

function Box({ title, information }) {
    return (
        <div className='mx-5 flex items-center justify-center gap-x-3 my-1'>
            <div className='bg-gray-200 flex items-center justify-center rounded-lg min-w-[200px] px-2 text-center max-w-[200px] font-semibold min-h-[60px] max-h-[60px]'>
                {title}
            </div>
            <div className='bg-gray-200 flex items-center rounded-lg min-w-[700px] px-3 py-2 max-w-[700px] font-semibold min-h-[60px] max-h-[60px]'>
                {information}
            </div>

        </div>
    )
}

export default Box