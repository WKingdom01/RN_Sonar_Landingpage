import * as React from 'react'
import { motion } from 'framer-motion'
import { menuVariantsAnim, menuVariantsItemAnim } from '@/animations'

export interface NavigationProps {
  setCurrentTab: (v: string) => void
  currentTab: string
}

export const Navigation: React.FC<NavigationProps> = ({
  setCurrentTab,
  currentTab,
}: NavigationProps) => {
  return (
    <motion.ul variants={menuVariantsAnim} className="flex flex-col gap-1 p-0">
      <a href="#about" onClick={() => setCurrentTab('about')}>
        <motion.li
          variants={menuVariantsItemAnim}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-dark/50">
          <span
            className={`text-[16px] mx-[25px] font-semibold leading-[19px]  ${
              currentTab === 'about' ? 'text-[#CB00FF] ' : ' text-[#ffffff] '
            }`}>
            About
          </span>
        </motion.li>
      </a>
      <a href="#faq" onClick={() => setCurrentTab('faq')}>
        <motion.li
          variants={menuVariantsItemAnim}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-dark/50">
          <span
            className={`text-[16px]  mx-[25px] font-semibold  leading-[19px]  ${
              currentTab === 'faq' ? 'text-[#CB00FF] ' : ' text-[#ffffff] '
            }`}>
            FAQ
          </span>
        </motion.li>
      </a>
      <a href="#contact" onClick={() => setCurrentTab('contact')}>
        <motion.li
          variants={menuVariantsItemAnim}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-dark/50">
          <span
            className={`text-[16px]  mx-[25px]  font-semibold leading-[19px]   ${
              currentTab === 'contact' ? 'text-[#CB00FF] ' : ' text-[#ffffff] '
            }`}>
            Contact
          </span>
        </motion.li>
      </a>
    </motion.ul>
  )
}
