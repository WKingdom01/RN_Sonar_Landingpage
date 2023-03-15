import React from 'react'

export interface PartnerCardProps {
  url: string
}
export const PartnerCard: React.FC<PartnerCardProps> = ({ url }: PartnerCardProps) => {
  return (
    <div className="w-[85%]">
      <div className="grid px-6 items-center justify-center  w-full bg-gray-light h-[96px] rounded-[16px] drop-shadow-4xl">
        <img src={url} alt="img" />
      </div>
    </div>
  )
}
