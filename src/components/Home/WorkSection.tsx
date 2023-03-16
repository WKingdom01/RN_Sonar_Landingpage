import React from 'react'
import { motion } from 'framer-motion'
import { Button, WorkImageCard } from '../UI'
import Work1 from '@/assets/images/work1.png'
import Work2 from '@/assets/images/work2.png'
import Work3 from '@/assets/images/work3.png'
import Arrow from '@/assets/images/arrow.svg'
import { ArrowAnim, titleAnim, workContainerAnim, workItemAnim } from '@/animations'

export const WorkSection = () => (
  <section
    id="faq"
    className="bg-[#EDC5FF]/40 pt-[56px] pb-[96px] rounded-tr-[100px] rounded-bl-[100px] lg:rounded-tr-[200px] lg:rounded-bl-[200px]">
    <motion.p
      className="text-[32px] font-bold"
      initial="hidden"
      whileInView="visible"
      variants={titleAnim}>
      How Sonar Works
    </motion.p>
    <div className="relative py-20 lg:px-[50px] lx:px-[162px] flex justify-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={ArrowAnim}
        className="absolute w-full opacity-0 lg:opacity-100 px-[20px] sm:px-[100px] md:px-[200px] lg:px[100px] xl:px-[80px] top-52">
        <img src={Arrow} alt="arrow" className="w-full" />
      </motion.div>
      <motion.div
        className="grid w-full gap-6 lg:grid-cols-3 place-content-center place-items-center"
        initial="hidden"
        whileInView="visible"
        variants={workContainerAnim}>
        <motion.div variants={workItemAnim} className="relative lg:text-start w-[300px] h-[720px]">
          <WorkImageCard src={Work1} />
          <div className="flex flex-col mt-2 space-y-4 ">
            <p className="text-[22px] text-black-light font-bold">
              Begin your journey by signing up
            </p>

            <p className="text-[14px] text-black-light">
              Youth, parents, and schools &nbsp;
              <span className="font-bold">
                can register to become a member of the Sonar community.
              </span>
            </p>

            <p className="text-[14px] text-black-light">
              Youth have the &nbsp;
              <span className="font-bold">
                power to choose the people they want in their support network
              </span>{' '}
              &nbsp; (friends, parents, teachers, etc.) and &nbsp;
              <span className="font-bold">
                can choose whether or not to share their online activity with us.
              </span>
            </p>
          </div>
          <div className="absolute flex justify-between w-full bottom-2">
            <Button
              text="Get Started"
              styleContent="px-[15px] sm:py-[14px] font-[14px]"
              padContent={false}
            />
            <Button
              text="See Demo Video"
              filled={false}
              styleContent="px-[12px] sm:py-[14px]"
              padContent={false}
            />
          </div>
        </motion.div>

        <motion.div variants={workItemAnim} className="relative lg:text-start w-[300px] h-[720px]">
          <WorkImageCard src={Work2} />
          <div className="flex flex-col mt-2 space-y-4">
            <p className="text-[22px] text-black-light font-bold">
              Our AI analyzes search keywords and online posts
            </p>

            <p className="text-[14px] text-black-light">
              <span className="font-bold">This is not a surveillance app!</span>
            </p>

            <p className="text-[14px] text-black-light">
              To identify if a youth is at risk for a mental health crisis and support them, our
              &nbsp;
              <span className="font-bold">
                AI only looks at words used in youth’s online posts, comments, and search history
              </span>{' '}
              &nbsp; if they decide to share their online accounts with us.
            </p>

            <p className="text-[14px] text-black-light">(No, we won’t go through your DMs!)</p>
          </div>
          <div className="absolute flex justify-start w-full bottom-2">
            <Button text="See Data Privacy" styleContent="px-[9px] sm:py-[14px] w-full lg:w-fit" />
          </div>
        </motion.div>

        <motion.div variants={workItemAnim} className="relative lg:text-start w-[300px] h-[720px]">
          <WorkImageCard src={Work3} />
          <div className="flex flex-col mt-2 space-y-4">
            <p className="text-[22px] text-black-light font-bold">
              Youth’s community is here to support them
            </p>

            <p className="text-[14px] text-black-light">
              If our AI finds a youth is at risk, our &nbsp;
              <span className="font-bold">
                trained clinicians confirm if immediate support is needed, give evidence-based
                recommendations, and send the report to the youth’s appropriate support network{' '}
              </span>
              &nbsp; showing posts and keywords that were flagged as a risk &nbsp;
              <span className="font-bold">(nothing else will be shared!).</span>
            </p>

            <p className="text-[14px] text-black-light">Have more questions?</p>
          </div>
          <div className="absolute flex justify-start w-full bottom-2">
            <Button
              text="Visit FAQs"
              styleContent="px-[20px] sm:py-[14px] w-full lg:w-fit"
              padContent={false}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
)
