import React from 'react'
import { CareCard } from '../UI'
import { CARECARDS } from '@/consts'
import { motion } from 'framer-motion'
export const CareSection = () => {
  return (
    <section className="py-[88px] px-[50px] sm:px-[140px]">
      <motion.h3
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
        className="text-[28px] font-bold lg:text-[32px]">
        Why We Care
      </motion.h3>
      <div className="grid lg:grid-cols-2 xl:grid-cols-4">
        {CARECARDS.map((careCard, index) => (
          <CareCard
            key={index}
            icon={careCard.icon}
            percent={careCard.percent}
            text={careCard.text}
            boldText={careCard.boldText}
          />
        ))}
      </div>
    </section>
  )
}
