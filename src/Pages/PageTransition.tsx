/* eslint-disable react/prop-types */
// PageTransition.js
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: any) => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        style={{ height: "100vh" }}
        transition={{ duration: 0.1 }}
        initial={{ x: "100%", translateZ: "0px", height: "100vh" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
