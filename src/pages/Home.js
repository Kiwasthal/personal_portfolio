import AboutSection from '../components/Home/AboutSection/AboutSection';
import SkillSection from '../components/Home/SkillSection/SkillSection';
import TopProjectSpacer from '../components/Projectspheres/TopProjectSpacer';
import ProjectSection from '../components/Home/ProjectSection/ProjectSection';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import SEO from '../components/SEO';
import ContactSection from '../components/Home/ContactSection/ContactSection';

const Home = () => {
  const [skillTitleRef, inView] = useInView();
  const scrollSectionRef = useRef();

  const scrollSectionToView = () =>
    scrollSectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });

  return (
    <>
      <SEO
        title="Home"
        description="Portfolio Home page,author Kiwasthal, layout page"
        domain="https://panagiotis-kostopoulos.netlify.app/home"
      />

      <Parallax pages={7}>
        <AboutSection
          inView={inView}
          titleRef={skillTitleRef}
          scroll={scrollSectionToView}
        />
        <SkillSection
          inView={inView}
          skillTitleRef={skillTitleRef}
          scrollRef={scrollSectionRef}
        />
        <TopProjectSpacer />
        <ProjectSection />
        <ParallaxLayer offset={6} speed={0.4}>
          <div className="h-[50%] w-screen bottom-0 bg-contactspacer bg-no-repeat aspect-mdspacer1 bg-cover bg-center  z-0"></div>
          <div className="h-[50%] w-screen bottom-0 bg-contactspacer bg-no-repeat aspect-mdspacer1 bg-cover bg-center  z-0 rotate-180"></div>
        </ParallaxLayer>
        <ContactSection />
      </Parallax>
    </>
  );
};

export default Home;
