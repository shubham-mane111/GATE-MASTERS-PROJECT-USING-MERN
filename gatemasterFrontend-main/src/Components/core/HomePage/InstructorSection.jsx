import React from 'react'
import Instructor from "../../../assets/Images/teacher3.png"
import HighlightText from './HighlightText'
import CTAButton from "../HomePage/Button"
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'


const scaleUp = {
  hidden: { scale: 0.1, opacity: 0 },
  show: {
      scale: 1,
      opacity: 1,
      transition: {
          type: 'spring',
          damping: 10,
          stiffness: 100,
          duration: 0.5,
      }
  }
};

const InstructorSection = () => {
  return (
    <div className='bg-stone-100'>
      <div className='flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center '>

        <motion.div
          variants={scaleUp}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className='lg:w-[50%] '>
          <img
            src={Instructor}
            alt="Instructor"
            className='shadow-white rounded-3xl'
          />
        </motion.div>

        <div className='lg:w-[50%] flex flex-col'>
          <div className='text-3xl lg:text-4xl font-semobold w-[50%] mb-2'>
          Join GateMaster as an
            <HighlightText text={"Instructor"} />
          </div>

          <p className='font-medium text-[16px] w-[80%] text-richblack-300 mb-12'>
         Share your expertise with students. Our platform welcomes anyone passionate about teaching to connect with eager learners. Whether you're an expert in a specific subject or possess valuable skills, GateMaster equips you with the tools and support to effectively teach what you love.
          </p>

          <div className='w-fit'>
            <CTAButton active={true} linkto={"/signup"}>
              <div className='flex flex-row gap-2 items-center'>
                Start Learning Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>

      </div>
    </div>
  )
}
export default InstructorSection
