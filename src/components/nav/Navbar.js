import NavButton from './NavButton';
import SocialIcons from './SocialIcons';
import ThemeButton from './ThemeButton';
import { Link } from 'react-router-dom';

const Navbar = ({ curPage, setCurPage }) => {
  return (
    <aside
      className="md:w:1/3  w-2/3  lg:w-maxNav bg-zinc-900 h-full z-max hidden lg:block  sticky top-0"
      aria-label="Sidebar"
    >
      <div className="h-full flex  flex-col ">
        <div className=" flex flex-col items-center justify-center  text-white bg-stone-900  lg:py-16 py-12">
          <Link to="/">
            <span className="logoShadow tracking-widest lg:text-8xl text-7xl font-logo  flex items-center  ">
              PK
            </span>
          </Link>
          <span className="text-gray-300  text-xss    flex items-center ">
            WEB DEVELOPER
          </span>
        </div>
        <section className="flex flex-col gap-5 items-center py-9">
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
    </aside>
  );
};

export default Navbar;
