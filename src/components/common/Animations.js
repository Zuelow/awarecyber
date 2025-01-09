import { motion } from 'framer-motion';
import styled from 'styled-components';

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const slideIn = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.6 }
};

export const AnimatedCard = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

export const AnimatedText = styled(motion.div)`
  display: inline-block;
`;

export const AnimatedButton = styled(motion.button)`
  cursor: pointer;
`;

export const pageTransition = {
  initial: {
    opacity: 0,
    x: -200
  },
  animate: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    x: 200
  },
  transition: {
    type: 'spring',
    mass: 0.35,
    stiffness: 75,
    duration: 0.3
  }
};

export const cardVariants = {
  initial: {
    y: 50,
    opacity: 0,
    scale: 0.9
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  },
  hover: {
    y: -10,
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  }
};

export const buttonVariants = {
  initial: {
    scale: 1
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  },
  tap: {
    scale: 0.95
  }
};

export const containerVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

export const itemVariants = {
  initial: {
    y: 20,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
};
