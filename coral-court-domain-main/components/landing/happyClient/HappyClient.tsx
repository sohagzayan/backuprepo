'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
// import reviewProfile from './theKitchen/reviewProfile.png';
import { FaQuoteLeft } from 'react-icons/fa6';
import Image from 'next/image';

type Props = {};

const reviewData = [
    {
        id: 1,
        img: "reviewProfile",
        name: 'Gurjeet Singh',
        role: 'Chief Manager',
        review: "Only leaving 5 stars beacuse 10 stars isn't an option. Found this place by accident and so happy we did. The staff was very friendly and personable. The food was absolutely delicious and huge portions, a lot bigger than we expected. We were pleasantly surprised when several side dished were served with our meals. Prices are fair considering how much food you get. Everything on the menu looked amazing and we are so excited to go back and try more!Only leaving 5 stars beacuse 10 stars isn't an option. Found this place by accident and so happy we did. The staff was very friendly and personable. The food was absolutely delicious and huge portions, a lot bigger than we expected. We were pleasantly surprised when several side dished were served with our meals. Prices are fair considering how much food you get. Everything on the menu looked amazing and we are so excited to go back and try more!",
    },
    {
        id: 2,
        img: "reviewProfile",
        name: 'Penny Rusty Sophie',
        role: 'Chief Manager',
        review: 'Love this place. Both food and service are top-notch! If you are looking for fresh, authentic, clean Korean food, this is the place! Highly recommend!',
    },
    {
        id: 3,
        img: "reviewProfile",
        name: 'Munchica',
        role: 'Chief Manager',
        review: 'Ordered from Ubereats (pork bone soup & beef rib soup) - love it',
    },
    {
        id: 4,
        img: "reviewProfile",
        name: 'Matthew C',
        role: 'Chief Manager',
        review: 'Delicious! Was craving Korean food and this definitely hit the spot. Portions were perfect and I did not get food coma, always a plus!',
    },
    {
        id: 5,
        img: "reviewProfile",
        name: 'D H',
        role: 'SHARON KIM',
        review: "So happy I've finally found a good and authentic Korean place in this area. Food portions, service and price cannot be beat. And most of all, food is so yummy!",
    },
];

const HappyClient = (props: Props) => {
    const [swiper, setSwiper] = useState(null);
    const [middleSlideIndex, setMiddleSlideIndex] = useState(1);

    const handleSwiperInit = (swiper: any) => {
        setSwiper(swiper);
    };

    // Update middle slide index when slide changes
    const handleSlideChange = (swiper: any) => {
        setMiddleSlideIndex(swiper.activeIndex);
    };
    return (
        <div className='bg-white py-[30px] w-[80%]   mx-auto'>
            <div className='text-left text-black pb-10 space-y-1'>
                <p className='uppercase border-t inline-block border-t-[#E1B168] border-b border-b-[#E1B168] text-[#1E0FC8] mb-2'>Testimonial</p>
                <h1 className='text-3xl lg:text-5xl font-bold text-[#1E0FC8]'>
                    What our clients say
                </h1>
                <p className='text-[17px] text-[#1E0FC8]'>We love to hear from customers, so please leave a comment or say hello in an email.</p>
            </div>
            <div className='text-black   mx-auto'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1440: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className='mySwiper'
                    onInit={(swiper) => handleSwiperInit(swiper)}
                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                >
                    {reviewData.map((data, index) => (
                        <SwiperSlide key={data.id}>
                            <div
                                className={`h-[280px] border rounded-xl flex items-start  flex-col p-5 ${index === middleSlideIndex
                                    ? 'bg-[#FFD400]'
                                    : 'bg-[#FFD400] text-black'
                                    }`}
                            >
                                <div className='flex items-center gap-4 border-b border-b-[#797E89] w-full pb-7  '>
                                    <div className='relative'>
                                        <Image src="/coralCourt/reviewProfile.png" width={60} height={60} alt='user' className='rounded-full' />
                                        <div className='w-[25px] h-[25px] bg-[#E1B168] rounded-full flex items-center justify-center text-[#1E0FC8] absolute top-0 -left-3'>
                                            <FaQuoteLeft size={12} />
                                        </div>
                                    </div>
                                    <div className=' text-[20px] font-bold gap-5 text-[#1E0FC8]'>
                                        <p className='font-bold'>{data.name}</p>
                                    </div>
                                </div>
                                <div className='text-left pt-6'>
                                    <p className=''>
                                        “{data.review.slice(0, 180)}”
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default HappyClient;
