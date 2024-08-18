import React from 'react'
import { motion } from 'framer-motion'

const RightPage3 = () => {

    const images = [
        {
            src: "https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/vilebrequin.svg",
            alt: "",
        },
        {
            src: "https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/grishin.svg",
            alt: "",
        },
        {
            src: "https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/garnier.svg",
            alt: "",
        },
        {
            src: "https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/kosmos.svg",
            alt: "",
        },
        {
            src: "https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/bp.svg",
            alt: "",
        },
        {
            src: "https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/mars.svg",
            alt: "",
        },
        {
            src: "https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/arbeidsadvocaat.svg",
            alt: "",
        },
        {
            src: "https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/cloutboost.svg",
            alt: "",
        },
        {
            src: "https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/asus.svg",
            alt: "",
        },
    ];

    return (
        <div className='w-1/2 flex flex-col justify-center  bg-red-100  ' >
            <motion.div
                className='flex   bg-red-500 w-3/4  '>


                {images.map((image, index) => (
                    <div className='flex  mx-[1rem]'>



                        <img className='h-20 w-20' src={image.src} alt={image.alt} />



                    </div>
                ))}
            </motion.div>

            {/*<img src="https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/gaviscon.svg" alt="" />
      <img src="https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/acer.svg" alt="" />
      <img src="https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/predator.svg" alt="" />
      <img src="https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/hp.svg" alt="" />
      <img src="https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/mastercard.svg" alt="" />
      <img src="https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/aorus.svg" alt="" />
      <img src="https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/nivea.svg" alt="" />
      <img src="https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/bazelevs.svg" alt="" />
      <img src="https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/therainforest.svg" alt="" />
      <img src="https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/lg.svg" alt="" />
      <img src="https://gamifycat.io/wp-content/themes/gamifycat/img/logo-clients/samsung.svg" alt="" /> */}
        </div>
    )
}

export default RightPage3
