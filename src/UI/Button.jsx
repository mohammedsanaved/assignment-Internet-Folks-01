const Button = ({ children, type }) => {
  const style = {
    bgRed:
      "border rounded-full px-4 py-3 font-semibold bg-[#E23744] text-white",
    bgWhite:
      "border rounded-full px-4 py-3 font-semibold bg-[#ffff] text-stone-700",
  };
  return <button className={style[type]}>{children}</button>;
};

export default Button;
