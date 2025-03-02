import { React,useRef } from "react";
import image from '../../assets/face_detection1.jpg';
import { motion,useInView } from 'framer-motion'



function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });
  
  return (
    <>
      <div className='w-full min-h-screen bg-gray-100 p-4'>
        <div className='w-full h-full flex flex-col justify-center'>
          <div className='text-center space-y-3 m-10'>
            <motion.h2
             initial={{opacity:0,y:-50}}
             animate={{opacity:1,y:0}}
             transition={{duration:1.5}}
             className='font-semibold text-2xl text-orange-500'>
              <span className='font-bold text-4xl '>#</span>ourJourneyStart
            </motion.h2>
            <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }} 
            className='font-bold text-3xl font-[Poppins]'>WHAT'S A DETECTIFY Start?</motion.h1>
            <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }} 
            className='text-center text-gray-500'>
              Our journey has evolved from humble beginnings. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos odit eum maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, vitae.
            </motion.p>
          </div>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-2 p-4 gap-4'>
            <div className='bg-gray-100 p-4 text-gray-800 h-60 hover:bg-blue-600 group transition-all duration-300'>
              <h1 className='text-blue-600 font-bold text-4xl mt-5 group-hover:text-white transition-all duration-300'>On the streets</h1>
              <p  className='text-black mt-5 opacity-50 group-hover:text-white'>
                The ride started from a simple idea and fire in the belly to do something unconventional. Every evening after office, we stood outside the metro station in Delhi to sell our freshly made hot chocolate. Crazy days!
              </p>
            </div>

            <div className='bg-gray-100 p-4 text-gray-800 h-60 hover:bg-blue-600 group transition-all duration-300'>
              <h1 className='text-blue-600 font-bold text-4xl mt-5 group-hover:text-white transition-all duration-300'>30 cups a day</h1>
              <p className='text-black mt-5 opacity-50 group-hover:text-white'>
                After few weeks of selling on the streets, we collaborated with kiosks. But we were able to sell less than 30-40 cups a day. We were doing something wrong? But before we figure out, pandemic shut us down completely.
              </p>
            </div>

            <div className='bg-gray-100 p-4 text-gray-800 h-60 hover:bg-blue-600 group transition-all duration-300'>
              <h1 className='text-blue-600 font-bold text-4xl mt-5 group-hover:text-white transition-all duration-300'>5M+ cups sold</h1>
              <p className='text-black mt-5 opacity-50 group-hover:text-white'>
                We spent our lockdown to become the best at our product. In Nov 2020, we launched online with high energy. Today, people love Tiggle and we have a powerful community and are delivering happiness each day. 🙈!
              </p>
            </div>

            <div className='bg-gray-100 p-4 text-gray-800 h-60 hover:bg-blue-600 group transition-all duration-300'>
              <h1 className='text-blue-600 font-bold text-4xl mt-5 group-hover:text-white transition-all duration-300'>Farm and Team</h1>
              <p className='text-black mt-5 opacity-50 group-hover:text-white'>
                No more a one-man army. We partnered with farmers in Tamil Nadu to source one of India's best cocoa. We have skilled women at our unit in Agra to produce fresh Tiggle packets. And many awesome folks in our virtual office.
              </p>
            </div>
          </div>
        </div>
        
        <div className='w-full h-full mt-20'>
          <motion.div 
          ref={ref}
          initial={{opacity:0, y:-50}} 
          animate={isInView ? {opacity:1, y:0}:{}}
          transition={{duration:0.8}}
          className='text-center space-y-2'>
            <h1
            className='font-bold text-2xl text-orange-500 hover:underline font-[Poppins]'>Cocoa from the farms</h1>
            <p className='opacity-50 w-1/2 mx-auto'>
              Our cocoa is sourced from the best farms in Tamil Nadu. We believe in quality and freshness. We have partnered with farmers to ensure the best cocoa for our products.
            </p>
          </motion.div>
          <motion.div
           ref={ref}
           initial={{opacity:0,x:-100}}
           animate={isInView ?{opacity:1,x:0}:{}}
           transition={{duration:1.5}}
           className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10'>
            <div className='bg-gray-100 p-4 text-gray-800 h-60 hover:bg-blue-600 group transition-all duration-300'>
              <img src={image} alt="Farm 1" className='w-full h-full object-cover rounded-lg' />
            </div>
            <div className='bg-gray-100 p-4 text-gray-800 h-60 hover:bg-blue-600 group transition-all duration-300'>
              <img src={image} alt="Farm 2" className='w-full h-full object-cover rounded-lg' />
            </div>
            <div className='bg-gray-100 p-4 text-gray-800 h-60 hover:bg-blue-600 group transition-all duration-300'>
              <img src={image} alt="Farm 3" className='w-full h-full object-cover rounded-lg' />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;