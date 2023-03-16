export const careScaleVariant = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

export const careDescrptionContainerAnim = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
}

export const careItemAnim = {
  hidden: { scale: 0, opacity: 0, rotate: 330 },
  visible: {
    scale: 1,
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
