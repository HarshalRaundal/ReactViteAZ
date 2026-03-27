import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-150 bg-blue-950 flex flex-col md:flex-row justify-center   border md:flex md:flex-wrap  md:justify-start  md:items-start p-4 md:p-12 text-white gap-12">
      <div className="uppercase text-5xl md:text-9xl font-extrabold md:w-1/2 md:h-1/2 md:flex md:items-end md:justify-end">
        404 <br /> Sorry
      </div>
      <div className="uppercase text-xl md:w-2/6 md:text-4xl font-bold">
        (ohh no! this page doesn't exist) <br />{" "}
        <span className="text-5xl sm:text-7xl md:text-9xl my-12  w-full flex justify-center md:justify-start items-center">
          &darr;&darr;&darr;
        </span>
      </div>
      <div className="w-full flex justify-center items-center text-black">
        <Link
          to={"/"}
          className="text-3xl md:text-4xl uppercase px-4 rounded-xl bg-amber-50"
        >
          Go To Home Page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
