import React from 'react'
import HighlightText from '../HomePage/HighlightText';
import CTAButton from "../../core/HomePage/Button";

const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Learning for",
      highlightText: "Anyone, Anywhere",
      description:
        "At GATEMaster, we are goint to offer flexible, affordable, online learning. Our mission is to provide world-class education to anyone, anywhere, empowering individuals and organizations globally.",
      BtnText: "Learn More",
      BtnLink: "/",
    },
    {
      order: 1,
      heading: "Curriculum Based on exam Needs",
      description:
        "Save both time and resources with our user-friendly approach, designed to meet the demands of the exam.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "Our platform integrates interactive modules, practical exercises, and real-world examples to enhance understanding and retention",
    },
    {
      order: 3,
      heading: "PYQ's",
      description:
        "We provide access to a vast repository of Previous Year Questions (PYQs) meticulously curated to align with the GATE exam pattern and syllabus.",
    },
    {
      order: 4,
      heading: "Auto progress tracking",
      description:
        "Seamlessly keep track of your progress, track completed modules, and identify areas for improvement",
    },
    {
      order: 5,
      heading: "Discussion Forums",
      description:
        "Engage in insightful discussions and connect with fellow learners on our discussion forum",
    },
  ];


const LearningGrid = () => {
  return (
    <div className='grid  grid-col-1 lg:grid-cols-4 mb-10 p-5 lg:w-fit'>
    {
        LearningGridArray.map( (card, index) => {
            return (
                <div
                key={index}
                className={`${index === 0 && "lg:col-span-2 lg:h-[280px] p-5"}
                ${
                    card.order % 2 === 1 ? "bg-stone-200 lg:h-[280px] p-5" : "bg-stone-100 lg:h-[280px] p-5"
                }
                ${card.order === 3 && "lg:col-start-2"}
                ${card.order < 0 && "bg-transparent"}
                `}
                >
                {
                    card.order < 0 
                    ? (
                        <div className='lg:w-[90%] flex flex-col pb-5 gap-3'>
                            <div className='text-4xl font-semibold'>
                                {card.heading}
                                <HighlightText text={card.highlightText} />
                            </div>
                            <p className='font-medium'>
                                {card.description}
                            </p>
                            <div className='w-fit mt-4'>
                                <CTAButton active={true} linkto={card.BtnLink}>
                                    {card.BtnText}
                                </CTAButton>
                            </div>
                        </div>
                    )
                    : (<div className='flex flex-col gap-8 p-7'>
                        <h1 className='text-black text-lg'>
                            {card.heading}
                        </h1>
                        <p className='text-black font-medium'>
                            {card.description}
                        </p>
                    </div>)
                }

                </div>
            )
        } )
    } 
    </div>
  )
}

export default LearningGrid
