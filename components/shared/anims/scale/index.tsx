import ScaleAnimImpl from "./types";

const ScaleAnim = ({ children, onClick = () => {} }: ScaleAnimImpl) => {
  return (
    <>
      <div
        onClick={onClick}
        className="transition-all duration-200 hover:scale-105 active:scale-95"
      >
        {children}
      </div>
    </>
  );
};

export default ScaleAnim;
