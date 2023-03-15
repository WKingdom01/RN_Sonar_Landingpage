export * from './hero.animation'
export * from './header.animation'
export * from './care.animation'
export * from './work.animation'
export * from './support.animation'

export const carouselAnim = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
}

export const titleAnim = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
}
