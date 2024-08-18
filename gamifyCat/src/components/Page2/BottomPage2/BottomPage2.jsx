import React from 'react'

const BottomPage2 = () => {
  return (
    <>
         <div className=' lg:w-2/3 mx-auto rounded-2xl z-10 py-10 mt-10'>
     

     <div 
     style={{
         backgroundImage: `url('https://i.vimeocdn.com/video/1904122229-66aefc36c2b3f6a75ba795bc785d39693b3ec36343cde1012fb7874224a5127a-d?mw=1100&mh=1100&q=70')`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat', 
       }}
     className='h-[80vh]  flex justify-between items-end  p-5 text-white w-full rounded-3xl'>
         <div className='flex  gap-5'>
         <button className='py-3 px-6 border-2 border-white rounded-full text-base font-semibold '>App Design</button>
         <button className='py-3 px-6 border-2 border-white rounded-full text-base font-semibold  '>AR</button>
         <button className='py-3 px-6 border-2 border-white rounded-full text-base font-semibold  '>UX/UI</button>
         </div>
         <i class="text-5xl ri-arrow-right-circle-line"></i>
     </div>
         
     
     <h1 className='text-7xl font-semibold text-[#57BA5E] py-5'>Asus</h1>
     <p className=' text-[1.7rem] leading-tight lg:text-lg  text-white  lg:pr-2 '>Collaborative advertising campaign for the new Samsung S21 Ultra smartphone on the Forbes business magazine platform, the Samsung brand increased smartphone sales and received many positive mentions on social media.</p>

                  <div className='w-full flex items-center justify-center  pt-12 pb-4'>
                  <button className='py-2 px-6 bg-[#57BA5E] rounded-full text-xl text-white  font-semibold'>
                        Discuss Projects <i className="ri-arrow-right-line"></i>
                    </button>
                  </div>
         
         </div>
    </>
  )
}

export default BottomPage2
