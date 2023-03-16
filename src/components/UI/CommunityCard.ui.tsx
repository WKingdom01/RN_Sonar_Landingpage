import React from 'react'
import './style.css'

interface CommunityCardProps {
  icon: string
  text: string
  name: string
}

export const CommunityCard: React.FC<CommunityCardProps> = ({
  icon,
  text,
  name,
}: CommunityCardProps) => {
  return (
    <div className="flex relative justify-center bg-white w-[80%] h-[100%]  rounded-lg px-[20px] pt-[48px] pb-[10px] mt-[82px] hover:cursor-pointer">
      <img
        className="absolute top-[-48px] left-[50%] translate-x-[-50%] rounded-full bg-[#016099] p-[18px]"
        src={icon}
        alt="icon"
      />
      <div className="mt-8 text-start">
        <p className="sm:text-[14px] md:text-[20px]">{text}</p>
        <p className="font-bold sm:mt-2 md:mt-8">-{name}</p>
      </div>
    </div>
  )
}
