import React from 'react'
import { motion } from 'framer-motion'
import { SupportCard } from '../UI'
import { titleAnim } from '@/animations'
import { supportContainerAnim } from '@/animations'
import { SUPPORTCARDS } from '@/consts'
export const SupportSection = () => {
  return (
    <section className="py-[104px] px-[80px] sm:px-[180px] md:px-[250px] lg:px-[120px] 2xl:px-[300px]">
      <motion.p
        initial="hidden"
        whileInView="visible"
        variants={titleAnim}
        className="text-[32px] font-bold mb-8">
        Supporting Our Sonar Community
      </motion.p>
      <motion.p initial="hidden" whileInView="visible" variants={titleAnim} className="mb-6">
        We help each member of the Sonar community proactively identify, measure, and support youth
        mental health.
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={supportContainerAnim}
        className="grid gap-4 lg:gap-6 lg:grid-cols-3">
        {SUPPORTCARDS.map(({ name, bgUrl }, index) => (
          <SupportCard key={index} name={name} url={bgUrl} />
        ))}
      </motion.div>
    </section>
  )
}
