import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../utilis/AnimationVariations';

const Pricing = () => {
  const handleScrollToContact = () =>{
    const targetElement = document.getElementById('contact');
    if(targetElement){
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior:'smooth',
      })
    }
  }
  const packages = [
    {
      name:'Bronze Package',
      price:'$99',
      description:'Ideal for individuals or small businesses looking to get started with mental wellness.',
      features:[
          'Access to basic wellness resources',
          'weekly mental wellness tips',
          'Community support group access'
      ],
    },
    {
      name:'Silver Package',
      price:'$199',
      description:'A great choice for growing buisnesses with additional features and support for mental wellness.',
      features:[
          'Access to all features of bronze package',
          'Monthly guided meditation sessions',
          'Personalized wellness plan',
          'Access to expert webinars'
      ],
    },
    {
      name:'Gold Package',
      price:'$199',
      description:'A great choice for growing buisnesses with additional features and support for mental wellness.',
      features:[
          'Access to all features of bronze package',
          'Monthly guided meditation sessions',
          'Personalized wellness plan',
          'Access to expert webinars'
      ],
    }
  ]
  return (
    <div id='pricing' className='bg-[#f7f8fc] pt-32'>
      <div className='container mx-auto px-8'>
        <motion.div 
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}
        className='text-center mb-12'>
          <h2 className='text-4xl font-bold font-secondary mb-3'>Perfect for large and small brands</h2>
          <p className='text-lg mb-12 md:w-2/3 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque perferendis velit quo aut quidem est tempora consectetur quae ea assumenda facilis magni, ipsum laborum minima ipsam eaque praesentium hic temporibus?</p>
        </motion.div>

        {/* packages */}
        <motion.div 
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}
        className='flex flex-col md:w-5/6 mx-auto md:flex-row gap-8 mb-12'>
          {
            packages.map((pkg,index)=>(
              <div key={index} className='bg-white rounded-lg p-6 flex-1 shadow-lg'>
                <h3 className='text-2xl font-semibold mb-4'>{pkg.name}</h3>
                <hr className='w-24 border text-primary border-primary'></hr>
                <p className='text-3xl font-bold mb-4'>{pkg.price}<span className='text-lg font-normal'>/mo</span></p>
                <p className='text-lg mb-4'>{pkg.description}</p>
                <ul className='list-disc list-inside space-y-2 mb-6'>
                  {
                    pkg.features.map((feature,idx)=>(
                      <li key={idx}>{feature}</li>
                    ))
                  }
                </ul>
                <button 
                onClick={handleScrollToContact}
                className='bg-primary text-white px-4 py-2 rounded'>Get Started</button>
              </div>
            ))
          }
        </motion.div>
      </div>
    </div>
  )
}

export default Pricing