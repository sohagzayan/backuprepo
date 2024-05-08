import Image from 'next/image'
import React from 'react'

const RedeemReward = () => {
    return (
        <div className='max-w-[80%]  mx-auto  gap-5 m-10 grid grid-cols-12 items-center'>
            <div className='col-span-7'>
                <Image
                    src={`/coralCourt/loyalty_points.png`}
                    alt='hero'
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "100%" }}
                    sizes='100wv'
                    className=' block bg-none m-0 p-0 hero_orientation rounded-full'
                />
            </div>
            <div className='col-span-5'>
                <span className='uppercase border-b border-t border-b-[#E1B168] border-t-[#E1B168] text-[#1E0FC8] text-[18px] '>Top Up</span>
                <h2 className='text-[50px] text-[#1E0FC8] leading-10 font-bold mt-2'>EVERY $ SPENT <br />
                    Get Point to <br /> Redeem Reward</h2>
                <p className='text-[#555555] mt-3'>Our mission is to serve our customers with sophisticated flavors. We use fresh fruits and make our tea fresh daily. We have 1 liter drinks available with a variety of different fruits inside and delicious food to complement your drinks!</p>
                <button className='text-[#1E0FC8] border border-[#1E0FC8] py-[12px] px-[40px] rounded-full font-bold mt-3'>Learn More</button>
            </div>
        </div>
    )
}

export default RedeemReward