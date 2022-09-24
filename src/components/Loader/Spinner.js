import './bxshadow.css';

const Spinner = () => {
  return (
    <section>
      <svg>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          <feColorMatrix
            values="
                  1 0 0 0 0 
                  0 1 0 0 0 
                  0 0 1 0 0
                  0 0 0 20 -10
          "
          ></feColorMatrix>
        </filter>
      </svg>

      <div className="goo rotateLoad relative w-wfit h-hfit ">
        <span className="spinner-st shadowRose rotate-45 left-[calc(50% - 20px)]"></span>
        <span className="spinner-st shadowRose rotate-90 left-[calc(50% - 20px)]"></span>
        <span className="spinner-st shadowRose rotate-135 left-[calc(50% - 20px)]"></span>
        <span className="spinner-st shadowRose rotate-180 left-[calc(50% - 20px)]"></span>
        <span className="spinner-st shadowRose rotate-225 left-[calc(50% - 20px)]"></span>
        <span className="spinner-st shadowRose rotate-270 left-[calc(50% - 20px)]"></span>
        <span className="spinner-st shadowRose rotate-315 left-[calc(50% - 20px)]"></span>
        <span className="spinner-st shadowRose rotate-360 left-[calc(50% - 20px)]"></span>
        <span className="spinner-st shadowRose left-[calc(50% - 20px)] rotate rotate1  "></span>
        <span className="spinner-st shadowRose left-[calc(50% - 20px)] rotate rotate2 "></span>
        <span className="spinner-st shadowRose left-[calc(50% - 20px)] rotate rotate3 "></span>
        <span className="spinner-st shadowRose left-[calc(50% - 20px)] rotate rotate4 "></span>
        <span className="spinner-st shadowRose left-[calc(50% - 20px)] rotate rotate5 "></span>
      </div>
    </section>
  );
};

export default Spinner;
