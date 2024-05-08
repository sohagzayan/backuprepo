import Image from 'next/image';
import React from 'react';

type Props = {};

const milk_tea_selection_data = [
    { id: 1, name: "All-in-1 Milk Tea", price: "11.64", image: "milkimage1.jpg" },
    { id: 2, name: "Oat Milk Tea", price: "8.41", image: "milkimage1.jpg" },
    { id: 3, name: "Pudding Milk Tea", price: "8.41", image: "milkimage1.jpg" },
    { id: 4, name: "Red Bean Milk Tea", price: "11.64", image: "milkimage1.jpg" },
    { id: 5, name: "Coconut Jelly Milk Tea", price: "11.64", image: "milkimage1.jpg" },
    { id: 6, name: "All-in-1 Coconut Milk", price: "11.64", image: "milkimage1.jpg" },
]


const fresh_milk_data = [
    { id: 1, name: "All-in-1 Milk Tea", price: "11.64", image: "milkimage1.jpg" },
    { id: 2, name: "Oat Milk Tea", price: "8.41", image: "milkimage1.jpg" },
    { id: 3, name: "Pudding Milk Tea", price: "8.41", image: "milkimage1.jpg" },
    { id: 4, name: "Red Bean Milk Tea", price: "11.64", image: "milkimage1.jpg" },
]


const DrinkMenu = (props: Props) => {
    return (
        <div className='max-w-[80%] flex flex-wrap items-center mx-auto  gap-5 m-10  '>
            <div className='grid grid-cols-12 gap-10'>
                <div className='col-span-5'>
                    <Image
                        src='/coralCourt/pasted.png'
                        alt='logo'
                        width={300}
                        height={200}
                        className='-ml-10'
                    />
                    <div>
                        <span className='uppercase text-[18px] text-[#1E0FC8] border-t border-t-[#E1B168] border-b border-b-[#E1B168]'>
                            Menu
                        </span>
                        <h3 className='text-[#1E0FC8] text-[35px] font-bold'>Try Our Drinks</h3>
                        <p className='text-[#555555]'>We offer refreshing teas that are personalized to your liking. Brighten your day with our incredible fruit tea or if you{"'"}d prefer check out our milk tea. When you visit us, we treat you like a member of the family.</p>
                        <Image
                            src='/coralCourt/room.png'
                            alt='logo'
                            width={300}
                            height={200}
                            className='mt-5'
                        />
                        <button className='border-2 border-[#1E0FC8] text-[#1E0FC8] px-[40px] py-[15px] rounded-lg text-[18px] font-bold mt-5'>See all drinks</button>
                    </div>
                </div>
                <div className='col-span-7'>
                    <div>
                        <h3 className='text-[35px] text-[#1E0FC8] font-bold mb-3'>Milk Tea Selection</h3>
                        <div>
                            <ul className='flex flex-col gap-5'>
                                {milk_tea_selection_data.map((milk) =>
                                    <li key={milk.name} className='flex items-center gap-3'>
                                        <div>
                                            <Image
                                                src={`/coralCourt/${milk?.image}`}
                                                alt='hero'
                                                width={60}
                                                height={60}
                                                className=' block bg-none m-0 p-0 hero_orientation rounded-full'
                                            />
                                        </div>
                                        <div className='flex items-center w-full gap-3'>
                                            <h3 className='text-[#1E0FC8] w-auto text-nowrap'>{milk?.name}</h3>
                                            <div
                                                className='w-full border border-dashed border-[#FFD400] relative after:w-[8px] after:h-[7px] after:bg-[#C4C4C4] after:top-[50%] after:left-[0%] after:translate-x-[-50%] after:translate-y-[-50%] after:absolute after:rounded-full  before:w-[8px] before:h-[7px] before:bg-[#C4C4C4] before:top-[50%] before:right-[-5px] before:translate-x-[-50%] before:translate-y-[-50%] before:absolute before:rounded-full '></div>
                                            <span className='text-[#1E0FC8] text-[20px] font-bold'>$11.64</span>
                                        </div>
                                    </li>)}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-[35px] text-[#1E0FC8] font-bold mt-6 mb-3'>Fresh Milk Drinks</h3>
                        <div>
                            <ul className='flex flex-col gap-5'>
                                {fresh_milk_data.map((milk) =>
                                    <li key={milk.name} className='flex items-center gap-3'>
                                        <div>
                                            <Image
                                                src={`/coralCourt/${milk?.image}`}
                                                alt='hero'
                                                width={60}
                                                height={60}
                                                className=' block bg-none m-0 p-0 hero_orientation rounded-full'
                                            />
                                        </div>
                                        <div className='flex items-center w-full gap-3'>
                                            <h3 className='text-[#1E0FC8] w-auto text-nowrap'>{milk?.name}</h3>
                                            <div
                                                className='w-full border border-dashed border-[#FFD400] relative after:w-[8px] after:h-[7px] after:bg-[#C4C4C4] after:top-[50%] after:left-[0%] after:translate-x-[-50%] after:translate-y-[-50%] after:absolute after:rounded-full  before:w-[8px] before:h-[7px] before:bg-[#C4C4C4] before:top-[50%] before:right-[-5px] before:translate-x-[-50%] before:translate-y-[-50%] before:absolute before:rounded-full '></div>
                                            <span className='text-[#1E0FC8] text-[20px] font-bold'>$11.64</span>
                                        </div>
                                    </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrinkMenu;
