export const workContainerAnim = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
}

export const workItemAnim = {
  hidden: { y: 400, opacity: 0, rotate: 330 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 360,
  },
  transition: {
    duration: 1,
    type: 'spring',
    stiffness: 260,
    damping: 20,
  },
}
