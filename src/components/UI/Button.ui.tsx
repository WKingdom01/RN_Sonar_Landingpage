import React from 'react'

export interface ButtonProp {
  text: string
  filled?: boolean
  styleContent?: string
  padContent?: boolean
}

export const Button: React.FC<ButtonProp> = ({
  text,
  filled = true,
  styleContent = '',
  padContent = true,
}: ButtonProp) => {
  return (
    <button
      className={` ${
        filled ? 'bg-blue-dark text-white' : 'bg-transparent text-[#016099]'
      } ${styleContent} font-semibold  py-2 border-2 border-[#016099] border-solid  rounded-[8px] transition-all hover:scale-105`}>
      <p className={`${padContent && ' px-2 sm:px-8 lg:px-2 xl:px-8'}`}>{text}</p>
    </button>
  )
}
