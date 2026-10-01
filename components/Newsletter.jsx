import React from 'react'
import Title from './Title'
import Reveal from './Reveal'

const Newsletter = () => {
    return (
        <Reveal className='mx-4 my-28 flex flex-col items-center sm:my-32'>
            <Title title="Join Newsletter" description="Subscribe to get exclusive deals, new arrivals, and insider updates delivered straight to your inbox every week." visibleButton={false} />
            <div className='flex bg-white/80 text-sm p-1 rounded-full w-full max-w-xl my-10 border border-[#d8ded4] shadow-[0_12px_32px_-24px_rgba(23,60,52,0.4)]'>
                <input className='min-w-0 flex-1 bg-transparent pl-5 outline-none' type="text" placeholder='Enter your email address' />
                <button className='font-medium bg-[#173c34] text-white px-7 py-3 rounded-full hover:bg-[#285447] active:scale-95 transition'>Get Updates</button>
            </div>
        </Reveal>
    )
}

export default Newsletter