import fantasyGIF from '../assets/fantasyGIF.gif';

const FantasySphere = () => {
  return (
    <div className="h-[50vh] flex items-center justify-center pb-12 pr-16">
      <div className="  group relative w-72 h-72  hover:w-[500px] rounded-2xl transition-all duration-500 delay-0 ">
        <div
          className="absolute flex items-center justify-center m-6 top-0 left-0 w-full h-full rounded-2xl overflow-hidden
  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-stone-900 before:clipCon before:transition-all before:duration-500
  group-hover:before:clipConHov "
        >
          <span className="relative  w-44 text-center text-4xl text-white font-logo rotate-350 transition-all sclae-1 duration-500 delay-0 group-hover:transition-all group-hover:scale-0 group-hover:delay-0 ">
            Fantasy Inventory
          </span>
        </div>
        <div className="w-1/2 h-full relative left-[30%] pt-9 pr-3 pb-3 pl-12 opacity-0 transition-all  invisible group-hover:left-0 group-hover:opacity-100 group-hover:visible group-hover:transition-all group-hover:delay-500 ">
          <h2 className="text-white font-bold text-2xl leading-4">
            Inventory App
          </h2>
          <span className="text-rose-500 font-bold leading-3 text-sm">
            Express, Tailwind
          </span>
          <p className="text-white mb-4 mt-1 leading-5">
            A fantasy Library for cataloguing various mythological creatures
            based on different categories. An express app rendered with ejs view
            engine.
          </p>
          <a
            href="https://infinite-mesa-17935.herokuapp.com/archieve"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-lg font-bold relative bg-rose-500 px-4 py-2 inline-block rounded-md"
          >
            Client
          </a>
        </div>
        <img
          src={fantasyGIF}
          alt="Vercel blog app browsing gif"
          className="absolute rounded-md top-[60%] left-[77%] w-60 translate-x-[-50%] translate-y-[-50%] scale-1 h-96 transition-all scale-0 duration-500 group-hover:transition-all group-hover:transform group-hover:translate-x-[-50%] group-hover:duration-500 group-hover:translate-y-[-50%] group-hover:scale-100"
        />
      </div>
    </div>
  );
};

export default FantasySphere;
