import React from 'react'
import { motion } from 'framer-motion'
import { supportItemAnim } from '../../animations'
export interface SupportCardProps {
  name: string
  url: string | undefined
}

export const SupportCard: React.FC<SupportCardProps> = ({ name, url }: SupportCardProps) => {
  return (
    <motion.div
      variants={supportItemAnim}
      className="relative w-full h-[400px] bg-sky-dark/30 rounded-[18px] drop-shadow-3xl group bg-no-repeat bg-cover hover:cursor-pointer">
      <img
        src={url}
        alt="url"
        className="absolute w-full h-full transition-all opacity-40 group-hover:opacity-100"
      />
      <p className="flex absolute w-[85%] h-[90px] bg-sky-light right-0 bottom-0 justify-center items-center rounded-l-[50px] text-black-light text-[22px] font-bold transition-all  duration-500 group-hover:w-[99%] group-hover:text-white ">
        {name}
      </p>
    </motion.div>
  )
}
