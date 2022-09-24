import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './pages/AnimatedRoutes';
import Navbar from './components/nav/Navbar';
import MenuConfig from './components/Menu/MenuConfig';
import MenuNav from './components/Menu/MenuNav';

const App = () => {
  return (
    <div className="flex w-screen bg-zinc-800 h-screen ">
      <Router>
        <Navbar />
        <MenuConfig children={<MenuNav />} />
        <AnimatedRoutes />
      </Router>
    </div>
  );
};

export default App;
