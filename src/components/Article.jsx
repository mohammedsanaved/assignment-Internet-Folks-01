import Button from "../UI/Button";

const Article = ({ item }) => {
  return (
    <div className="p-2 sm:p-4 rounded-[20.94px] sm:w-[350px] w-[280px] h-fit border-[1.4px] border-solid border-lightsteelblue-200 m-4 flex  justify-evenly flex-col">
      <div className="items-center">
        <img
          className="rounded-xl object-cover w-[265px]"
          alt=""
          src={item.image}
        />
      </div>
      <div className="">
        <div className="">
          <h3 className="text-xl font-semibold mt-3 text-[#0e2368]">
            {item.title}
          </h3>
          <p className="text-sm font-extralight mt-4">{item.description}</p>
        </div>
        <div className="sm:text-base text-xs mt-3 text-start">
          <Button type="bgWhite">{item.link}</Button>
        </div>
      </div>
    </div>
  );
};

export default Article;
