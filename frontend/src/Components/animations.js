const pageTransitions = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const buttonAnimations = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};

export default { pageTransitions, buttonAnimations };
