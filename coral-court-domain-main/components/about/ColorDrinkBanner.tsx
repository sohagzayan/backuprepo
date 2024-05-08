import Image from 'next/image'
import React from 'react'

const ColorDrinkBanner = () => {
    return (
        <div>
            <Image src="/coralCourt/colordrink.png" width={0} height={0} style={{ width: "100%", height: "100%" }} sizes="100vw" alt='colordrink' />
        </div>
    )
}

export default ColorDrinkBanner