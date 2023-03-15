import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { motion } from 'framer-motion'
import { CommunityCard } from '../UI'
import Prev from '@/assets/icons/prev.svg'
import Next from '@/assets/icons/next.svg'
import { carouselAnim, titleAnim } from '@/animations'
import { COMMUNITYCARDS } from '@/const'

// import Youth from '@/assets/images/support_youth.jpg'

export const CommunitySection = () => {
  const [ currentSlide, setCurrentSlide ] = useState<number>(1)
  const [ percent, setPercent ] = useState<number>(50)

  useEffect(() => {
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const onResize = () => {
    console.warn(window.innerWidth)
    if (window.innerWidth < 1024) {
      setPercent(100)
      setCurrentSlide(0)
    } else {
      setPercent(50)
      setCurrentSlide(1)
    }
  }
  const onPrev = () => {
    setCurrentSlide((v: number) => {
      if (v <= 0) {
        return COMMUNITYCARDS.length - 1
      } else {
        return v - 1
      }
    })
  }
  const onNext = () => {
    setCurrentSlide((v: number) => {
      if (v >= COMMUNITYCARDS.length - 1) {
        return 0
      } else {
        return v + 1
      }
    })
  }

  const updateCurrentSlide = (index: number) => {
    if (currentSlide !== index) {
      setCurrentSlide(index)
    }
  }
  return (
    <section className="pt-[61px] pb-[110px] px-[5px] sm:px-[40px]  lg:px-[60px] xl:px-[100px] 2xl:px-[140px] bg-sky-light rounded-tr-[100px] rounded-bl-[100px] lg:rounded-tr-[200px] lg:rounded-bl-[200px]">
      <motion.p
        initial="hidden"
        whileInView="visible"
        variants={titleAnim}
        className="text-[32px] font-bold mb-8">
        Our Community Loves Sonar
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={carouselAnim}
        className="relative px-[5px] sm:px-[100px] lg:px-[120px] xl:px-[140px]">
        <button className="hidden sm:block absolute left-1 top-[50%] -translate-y-[50%] w-[70px]">
          <img src={Prev} alt="Prev" onClick={onPrev} width="70" />
        </button>
        <Carousel
          showStatus={false}
          centerMode={true}
          centerSlidePercentage={percent}
          transitionTime={1000}
          infiniteLoop={true}
          selectedItem={currentSlide}
          onChange={updateCurrentSlide}
          showIndicators={false}
          showArrows={false}>
          {COMMUNITYCARDS.map((card, index) => (
            <CommunityCard
              key={index}
              icon={card.icon}
              text={card.text}
              name={card.name}
            />
          ))}
        </Carousel>

        <button className="hidden sm:block absolute right-1 top-[50%] -translate-y-[50%] w-[70px]">
          <img src={Next} alt="Next" onClick={onNext} width="70" />
        </button>
      </motion.div>
    </section>
  )
}
