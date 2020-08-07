import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { allProjects } from '../../data/projectData';
import './carousel.scss';
import { useHistory } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import titleize from 'titleizejs';
import slugify from 'slugify';
import { getFileExtension } from '../../utils/getFileExtension';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: () => {
    return { zIndex: 1, x: 0, opacity: 1 };
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export const Carousel = () => {
  const [[page, direction], setPage] = useState<number[]>([0, 0]);
  const history = useHistory();
  const index = wrap(0, allProjects.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          onClick={() =>
            history.push(
              `/projects/${slugify(allProjects[index].title.toLowerCase())}`,
            )
          }
          className="carouselMotionDiv"
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 200 },
            opacity: { duration: 0.2 },
          }}>
          <h3 className="carouselProjectTitle">
            {titleize(allProjects[index].title, { keepUpperCaseLetters: true })}
          </h3>
          <LazyLoadImage
            className="carouselItemImg"
            style={
              getFileExtension(allProjects[index].thumbNail) === 'svg'
                ? { backgroundColor: 'white', borderRadius: '8px' }
                : {}
            }
            src={allProjects[index].thumbNail}
            alt={allProjects[index].title}
            title={allProjects[index].title}
          />
          <p className="carouselDescription">{allProjects[index].shortDescr}</p>
        </motion.div>
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {'‣'}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        <span className="prevArrow">{'‣'}</span>
      </div>
    </>
  );
};
