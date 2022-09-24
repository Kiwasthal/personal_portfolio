export const sphereVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0,
      stifness: 500,
      dampness: 1200,
      bounce: 0.72,
      type: 'spring',
    },
  },
};
