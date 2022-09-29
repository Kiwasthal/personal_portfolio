import AnimatedText from '../components/AnimatedText';
import TagSphere from '../components/Tagcloud';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const TagcloudContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    transition: {
      duration: 2,
      delay: 4,
    },
    opacity: 1,
  },
};

const Skills = () => {
  return (
    <>
      <SEO
        title={'Skills'}
        description={'Porfolio skills page, list of my skills'}
        domain="https://panagiotis-kostopoulos.netlify.app/skills"
      ></SEO>

      <div className="lg:w-full lg:h-full h-screen w-screen  lg:flex   overflow-hidden relative">
        <motion.div
          className=" absolute  sm:h-[120vh] w-screen h-[120vh] md:h-[120vh] lg:w-[120vw] md:w-screen lg:h-screen  lg:mt-0"
          variants={TagcloudContainer}
          initial="hidden"
          animate="visible"
        >
          <TagSphere className={''} maxSpeed={3} fullHeight={true} />
        </motion.div>
        <div className="lg:w-2/3 w-screen sm:pt-32 lg:pl-16 lg:pt-0 pt-16 pl-4 flex lg:flex-col  justify-center gap-[-10em]">
          <AnimatedText
            premier={['W', 'D', 'S']}
            text={`Web`}
            className="mt-10"
            timeout={3000}
            maxTxt={true}
            flipP={true}
            gBot={true}
          />
          <AnimatedText
            premier={['D']}
            text={`Development`}
            className="mt-2"
            timeout={3500}
            flipP={true}
            maxTxt={true}
            gBot={true}
          />
          <AnimatedText
            premier={['S']}
            text={`Skills`}
            className="mt-2"
            timeout={4000}
            flipP={true}
            maxTxt={true}
            gBot={false}
          />
        </div>
        <div className="w-screen bg-no-repeat bg-center bg-cover bg-spacer2 lg:aspect-spacer2 md:aspect-mdspacer2 aspect-smspacer2  "></div>
      </div>
    </>
  );
};

export default Skills;
