import * as React from 'react'
import { motion } from 'framer-motion'

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#D3CCD886"
    strokeLinecap="round"
    {...props}
  />
)

export interface MenuToggleProps {
  toggle: () => void
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }: MenuToggleProps) => (
  <button className="flex mb-3" onClick={toggle}>
    <svg width="30" height="30" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
        stroke="#016099"
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        stroke="#016099"
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
        stroke="#016099"
      />
    </svg>
  </button>
)