import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ServiceImg1 from '../assets/service1.webp'
import ServiceImg2 from '../assets/service2.webp'
import ServiceImg3 from '../assets/service3.webp'
import ServiceImg4 from '../assets/service4.webp'
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/AnimationVariations';

const Services = () => {
  return (
    <div id='services' className='bg-[#f7f8fc]'>
      <div className='container pt-28 px-4 mx-auto'>
        <motion.div 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}
        className='text-center space-y-5'>
          <h2 className='text-3xl font-bold font-secondary text-heroBg'>What can we do together?</h2>
          <p className='md:w-1/2 mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est culpa minima quas obcaecati. Aspernatur corporis quis deserunt cumque vel, est repudiandae vitae reprehenderit, quod animi alias! Et soluta reiciendis in?</p>
        </motion.div>

        {/* service category */}
        <div>
        <Tabs>
        <motion.TabList
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}
        className="flex flex-wrap justify-between items-center md:gap-8 gap-4">
        <Tab>Couple Conselling</Tab>
        <Tab>Parenting Skills</Tab>
        <Tab>Feeling Stuck</Tab>
        <Tab>Self-Confidence</Tab>
        </motion.TabList>

        <TabPanel >
        <motion.div 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}
        className='flex flex-col md:flex-row gap-8 mt-8 mb-9'>
        <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
          <h3 className='text-3xl font-semibold text-primary mb-4'>Couple Counselling</h3>
          <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odio magnam sapiente ea aliquam quae cum fugit nesciunt velit, non consectetur? Maxime minus reiciendis dolorem doloribus illo deleniti distinctio temporibus.</p>
          <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
          <ul className='list-disc list-inside space-y-3'>
            <li>Understanding relationship dynamics</li>
            <li>Understanding relationship dynamics</li>
            <li>Understanding relationship dynamics</li>
          </ul>
        </div>
        <div className='md:w-1/2'>
          <img src={ServiceImg1} alt='service1' className='w-full h-auto rounded-2xl object-cover'/>
        </div>
        </motion.div>
        </TabPanel>

        <TabPanel >
        <motion.div 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}
        className='flex flex-col md:flex-row gap-8 mt-8  mb-9'>
        <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
          <h3 className='text-3xl font-semibold text-primary mb-4'>Parenting Skills</h3>
          <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odio magnam sapiente ea aliquam quae cum fugit nesciunt velit, non consectetur? Maxime minus reiciendis dolorem doloribus illo deleniti distinctio temporibus.</p>
          <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
          <ul className='list-disc list-inside space-y-3'>
            <li>Understanding relationship dynamics</li>
            <li>Understanding relationship dynamics</li>
            <li>Understanding relationship dynamics</li>
          </ul>
        </div>
        <div className='md:w-1/2'>
          <img src={ServiceImg2} alt='service2' className='w-full  h-auto rounded-2xl object-cover'/>
        </div>
        </motion.div>
        </TabPanel>

        <TabPanel >
        <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}
        className='flex flex-col md:flex-row gap-8 mt-8  mb-9'>
        <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
          <h3 className='text-3xl font-semibold text-primary mb-4'>Feeling Stuck</h3>
          <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odio magnam sapiente ea aliquam quae cum fugit nesciunt velit, non consectetur? Maxime minus reiciendis dolorem doloribus illo deleniti distinctio temporibus.</p>
          <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
          <ul className='list-disc list-inside space-y-3'>
            <li>Understanding relationship dynamics</li>
            <li>Understanding relationship dynamics</li>
            <li>Understanding relationship dynamics</li>
          </ul>
        </div>
        <div className='md:w-1/2'>
          <img src={ServiceImg3} alt='service3' className='w-full  h-auto rounded-2xl object-cover'/>
        </div>
        </motion.div>
        </TabPanel>

        <TabPanel >
        <motion.div 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}
        className='flex flex-col md:flex-row gap-8 mt-8  mb-9'>
        <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
          <h3 className='text-3xl font-semibold text-primary mb-4'>Self-confidence</h3>
          <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odio magnam sapiente ea aliquam quae cum fugit nesciunt velit, non consectetur? Maxime minus reiciendis dolorem doloribus illo deleniti distinctio temporibus.</p>
          <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
          <ul className='list-disc list-inside space-y-3'>
            <li>Understanding relationship dynamics</li>
            <li>Understanding relationship dynamics</li>
            <li>Understanding relationship dynamics</li>
          </ul>
        </div>
        <div className='md:w-1/2'>
          <img src={ServiceImg4} alt='service4' className='w-full  h-auto rounded-2xl object-cover'/>
        </div>
        </motion.div>
        </TabPanel>
       </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Services