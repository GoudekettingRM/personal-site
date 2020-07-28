import React from 'react';
import { motion } from 'framer-motion';

export const Loading: React.FC = () => {
  const loading = {
    containerStyle: {
      width: '2rem',
      height: '2rem',
      display: 'flex',
      justifyContent: 'space-around',
      margin: '1rem auto',
    },
    circleStyle: {
      display: 'block',
      width: '0.5rem',
      height: '0.5rem',
      backgroundColor: 'white',
      borderRadius: '0.25rem',
    },
    loadingContainerVariants: {
      start: {
        transition: {
          staggerChildren: 0.2,
        },
      },
      end: {
        transition: {
          staggerChildren: 0.2,
        },
      },
    },
    loadingCircleVariants: {
      start: {
        y: '0%',
      },
      end: {
        y: '100%',
      },
    },
    loadingCircleTransition: {
      duration: 0.5,
      yoyo: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <div className="loadingDiv">
      <motion.div
        style={loading.containerStyle}
        variants={loading.loadingContainerVariants}
        initial="start"
        animate="end">
        <motion.span
          style={loading.circleStyle}
          variants={loading.loadingCircleVariants}
          transition={loading.loadingCircleTransition}
        />
        <motion.span
          style={loading.circleStyle}
          variants={loading.loadingCircleVariants}
          transition={loading.loadingCircleTransition}
        />
        <motion.span
          style={loading.circleStyle}
          variants={loading.loadingCircleVariants}
          transition={loading.loadingCircleTransition}
        />
      </motion.div>
    </div>
  );
};
