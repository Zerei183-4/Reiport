"use client"
import { duration } from "@material-ui/core";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
 

const PageTransition = ({children}) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
        <div key={pathname}>
            <motion.div 
                initial={{opacity: 1}} 
                animate={{
                    opacity: 0, 
                    transition: {delay:0.8, duration: 0.5, ease: "easeInOut"},
                }}
                className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            />
            {children}
        </div>
    </AnimatePresence>
  );
};

export default PageTransition;