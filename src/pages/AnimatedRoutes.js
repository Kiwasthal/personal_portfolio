import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Transition from '../components/Transition';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';
import Work from './Works';
import ErrorPage from './404';
import Home from './Home';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={<Transition children={<Home />} main={true} />}
        ></Route>
        <Route
          path="/about"
          element={<Transition children={<About />} />}
        ></Route>
        <Route
          path="/skills"
          element={<Transition children={<Skills />} />}
        ></Route>
        <Route
          path="/works"
          element={<Transition children={<Work />} />}
        ></Route>
        <Route
          path="/contact"
          element={<Transition children={<Contact />} />}
        ></Route>
        <Route
          path="*"
          element={<Transition children={<ErrorPage />} />}
        ></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
