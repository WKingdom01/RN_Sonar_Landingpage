import React from 'react'
import peopleImg from '@/assets/images/dashboard_hero_people.png'
import consoleImg from '@/assets/images/dashboard_hero_console.png'
import { Button } from '../UI'
import { motion } from 'framer-motion'
import { heroDescrptionContainerAnim, heroScaleVariantAnim, heroItemAnim } from '../../animations'

export const HomeHeroSection = () => (
  <section
    id="about"
    className="grid px-[10px] gap-4 lg:grid-cols-2 lg:gap-6 pt-[120px] sm:pt-[150px] md:pt-[190px] lg:pt-[198px] pb-[142px] lg:px-[118px] bg-gradient-to-t from-[#EDC5FFE5] to-[#C2EEFFE5] rounded-bl-[100px] lg:rounded-bl-[200px]"
  >
    <motion.div
      variants={heroDescrptionContainerAnim}
      initial="hidden"
      whileInView="visible"
      className="px-2 lg:text-left">
      <motion.h3 variants={heroItemAnim} className="text-[26px] lg:text-[32px] font-bold">
        We proactively detect signs of mental health concerns in youth so they can get the support
        they need early. We intervene before things get serious.
      </motion.h3>
      <motion.p variants={heroItemAnim} className="text-[14px] py-[24px]">
        It takes on average 11 years from the first symptoms of mental illness to receive any sort
        of treatment. We cut that short by identifying trends in topics and phrases in youth’s
        online activity and surveys to support youth ages 13+ when they may be at risk for
        depression, anxiety, self-harm, etc. with the power of AI and help from our trained
        clinicians (with the youth’s consent, of course). Because youth are not alone in their
        journey, we notify youth’s support network when they’re at risk and equip them with the
        tools and recommendations they need to support youth.{' '}
      </motion.p>
      <motion.div variants={heroItemAnim} className="flex justify-center gap-x-4">
        <Button
          text="Join Now"
          styleContent="text-[16px] px-[5px] sm:px-[33px] sm:py-[19px] drop-shadow-3xl"
        />
        <Button
          text="See Demo Video"
          filled={false}
          styleContent="text-[16px] px-[2px] sm:px-[16px] sm:py-[19px]"
        />
      </motion.div>
    </motion.div>

    <motion.div
      variants={heroScaleVariantAnim}
      initial="hidden"
      whileInView="visible"
      className="flex items-center justify-center">
      <div className="flex  flex-col md:flex-row lg:flex-col gap-2 px-[10px] xl:justify-center xl:flex-row xl:relative xl:w-[614px] xl:h-[500px]">
        <img
          className="max-w-[300px] md:max-w-[380px] lg:w-[426px] xl:max-w-[345px] mx-auto xl:absolute xl:right-[16px] z-0"
          src={consoleImg}
          alt="dashboard_hero_console"
        />
        <img
          className="max-w-[300px] md:max-w-[380px] xl:max-w-[426px] xl:left-0 xl:absolute bottom-[0px] z-10"
          src={peopleImg}
          alt="dashboard_hero_people"
        />
      </div>
    </motion.div>
  </section>
)
