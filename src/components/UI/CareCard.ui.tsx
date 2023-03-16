import React from 'react'
import './style.css'
import { motion } from 'framer-motion'
import { careItemAnim } from '@/animations'

interface CareCardProps {
  icon: string
  percent: number
  text: string
  boldText: string
}

export const CareCard: React.FC<CareCardProps> = (props: CareCardProps) => {
  const { icon, percent, text, boldText } = props
  return (
    <motion.div
      variants={careItemAnim}
      className="relative flex justify-center bg-white mx-[20px] rounded-[18px] px-[20px] pt-[48px] pb-[40px] drop-shadow-3xl mt-[82px] hover:scale-105 ">
      <img
        className="absolute top-[-38px] left-[50%] translate-x-[-50%] rounded-full bg-[#016099] p-[18px]"
        src={icon}
        alt="icon"
      />
      <p className="w-[200px] text-center ">
        <span className="text-[#2CA3D1] text-[22px] font-bold">{percent}%</span>
        <span className="text-[16px]">{text}</span>
        <span className="text-[16px] font-bold">{boldText}</span>
      </p>
    </motion.div>
  )
}
