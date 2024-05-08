import Image from 'next/image'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa6';
import { IoMdStar } from "react-icons/io";

const ContactCard = () => {
    return (
        <div className='w-[350px] mt-20'>
            <div>
                <Image src="/coralCourt/product-cover-133 sec-.png" width={0} height={0} alt='cover' style={{ width: "100%", height: "100%" }} sizes='100vw' className='mb-4' />
            </div>
            <div>
                <div className='flex items-center justify-between'>
                    <h3 className='text-[#252B42] font-bold'>Richmond</h3>
                    <div className='bg-[#252B42]  inline-flex py-2 px-4 rounded-full items-center'>
                        <IoMdStar color='#FFCE31' />
                        4.9
                    </div>
                </div>
                <h3 className='text-[#252B42] text-[20px] font-bold'>(604) 330-9615</h3>
                <p className='text-[#737373] mt-2'>8531 Alexandra Rd #113, Richmond, BC V6X 1C3</p>
                <h4 className='font-bold text-[#000000] mt-2 text-[22px]'>Sunday-Thursday </h4>
                <h4 className=' text-[#FEDD00]  text-2xl font-bold stroke-cyan-500 mt-2'>12:00PM - 10:00PM </h4>
                <button className='border border-[#23A6F0] text-[#23A6F0] px-6 py-2 flex items-center justify-between font-bold rounded-full mt-2'>
                    Order Here
                    <FaChevronRight />
                </button>
            </div>
        </div>
    )
}

export default ContactCard