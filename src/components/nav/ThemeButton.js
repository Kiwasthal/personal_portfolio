const ThemeButton = () => {
  return (
    <>
      <label>
        <input
          type="checkbox"
          name="btn"
          className="relative w-24 h-8 bg-zinc-800 appearance-none cursor-pointer checked:bg-rose-600 rounded-custom35 shadow-themeBtnShadow duration-500 before:absolute before:top-0 before:left-0 before:w-14 before:h-8 before:from-black before:bg-gradient-to-t before:bg-gray-600 before:rounded-custom35 before:shadow-themeBfShadow before:duration-500 before:scale-x-98 before:scale-y-96 checked:before:left-10 after:absolute after:left-10 after:w-2 after:h-2 after:bg-gray-400 after:duration-500 after:top-3 after:rounded-full checked:after:left-12 checked:after:bg-rose-500 checked:after:shadow-themeAfShadow"
        />
      </label>
      <label>
        <input
          type="radio"
          name="btn"
          className="relative w-24 h-8 bg-zinc-800 appearance-none cursor-pointer checked:bg-rose-600 rounded-custom35 shadow-themeBtnShadow duration-500"
        />
      </label>
    </>
  );
};

export default ThemeButton;
