"use client";

import React, { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  title: string;
};

const withWrapper = (WrappedComponent: any): FC<any> => {
  const WithSection: FC<Props> = (props) => {
    return (
      <div className="flex flex-col justify-center p-4 md:w-[40%] mx-auto  gap-2 ">
        {props.title && (
          <AnimatePresence>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 } as any}
            >
              <h2 className="text-2xl underline font-bold antialiased">
                {props.title}
              </h2>
            </motion.div>
          </AnimatePresence>
        )}

        <AnimatePresence>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 } as any}
          >
            <WrappedComponent {...props} />
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };
  return WithSection;
};

export default withWrapper;
