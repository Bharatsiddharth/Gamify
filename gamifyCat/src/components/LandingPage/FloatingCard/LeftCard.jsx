import React from 'react'

const LeftCard = () => {
  return (
    <>
<div className='absolute left-40 flex flex-col opacity-0 lg:opacity-100 gap-20'>
  <div
    className='w-56 h-32  float'
    style={{
      backgroundImage: `url('https://gamifycat.io/wp-content/themes/gamifycat/cartridge/Cartridge_Vodafone.webp')`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    rotate: '12deg',
    }}
  />
  <div
    className='w-56 h-32 -rotate-12 float'
    style={{
      backgroundImage: `url('https://gamifycat.io/wp-content/themes/gamifycat/cartridge/Cartridge_North.webp')`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      rotate: '-12deg',
    }}
  />
  <div
    className='w-56 h-32 rotate-12 float'
    style={{
      backgroundImage: `url('https://gamifycat.io/wp-content/themes/gamifycat/cartridge/Cartridge_Asus.webp')`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      rotate: '12deg',
    }}
  />
</div>
    {/* <div className='absolute' >


<div className='w-40 h-40 bg-red-700 ' >

</div> */}

{/* <img src="https://gamifycat.io/wp-content/themes/gamifycat/cartridge/Cartridge_Vodafone.webp" alt="" />
<img src="https://gamifycat.io/wp-content/themes/gamifycat/cartridge/Cartridge_North.webp" alt="" />
<img src="https://gamifycat.io/wp-content/themes/gamifycat/cartridge/Cartridge_Asus.webp" alt="" /> */}
{/* </div> */}
    </>
  )
}

export default LeftCard
