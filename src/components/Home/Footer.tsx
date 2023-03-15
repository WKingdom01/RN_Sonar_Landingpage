import React from 'react'
import Logo from '@/assets/images/logo_f.svg'
import Lnk from '@/assets/icons/lnk.svg'
import Inst from '@/assets/icons/inst.svg'
import Email from '@/assets/icons/email.svg'
export const Footer = () => {
  return (
    <section id="contact" className="py-10 px-14 bg-blue-light">
      <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
        <div className="flex flex-col itmes-center lg:items-start ">
          <div className="flex justify-start w-full">
            <img src={Logo} alt="logo" />
          </div>

          <div className="flex justify-center w-full mt-5 space-x-1 lg:justify-start">
            <img src={Lnk} alt="linked in" />
            <img src={Inst} alt="Instagram" />
          </div>

          <div className="flex flex-col items-center space-y-2 text-white lg:items-start mt-11">
            <p>About</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-4">
          <p className="font-semibold text-white ">
            Sign up to join our pod and get early access to Sonar.{' '}
          </p>

          <div className="flex flex-col mt-4 text-white">
            <label className="text-start">Email</label>
            <div className="flex flex-col gap-2 sm:flex-row sm:space-x-2">
              <div className="relative p-0 m-0">
                <input
                  type={'email'}
                  placeholder="pods@getsonar.org"
                  className="h-[50px] pl-[55px] pr-[20px] md:pr-[130px] m-0 text-black-light "
                />
                <img
                  src={Email}
                  alt="email"
                  className="absolute top-[15px] left-[17px] w-[26px] h-[20px]"
                />
              </div>
              <button className="bg-yellow text-[16px] font-bold text-black-light py-3 px-4 md:px-11 rounded-[8px] transition-all hover:scale-105">
                Sing up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-white mt-[50px] lg:mt-[130px]">
        <p> &copy; 2023 Get Sonar, Inc. all rights reserved</p>
      </div>
    </section>
  )
}
