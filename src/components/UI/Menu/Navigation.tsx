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
    <motion.ul variants={menuVariantsAnim} className="flex flex-col min-w-[350px] gap-1 p-0 backdrop-blur-sm">
      <a href="#about" onClick={(e) =>{ setCurrentTab('about') ; e.preventDefault() }}>
        <motion.li
          variants={menuVariantsItemAnim}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-dark">
          <span
            className={`text-[16px] mx-[25px] font-semibold leading-[19px] underline-offset-2 decoration-white text-white ${
              currentTab === 'about' && 'underline'
            }`}>
            About
          </span>
        </motion.li>
      </a>
      <a href="#faq" onClick={(e) =>{ setCurrentTab('faq') ; e.preventDefault() }}>
        <motion.li
          variants={menuVariantsItemAnim}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-dark">
          <span
            className={`text-[16px]  mx-[25px] font-semibold  leading-[19px] underline-offset-2 decoration-white text-white ${
              currentTab === 'faq' && 'underline'
            }`}>
            FAQ
          </span>
        </motion.li>
      </a>
      <a href="#contact" onClick={(e) =>{ setCurrentTab('contact') ; e.preventDefault() }}>
        <motion.li
          variants={menuVariantsItemAnim}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-dark">
          <span
            className={`text-[16px]  mx-[25px]  font-semibold leading-[19px] underline-offset-2 decoration-white text-white  ${
              currentTab === 'contact' && 'underline'
            }`}>
            Contact
          </span>
        </motion.li>
      </a>
    </motion.ul>
  )
}
