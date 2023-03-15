export const heroScaleVariantAnim = {
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

export const heroDescrptionContainerAnim = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
}

export const heroItemAnim = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}
