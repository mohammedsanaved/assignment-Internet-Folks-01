import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ onClick }) => {
  return (
    <div className="flex gap-3 items-center justify-center my-16 md:my-0">
      <button
        className={`rounded py-[1.5px] px-[2px] bg-slate-300 text-stone-800
           disabled:bg-gray-200 disabled:text-gray-500`}
        // disabled={pageIndex === 1}
        onClick={() => onClick("prev")}
      >
        <IoIosArrowBack />
      </button>

      <span className="font-bold">01</span>

      <button
        className={`rounded py-[1.5px] px-[2px] bg-slate-300 text-stone-800
          disabled:bg-gray-200 disabled:text-gray-500`}
        // disabled={pageIndex === (data && data.meta.pagination.pageCount)}
        onClick={() => onClick("next")}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
