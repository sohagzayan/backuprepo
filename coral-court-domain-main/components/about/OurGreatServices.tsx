import { styles } from '@/constants/styles';
import Image from 'next/image';
import React from 'react';
import { BsCalendarDate } from 'react-icons/bs';

type Props = {};

const OurGreatServices = (props: Props) => {
    return (
        <div className='  space-y-10'>

            <div className='w-[70%] py-24 flex flex-col lg:flex-row items-center justify-evenly mx-auto space-y-5'>
                <div className='grid grid-cols-12 gap-12 items-center'>
                    <div className='col-span-4'>
                        <div>
                            <h3 className='border-t border-b inline-block border-t-[#E1B168] border-b-[#E1B168] text-[#1E0FC8] font-bold uppercase mb-2' >What we offer</h3>
                            <h3 className='text-[40px] text-[#1E0FC8] font-bold leading-10 mb-2'>
                                Our Great <br /> Services
                            </h3>
                            <p className='text-[#555555] font-semibold'>
                                NICETEA is your place to be when you{"'"}re looking for a unique boba tea shop with a perfect environment to spend time with your loved ones. NICETEA is committed to providing quality beverages to your liking. So treat yourself to a delicious bubble tea by visiting us at NICETEA today!
                            </p>
                        </div>
                    </div>
                    <div className='w-full col-span-8'>

                        <div className='flex items-center justify-between'>
                            <div className='bg-[#FFD400] w-[240px] h-[230px] flex items-center justify-center rounded-lg'>
                                <div className='bg-[#0012C7] w-[200px] h-[190px] flex items-center justify-center flex-col  rounded-lg'>
                                    <Image src="./calender.svg" width={50} height={50} alt='calender' className='mb-4' />
                                    <h3 className='text-[25px] font-bold'>Opened 7 Days</h3>
                                </div>
                            </div>

                            <div className='bg-[#FFD400] w-[240px] h-[230px] flex items-center justify-center rounded-lg'>
                                <div className='bg-[#0012C7] w-[200px] h-[190px] flex items-center justify-center flex-col  rounded-lg'>
                                    <Image src="./menu.svg" width={50} height={50} alt='calender' className='mb-4' />
                                    <h3 className='text-[25px] font-bold'>Special Menus</h3>
                                </div>
                            </div>

                            <div className='bg-[#FFD400] w-[240px] h-[230px] flex items-center justify-center rounded-lg'>
                                <div className='bg-[#0012C7] w-[200px] h-[190px] flex items-center justify-center flex-col  rounded-lg'>
                                    <Image src="./delivery.svg" width={50} height={50} alt='calender' className='mb-4' />
                                    <h3 className='text-[25px] font-bold'>Home Delivery</h3>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurGreatServices;
