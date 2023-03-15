import React, { useState } from 'react'
import { Menu } from './UI/Menu'
import { Button } from './UI'
import Logo from '@/assets/icons/logo.svg'
import { motion } from 'framer-motion'
import { headerYVariantAnim } from '../animations'
const Header = () => {
  const [ currentTab, setCurrentTab ] = useState('ABOUT')
  return (
    <motion.div
      variants={headerYVariantAnim}
      initial="hidden"
      animate="visible"
      className="fixed top-0 z-50 w-full overflow-show">
      <div className="bg-sky-light/70 backdrop-blur-sm pt-[42px] pb-[37px] px-[20px] lg:px-[55px] flex justify-center  items-center  h-[107px]">
        <div className="hidden lg:contents">
          <img src={Logo} alt="logo" className="left-[]" />
        </div>
        <nav className="fixed ml-auto mr-auto flex lg:gap-x-[30px] xl:gap-x-[64px] justify-center  items-center  h-[107px] z-50">
          <ul className=" hidden lg:contents  pt-[32px] ">
            <a
              href="#about"
              className={`text-[16px] mx-[10px] xl:[25px] font-semibold leading-[19px] transition-all hover:-translate-y-0.5	 ${
                currentTab === 'about' ? 'text-[#CB00FF] ' : 'text-black'
              } `}
              onClick={() => setCurrentTab('about')}>
              ABOUT
            </a>

            <a
              href="#faq"
              className={`text-[16px]  mx-[10px] xl:[25px] font-semibold  leading-[19px] transition-all hover:-translate-y-0.5 ${
                currentTab === 'faq' ? 'text-[#CB00FF] ' : 'text-black'
              } `}
              onClick={() => setCurrentTab('faq')}>
              FAQ
            </a>

            <a
              href="#contact"
              className={`text-[16px]  mx-[10px] xl:[25px]  font-semibold leading-[19px] transition-all hover:-translate-y-0.5 ${
                currentTab === 'contact' ? 'text-[#CB00FF] ' : 'text-black'
              } `}
              onClick={() => setCurrentTab('contact')}>
              Contact
            </a>
          </ul>
          <div className="absolut fixed  left-[20px] top-[67px] flex flex-col ">
            <div className="lg:hidden ">
              <Menu setCurrentTab={setCurrentTab} currentTab={currentTab} />
            </div>
          </div>
        </nav>
        {
          <div className="flex justify-end w-full px-1 sm:px-5">
            <div className="flex gap-3">
              <Button
                text="Sign Up"
                styleContent="text-[16px] sm:py-[19px] w-[100px] sm:w-[150px]"
              />
              <Button
                text="Login"
                filled={false}
                styleContent="text-[16px] sm:py-[19px] w-[100px] sm:w-[150px]"
              />
            </div>
          </div>
        }
      </div>
    </motion.div>
  )
}

export default Header
