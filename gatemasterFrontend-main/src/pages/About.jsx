import React from 'react'
import HighlightText from '../Components/core/HomePage/HighlightText';
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from "../Components/core/AboutPage/Quote"
import FoundingStory from "../assets/Images/FoundingStory.png"
import StatsComponent from '../Components/core/AboutPage/Stats'
import LearningGrid from '../Components/core/AboutPage/LearningGrid'
import ContactFormSection from '../Components/core/AboutPage/ContactFormSection'
import Footer from '../Components/common/Footer'
import RatingSlider from '../Components/core/Ratings/RatingSlider';

const About = () => {
  return (
    <div className='mx-auto text-black bg-white'>
      {/* section 1 */}
      <section className='bg-gray-200'>
        <div className='relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-richblack-600'>
            <header className='mx-auto py-20 text-4xl font-semibold lg:w-[70%]'>
            Empowering GATE aspirants with innovative online learning solutions is 
                <HighlightText text={"our mission at GATEMaster."}/>
                <p className='mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]'> We're dedicated to providing top-notch courses, utilizing advanced technology, and fostering a dynamic learning environment, ensuring a brighter future for every learner.</p>
            </header>
            <div className='sm:h-[70px] lg:h-[150px]'></div>
            <div className='absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5'>
                <img src={BannerImage1} />
                <img src={BannerImage2} />
                <img src={BannerImage3} />
            </div>
        </div>
      </section>

      {/* section 2 */}

      <section className='border-b border-richblack-700'>
        <div className='mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-black'>
          <div className='h-[100px] '></div>
            <Quote/>
        </div>
      </section>


      {/* section 3 */}

      <section>
        <div className='mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500'>
            {/* foudning story wala div */}
            <div className='flex flex-col items-center gap-10 lg:flex-row justify-between '>
                {/* founding story left box */}
                <div className='my-24 flex lg:w-[50%] flex-col gap-10'>
                    <h1 className='bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] '>Our Founding Story</h1>

                    <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>The inception of our e-tech platform stems from a collective vision to revolutionize education. It originated with a diverse team of educators, technologists, and lifelong learners who shared a common goal: to provide accessible, flexible, and top-tier learning experiences in an ever-changing digital landscape.</p>

                    <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>Drawing from our own experiences, we recognized the constraints of conventional educational models. We firmly believed in breaking free from classroom confines and geographical limitations. Our platform aims to transcend these barriers, empowering individuals worldwide to unleash their inherent capabilities and achieve their goals.</p>
                </div>
                {/* foudning story right box */}
                <div>
                    <img className='shadow-[0_0_20px_0] shadow-[#FC6767]'  src={FoundingStory} />
                </div>
            </div>
            <div className=' mt-4 mb-4 bg-black w-full h-[1px]'></div>
            {/* vision and mission wala parent div */}
            <div className='flex flex-col items-center lg:gap-10 lg:flex-row justify-between'>
                {/* left box */}
                <div className='my-24 flex lg:w-[40%] flex-col gap-10'>
                    <h1 className='bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] '>Our Vision</h1>
                    <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>Our journey began with a vision to transform education through an innovative e-learning platform. Committed experts collaborated to craft a robust and user-friendly system, blending advanced technology with captivating content to cultivate an interactive learning environment.</p>
                </div>

                {/* right box */}
                <div className='my-24 flex lg:w-[40%] flex-col gap-10'>
                    <h1 className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] '>
                        Our Mission
                    </h1>
                    <p className='text-base font-medium text-richblack-300 lg:w-[95%]'>At the heart of our mission is to cultivate a thriving community of learners, fostering connections and collaboration. We believe in the power of shared knowledge and dialogue, facilitating interaction through forums, live sessions, and networking opportunities.</p>
                </div>
            </div>
        </div>
      </section>  
      <div className=' mt-4 mb-4 bg-black w-full h-[1px]'></div>
      {/* section 4 */}
      <StatsComponent/>  
      <div className=' mt-4 mb-4 bg-black w-full h-[1px]'></div>
      {/* section 5 */}
      <section className='mx-auto p-2 flex flex-col items-center justify-between gap-5 mb-[140px]'>
        <LearningGrid />
        <div className=' mt-4 mb-4 bg-black w-full h-[1px]'></div>
        <ContactFormSection />
      </section>
      <div className=' mt-4 mb-4 bg-black w-full h-[1px]'></div>
      <section>
      <div className=' mb-16 mt-3 w-screen'>
        <h2 className='text-center text-4xl font-semibold mt-8 text-black-5 mb-5'>Reviews from other learners</h2>
        <RatingSlider />
      </div>
      </section>

    </div>
  )
}

export default About
