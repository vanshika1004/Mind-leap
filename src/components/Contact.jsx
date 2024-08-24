import React, { useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { fadeIn } from '../utilis/AnimationVariations';
import { motion } from 'framer-motion';

const Contact = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country ,setCountry] = useState("");
    const [message, setMessage] = useState("");
    const [showModal , setShowModal] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data ={
            name,
            email,
            phone,
            country,
            message
        }
        if(!data){
            alert("Please all the fields");
            return;
        }
        setShowModal(true);
    }

    const closeModal = () =>{
        setShowModal(false);
        setName("");
        setEmail("");
        setCountry("");
        setMessage("");
        setPhone("");
    }
  return (
    <div id='contact' className='bg-heroBg flex items-center justify-center py-28 px-8'>
        <div className='container mx-auto'>
            <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8 text-white'>
                {/* left side */}
                <motion.div 
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once:false,amount:0.7}}
                className='space-y-8'>
                    <h2 className='text-4xl font-bold font-secondary mb-4 text-white'>Make an Appointment</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
                        <div className='flex items-start gap-4'>
                            <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                                <FaUserAlt className='text-primary'/>
                            </div>
                            <div className='space-y-1'>
                                <h3 className='text-lg font-medium'>24 Hours Services</h3>
                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, sunt?</p>
                            </div>
                        </div>

                        <div className='flex items-start gap-4'>
                            <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                                <FaEnvelope className='text-primary' /> 
                            </div>
                            <div className='space-y-1'>
                                <h3 className='text-lg font-medium'>Expert Therapist</h3>
                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, sunt?</p>
                            </div>
                        </div>

                        <div className='flex items-start gap-4'>
                            <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                                <IoCall className='text-primary' /> 
                            </div>
                            <div className='space-y-1'>
                                <h3 className='text-lg font-medium'>High Quality Care</h3>
                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, sunt?</p>
                            </div>
                        </div>

                        <div className='flex items-start gap-4'>
                            <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                                <FaGlobe className='text-primary' /> 
                            </div>
                            <div className='space-y-1'>
                                <h3 className='text-lg font-medium'>Trusted Clinic</h3>
                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, sunt?</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* right side */}
                <motion.div 
                variants={fadeIn('left', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once:false,amount:0.7}}
                className='space-y-8 p-8 bg-white shadow-xl rounded-md'>
                    <h3 className='text-2xl font-bold mb-4 text-black text-center'>Book Appointment</h3>
                    <form className='space-y-8 text-black' onSubmit={handleSubmit}>
                        <div className='flex sm:flex-row flex-col gap-4'>
                            <input 
                            onChange={e=>setName(e.target.value)}
                            type='text' placeholder='Name' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 
                            focus:ring-primary shadow '/>
                            <input 
                            onChange={e=>setEmail(e.target.value)}
                            type='text' placeholder='Email Address' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 
                            focus:ring-primary shadow'/>
                        </div>

                        <div className='flex sm:flex-row flex-col gap-4'>
                            <input 
                            onChange={e=>setPhone(e.target.value)}
                            type='tel' placeholder='Contact Number' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 
                            focus:ring-primary shadow'/>
                            <input
                            onChange={e=>setCountry(e.target.value)}
                            type='text' placeholder='Country' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 
                            focus:ring-primary shadow'/>
                        </div>

                        <textarea 
                        onChange={e=>setMessage(e.target.value)}
                        placeholder='Enter your message here' rows='5'
                        className='w-full p-4 rounded-md focus:outline-none focus:ring-2 
                        focus:ring-primary shadow'/>

                        <button type='submit' className='bg-primary p-3 w-full rounded-md text-white text-center hover:bg-primary/90'>Submit</button>
                    </form>
                </motion.div>
            </div>
        </div>

        {
            showModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-80'>
                    <div className='bg-white p-8 rounded-md shadow-lg'>
                        <h2 className='text-2xl font-bold mb-4'>Thank You!</h2>
                        <p>Thank you , {name} for submitting your query.</p>
                        <button onClick={closeModal}
                         className='mt-4  px-4 py-2 bg-primary text-white rounded-md'>Close</button>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Contact