import React from 'react'
import { CareCard } from '../UI'
import { CARECARDS } from '@/const'
import { motion } from 'framer-motion'
import { careDescrptionContainerAnim, titleAnim } from '@/animations'
export const CareSection = () => {
  return (
    <section className="py-[88px] px-[50px] sm:px-[140px]">
      <motion.h3
        initial="hidden"
        whileInView="visible"
        variants={titleAnim}
        className="text-[28px] font-bold lg:text-[32px]">
        Why We Care
      </motion.h3>
      <motion.div
        variants={careDescrptionContainerAnim}
        initial="hidden"
        whileInView="visible"
        className="grid lg:grid-cols-2 xl:grid-cols-4">
        {CARECARDS.map((careCard, index) => (
          <CareCard
            key={index}
            icon={careCard.icon}
            percent={careCard.percent}
            text={careCard.text}
            boldText={careCard.boldText}
          />
        ))}
      </motion.div>
    </section>
  )
}
