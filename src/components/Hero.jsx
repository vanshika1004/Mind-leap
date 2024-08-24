import React from 'react'
import HeroImg from '../assets/hero.webp'
import { IoArrowForwardCircle } from "react-icons/io5";
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/AnimationVariations';

const Hero = () => {
  return (
    <section id='home' className='bg-heroBg text-white flex items-center pt-28 md:h-screen'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 
        overflow-y-hidden gap-12 h-full'>
            {/* left side */}
            <motion.div 
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
            className='md:w-1/2'>
                <h1 className='text-3xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>Start your journey to Mental Wellness</h1>
                <p className='text-lg mb-12 md:pr-8'>We lower your stress levels,we got to know your pain , we connect better , we improve our focus , and we're are kinder to yourselves.Let us walk you through the basics in our new mindful guide on how to meditate. </p>
                <button className='bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90'>
                    <a href='#contact' className='flex gap-1 items-center'>
                        <span>Get Started</span>
                        <IoArrowForwardCircle />
                    </a>
                </button>
            </motion.div>

            {/* right side */}
            <motion.div 
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
            className='md:w-1/2 h-full'>
                <img src={HeroImg} alt='heroimg' className='w-full object-cover'/>
            </motion.div>
        </div>
    </section>
  )
}

export default Hero