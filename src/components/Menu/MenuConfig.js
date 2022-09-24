import { useState } from 'react';
import Backdrop from './Backdrop';
import BurgerMenu from './Burger';

const MenuConfig = ({ children }) => {
  const [burgerShowing, setBurgerShowing] = useState(true);
  const burgerClicked = () => setBurgerShowing(false);
  const backdropClicked = () => setBurgerShowing(true);
  return (
    <>
      <BurgerMenu isShowing={burgerShowing} clickHandler={burgerClicked} />
      <Backdrop
        isShowing={burgerShowing}
        clickHandler={backdropClicked}
        children={children}
      />
    </>
  );
};

export default MenuConfig;
