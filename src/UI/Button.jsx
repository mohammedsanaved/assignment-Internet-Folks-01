const Button = ({ children, type }) => {
  const style = {
    bgRed:
      "border rounded-full px-[6px] py-2 sm:px-4 sm:py-3 font-medium sm:font-semibold text-sm bg-[#E23744] text-white",
    bgWhite:
      "border rounded-full px-1 py-1 sm:px-4 sm:py-3 font-medium sm:font-semibold text-sm bg-[#ffff] text-stone-700",
  };
  return <button className={style[type]}>{children}</button>;
};

export default Button;
