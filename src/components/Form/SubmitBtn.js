const SubmitBtn = ({ condition, text, spinner }) => {
  return (
    <button className="text-base tracking-tighter inline-block relative h-11 w-48 overflow-hidden rounded-3xl
                       hover:     ">
      <span className="text-white w-12 h-2 text-lg">
        {condition ? spinner : text}
      </span>
      <svg
        width="190"
        x="0"
        y="0"
        viewBox="0 0 60 60"
        enable-background="new 0 0 60 60"
      >
        <circle fill="#FFFFFF" cx="30" cy="30" r="28.7"></circle>
      </svg>
    </button>
  );
};

export default SubmitBtn;
