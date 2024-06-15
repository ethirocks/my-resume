import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './StatsSection.css';

const StatsSection = () => {
  const totalYearsWorked = 4; // Total years worked (example)
  const totalHoursWorked = totalYearsWorked * 2000; // Assuming 2000 hours worked per year

  const [hours, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHours((prevHours) => Math.min(prevHours + 20, totalHoursWorked));
    }, 100);

    return () => clearInterval(interval);
  }, [totalHoursWorked]);

  const ballVariants = {
    animate: {
      x: [
        0, 100, -50, 50, -100, 70, -70, 30, -30, 0
      ],
      y: [
        0, -50, 100, -100, 50, -70, 70, -30, 30, 0
      ],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className="stats-section">
      <motion.div
        className="stat"
        variants={ballVariants}
        initial={{ x: '0%', y: '0%' }}
        animate="animate"
      >
        <h2>{hours}</h2>
        <p>Total Hours Worked</p>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${(hours / totalHoursWorked) * 100}%` }}
          ></div>
        </div>
      </motion.div>
    </div>
  );
};

export default StatsSection;
