export const supportContainerAnim = {
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

export const supportItemAnim = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
}
