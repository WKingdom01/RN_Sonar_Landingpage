import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { motion } from 'framer-motion'
import Prev from '@/assets/icons/prev1.svg'
import Next from '@/assets/icons/next1.svg'
import { PARTNERCARDS } from '@/consts'
import { PartnerCard } from '../UI'

export const PartnersSection: React.FC = () => {
  const [ currentSlide, setCurrentSlide ] = useState<number>(4)
  const [ percent, setPercent ] = useState<number>(25)

  useEffect(() => {
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const onResize = () => {
    if (window.innerWidth < 1024) {
      setPercent(100)
      setCurrentSlide(4)
    } else {
      setPercent(25)
      setCurrentSlide(4)
    }
  }
  const onPrev = () => {
    setCurrentSlide((v: number) => {
      if (v <= 0) {
        return PARTNERCARDS.length - 1
      } else {
        return v - 1
      }
    })
  }
  const onNext = () => {
    setCurrentSlide((v: number) => {
      if (v >= PARTNERCARDS.length - 1) {
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
    <section className="py-[64px] px-[20px] sm:px-[40px]  lg:px-[60px] xl:px-[100px] 2xl:px-[140px] rounded-tr-[200px] rounded-bl-[200px]">
      <motion.p
        className="text-[32px] font-bold mb-8"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 2,
            type: 'spring',
          },
        }}
        viewport={{ once: true }}
      >
        Partners
      </motion.p>
      <motion.div
        initial={{ y:100, opacity: 0 }}
        whileInView={{
          y:0,          
          opacity: 1,
          transition: {
            duration: 2,
            type: 'spring',
          },
        }}
        viewport={{ once: true }}
        className="relative partner px-[80px] sm:px-[100px] lg:px-[120px] xl:px-[140px]">
        <button className="hidden sm:block absolute left-1 top-[50%] -translate-y-[50%]">
          <img src={Prev} alt="Prev" onClick={onPrev} width="20" />
        </button>
        <Carousel
          centerMode={true}
          swipeScrollTolerance={10}
          centerSlidePercentage={percent}
          showStatus={false}
          infiniteLoop={true}
          selectedItem={currentSlide}
          onChange={updateCurrentSlide}
          showIndicators={false}
          showArrows={false}
          autoPlay={true}
          showThumbs={false}
        >
          {PARTNERCARDS.map((url, index) => (
            <PartnerCard key={index} url={url} />
          ))}
        </Carousel>
        <button className="hidden sm:block absolute right-1 top-[50%] -translate-y-[50%] ">
          <img src={Next} alt="Next" onClick={onNext} width="20" />
        </button>
      </motion.div>
    </section>
  )
}
