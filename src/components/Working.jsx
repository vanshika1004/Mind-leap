import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utilis/AnimationVariations'

const Working = () => {
  return (
    <div className='relative bg-cover bg-center py-12 bg-working-img'>
        <div className='absolute inset-0 bg-heroBg bg-opacity-85'></div>
        <div 
        className='relative container mx-auto px-4 py-20'>
            <motion.div 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
            className='text-white text-center mb-20'>
                <h2 className='text-4xl font-bold font-secondary mb-4'>How It Works</h2>
                <p className='text-lg md:w-1/2 w-full mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti et quae officiis ab officia ipsum minima ipsa fugiat aliquid deserunt culpa, ex saepe facere quasi fugit consequuntur eaque impedit.</p>
            </motion.div>

            <motion.div 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
            className='flex flex-col md:flex-row mx-auto md:w-4/5 gap-8'>
                <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white
                    size-14 rounded-full flex items-center justify-center'>1</div>
                    <h3 className='text-lg font-medium mt-8'>Fill a Form</h3>
                    <p className='my-2'>Step 1.Description goes here. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white
                    size-14 rounded-full flex items-center justify-center'>2</div>
                    <h3 className='text-lg font-medium mt-8'>Get Matched</h3>
                    <p className='my-2'>Step 2.Description goes here. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='relative bg-white text-center rounded-lg p-6 flex-1'>
                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white
                    size-14 rounded-full flex items-center justify-center'>1</div>
                    <h3 className='text-lg font-medium mt-8'>Schedule</h3>
                    <p className='my-2'>Step 3.Description goes here. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Working