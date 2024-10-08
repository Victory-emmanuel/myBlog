import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/data/myContext";

const Dashboard = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("MyContext.Provider is missing");
  }
  const { getAllBlog, deleteBlog } = context;
  // console.log(getAllBlog);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("admin");
    navigate("/");
  };

  return (
    <div className="ss:px-12 xx:px-6">
      <div className="grid md:w-[75%] mx-auto grid-cols-2 bg-extraClr gap-8 shadow-lg rounded-md my-16 ">
        <img
          src="https://i.postimg.cc/J7NtsV2v/IMG-20220722-WA0032-01-jpeg.jpg"
          alt=""
          className=" w-56 h-56 rounded-full place-self-center  object-cover"
        />
        <div className="">
          <h2 className="my-6 font-semibold xs:text-2xl sm:text-3xl">
            Brown Patience
          </h2>
          <ul className="">
            <li className="font-semibold ">Writer</li>
            <li className="font-semibold ">
              brownpatience.compellingstories@gmail.com
            </li>
          </ul>
          <div className="my-6 flex gap-4">
            <Link to="/createBlog">
              <button className="btn-one ss:mt-6 inline-flex  items-center xx:mb-6  justify-center xx:px-5 xx:py-3 xx:mr-0  px-6 py-4 mr-3 xs:text-sm xx:text-xs text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Create Blog
              </button>
            </Link>

            <button
              onClick={logout}
              className="btn-one ss:mt-6 inline-flex  items-center xx:mb-6  justify-center xx:px-5 xx:py-3 xx:mr-0  px-6 py-4 mr-3 xs:text-sm xx:text-xs text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="grid w-[80%] mx-auto">
        <section className="container sm:mx-auto  p-6 ">
          <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full mx-auto overflow-x-auto">
              <table className="w-full mx-auto">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3">s.No</th>
                    <th className="px-4 py-3">Thumbnail</th>
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                {getAllBlog.length > 0 ? (
                  <>
                    {getAllBlog.map((item, index) => {
                      console.log(item);
                      const { thumbnail, date, title, category, id } = item;
                      return (
                        <tbody key={index} className="bg-white">
                          <tr className="text-gray-700">
                            <td className="px-4 py-3 text-sm font-semibold border">
                              {index + 1}
                            </td>
                            <td className="px-4 py-3 border">
                              <div className="flex items-center text-sm">
                                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                  <img
                                    className="object-cover w-10 h-full rounded-sm"
                                    src={thumbnail}
                                    alt=""
                                    loading="lazy"
                                  />
                                  <div
                                    className="absolute inset-0 rounded-full shadow-inner"
                                    aria-hidden="true"
                                  ></div>
                                </div>
                              </div>
                            </td>
                            {/* title */}
                            <td className="px-4 py-3 text-sm border">
                              {title}
                            </td>
                            <td className="px-4 py-3 text-sm border">
                              {category}
                            </td>
                            <td className="px-4 py-3 text-sm border">{date}</td>
                            <td className="px-4 py-3  border">
                              <button
                                onClick={() => deleteBlog(id)}
                                className="px-2 py-1 text-base leading-tight font-bold text-red-700 cursor-pointer bg-red-100 rounded-sm"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <h1>Not Found</h1>
                  </>
                )}
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
