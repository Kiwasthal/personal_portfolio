import Particle from '../components/About/Particle';
import { motion } from 'framer-motion';
import MiddleContainer from '../components/About/MiddleContainer';
import SEO from '../components/SEO';

const spacerVariants = {
  hidden: {
    transform: 'scale(0)',
    y: 430,
  },
  visible: {
    transform: 'scale(1)',
    y: 0,
    transition: {
      delay: 3.6,
      duration: 1.1,
    },
  },
};

const About = () => {
  return (
    <>
      <SEO
        title="About"
        description="Porfolio page about author Kiwasthal(Steerpike)-Panos Kostopoulos, relevant information"
      />

      <section className="h-full w-screen lg:w-full flex-col items-end justify-end  relative">
        <div className="absolute lg:w-full md:w-screen  z-30 flex flex-col lg:items-center gap-5  "></div>
        <MiddleContainer />
        <div className="absolute z-30">
          <Particle />
        </div>
        <motion.div
          className=" absolute bottom-0 w-full bg-no-repeat bg-center bg-cover bg-spacer1 lg:aspect-spacer1 md:aspect-mdspacer1 aspect-mdspacer1"
          variants={spacerVariants}
          initial="hidden"
          animate="visible"
        ></motion.div>
      </section>
    </>
  );
};

export default About;
