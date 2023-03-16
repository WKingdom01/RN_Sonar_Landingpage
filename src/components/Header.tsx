import React, { useState, useEffect, useMemo } from 'react'
import { Menu } from './UI/Menu'
import { Button } from './UI'
import Logo from '@/assets/icons/logo.svg'
import { motion } from 'framer-motion'
import { headerYVariantAnim } from '../animations'
const Header = () => {
  const [ currentTab, setCurrentTab ] = useState('about')
  const [ active, setActive ] = useState(false)
  
  const onScroll = () => {
    if(window.scrollY > 50){
      setActive(true)
    }else{
      setActive(false)
    }
  }

  useEffect(()=>{
  
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  
  },[])

  useMemo(()=>{
    const obj = document.querySelector('#'+currentTab)
    if(obj){
      obj.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  },[ currentTab ])
  
  return (
    <motion.div
      variants={headerYVariantAnim}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      className="fixed top-0 z-50 w-full overflow-show">
      <div className={`backdrop-blur-sm ${active && 'shadow-3xl'} pt-[42px] pb-[37px] px-[20px] lg:px-[55px] flex justify-center  items-center  h-[107px]`}>
        <div className="hidden lg:contents">
          <img src={Logo} alt="logo" className="left-[]" />
        </div>
        <nav className="fixed ml-auto mr-auto flex lg:gap-x-[30px] xl:gap-x-[64px] justify-center  items-center  h-[107px] z-50">
          <ul className=" hidden lg:contents  pt-[32px] ">
            <a
              href="#about"
              className={`text-[16px] mx-[10px] xl:[25px] font-semibold leading-[19px] transition-all hover:-translate-y-0.5 text-black	underline-offset-8 decoration-blue-dark ${
                currentTab === 'about' && 'underline'
              } `}
              onClick={(e) => {setCurrentTab('about'); e.preventDefault()}}>
              ABOUT
            </a>
            <a
              href="#faq"
              className={`text-[16px] mx-[10px] xl:[25px] font-semibold leading-[19px] transition-all hover:-translate-y-0.5 text-black	underline-offset-8 decoration-blue-dark ${
                currentTab === 'faq' && 'underline'
              } `}
              onClick={(e) => {setCurrentTab('faq'); e.preventDefault()}}>
              FAQ
            </a>

            <a
              href="#contact"
              className={`text-[16px] mx-[10px] xl:[25px] font-semibold leading-[19px] transition-all hover:-translate-y-0.5 text-black	underline-offset-8 decoration-blue-dark ${
                currentTab === 'contact' && 'underline'
              } `}
              onClick={(e) => {setCurrentTab('contact'); e.preventDefault()}}>
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
