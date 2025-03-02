import {React,useRef} from 'react';
import front_image from '../../assets/face_detection1.jpg';
import demo from '../../assets/face_detection2.jpg';
import { NavLink } from 'react-router-dom';
import {motion,useInView} from 'framer-motion'



function FirstPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });
  return (
    <>
      <div className="  flex flex-col md:flex-row items-center bg-gray-200 relative w-auto h-screen md:w-full md:h-screen " >
        {/* Text Section */}
        <motion.div
        initial={{opacity:0,x:-50}}
        animate={{opacity:1,x:0}}
        transition={{duration:0.8}}
        className="text-center md:text-left md:w-1/2 px-6 py-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
              Welcome to <strong className=' hover:text-blue-800 transition-all '>Detectify</strong>
            </h1>
          <div className="relative py-5">
            <NavLink to="/Profile" className="hover:cursor-pointer relative z-10 px-11 py-2 text-red-500 font-medium border-2 border-blue-700 rounded-3xl transition duration-500 ease-in-out group overflow-hidden hover:text-white ">
            <button>
              Get Started
              <div className="absolute inset-0 bg-blue-600 h-full w-0 rounded-2xl transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-blue-500 z-[-1]"></div>
            </button>
            </NavLink>
            
          </div>
          <p className="text-lg md:text-2xl font-medium hover:underline ">
            Your one-stop solution for Intruder Detection
          </p>
        </motion.div>
        
        {/* Image Section */}
        <motion.div 
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        transition={{duration:0.8}}
        className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={front_image}
            className="rounded shadow-lg w-4/5 md:w-3/4 h-auto"
            alt="Face detection banner"
          />
        </motion.div>
        
      </div>
      <hr className='w-full  '/>
       
       <div className='flex flex-col lg:flex-row items-center justify-center w-full h-auto bg-gray-200 p-6 '>
        <div className='text-center mb-10 mt-10 w-1/2 h-auto'>
           <div className='p-4'>
              <h1 className='font-bold text-2xl text-blue-700 md:w-1/2'>Why choose us</h1>
              <h2 className='font-semibold text-xl md:w-1/2'>Our special benefits for you</h2>
              <p className='text-gray-600 md:w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <hr className='w-11' />
           </div>
          
        </div>
        <motion.div
         ref={ref}
         initial={{ opacity: 0,scale:0.8 }}
         animate={isInView ? { opacity: 1, scale: 1 } : {}}
         transition={{ duration: 0.8, ease: "easeOut" }}

         className='grid grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-row items-center justify-center lg:w-1/2 gap-4'>
          <div className='bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4 transform transition-transform duration-300 hover:scale-105'>
            <img src={demo} className='h-24 md:w-40 md:h-32' alt="Demo" />
            <div className='text-center lg:text-center lg:ml-0 mt-4 lg:mt-4'>
              <h3 className='font-bold text-xl'>Benefit 1</h3>
              <p className='text-gray-600'>Description of benefit 1.</p>
            </div>
          </div>
          <div className='bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4 transform transition-transform duration-300 hover:scale-105'>
            <img src={demo} className='h-24 md:w-40 md:h-32' alt="Demo" />
            <div className='text-center lg:text-center lg:ml-0 mt-4 lg:mt-4'>
              <h3 className='font-bold text-xl'>Benefit 2</h3>
              <p className='text-gray-600'>Description of benefit 2.</p>
            </div>
          </div>

          <div className='bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4 transform transition-transform duration-300 hover:scale-105'>
            <img src={demo} className='h-24 md:w-40 md:h-32' alt="Demo" />
            <div className='text-center lg:text-center lg:ml-0 mt-4 lg:mt-4'>
              <h3 className='font-bold text-xl'>Benefit 1</h3>
              <p className='text-gray-600'>Description of benefit 1.</p>
            </div>
          </div>

          
        </motion.div>
      </div>
    </>
  );
}

export default FirstPage;
