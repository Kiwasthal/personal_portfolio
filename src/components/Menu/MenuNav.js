import NavButton from '../nav/NavButton';
import ThemeButton from '../nav/ThemeButton';
import SocialIcons from '../nav/SocialIcons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const dropLeft = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    x: -250,
    transition: {
      duration: 1,
      delay: 0.1,
    },
  },
};

const MenuNav = ({ curPage, setCurPage }) => {
  return (
    <motion.aside
      className="absolute  w-1/2 left-0 top-0 md:w:1/12 sm:w-2/6  lg:w-maxNav bg-zinc-900 h-full z-max  opacity-100"
      aria-label="Sidebar"
      {...dropLeft}
    >
      <div className="h-full flex  flex-col ">
        <div className=" flex flex-col  justify-center items-center text-white bg-stone-900  lg:py-16 py-10">
          <span className="logoShadow tracking-widest  md:text-8xl sm:text-8xl text-8xl font-logo  flex items-center ">
            PK
          </span>
          <span className="text-gray-300  text-xss    flex items-center ">
            WEB DEVELOPER
          </span>
        </div>
        <section className="flex flex-col gap-5 items-center py-10">
          <Link to="about">
            <NavButton text="about" curPage={curPage} setCurPage={setCurPage} />
          </Link>
          <Link to="skills">
            <NavButton
              text="skills"
              curPage={curPage}
              setCurPage={setCurPage}
            />
          </Link>
          <Link to="works">
            <NavButton text="works" curPage={curPage} setCurPage={setCurPage} />
          </Link>
          <Link to="contact">
            <NavButton
              text="contact"
              curPage={curPage}
              setCurPage={setCurPage}
            />
          </Link>
        </section>
        <SocialIcons />
        <section className="flex flex-col  justify-center items-center h-full">
          <ThemeButton />
        </section>
      </div>
    </motion.aside>
  );
};

export default MenuNav;
