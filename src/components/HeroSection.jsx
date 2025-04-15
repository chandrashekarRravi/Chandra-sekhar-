import profilePic from '../assets/chandra.png';
import { PROFILE } from '../constants';
import { motion } from 'framer-motion';
const HeroSection = () => {
    return (
        <>
            <div className="relative flex min-h-screen items-end justify-center" id="hero">
                <motion.img
                    src={profilePic}
                    className="absolute inset-0 z-10 h-full w-full object-cover"
                    alt="Profile"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%"></motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="z-20 mx-4 max-w-3xl pb-20 text-center lg:text-left">
                    <h1 className="text-4xl font-semibold uppercase tracking-wide sm:text-5xl md:text-6xl">
                        {PROFILE.name}
                    </h1>
                    <p className="pt-2 text-sm font-medium sm:text-base md:text-lg lg:text-xl">
                        {PROFILE.info}
                    </p>
                </motion.div>
            </div>
        </>
    );
};

export default HeroSection;