import React from 'react'

export interface WorkImageCardProp {
  src: string
}

export const WorkImageCard: React.FC<WorkImageCardProp> = ({ src }: WorkImageCardProp) => {
  return (
    <div className="flex items-center w-[300px] h-[310px] bg-blue-dark rounded-[100%]">
      <img src={src} alt="work1" width={'300px'} />
    </div>
  )
}
