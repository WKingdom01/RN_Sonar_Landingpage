import * as React from 'react'
import { useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from './use-dimension'
import { MenuToggle } from './Menutoggle'
import { Navigation } from './Navigation'

export interface MenuProps {
  setCurrentTab: (v: string) => void
  currentTab: string
}

export const Menu: React.FC<MenuProps> = ({ setCurrentTab, currentTab }: MenuProps) => {
  const [ isOpen, toggleOpen ] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className="absolute -top-[15px]">
      <MenuToggle toggle={() => toggleOpen()} />
      <Navigation setCurrentTab={setCurrentTab} currentTab={currentTab} />
    </motion.nav>
  )
}
