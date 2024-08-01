import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  // Logout Function
  const logout = () => {
    localStorage.clear("admin");
    navigate("/");
  };

  return (
    <>
      <div className="ss:px-12 xx:px-6">
        <div className="grid ss:w-[50%] mx-auto grid-cols-2 bg-extraClr gap-8 shadow-lg rounded-md my-16 ">
          <img
            src="https://i.postimg.cc/J7NtsV2v/IMG-20220722-WA0032-01-jpeg.jpg"
            alt=""
            className=" w-56 h-56 rounded-full place-self-center  object-cover"
          />
          <div className="">
            <h2 className="my-6 font-semibold">Brown Patience</h2>
            <ul className="">
              <li className="font-semibold ">Writer</li>
              <li className="font-semibold ">123@gmail.com</li>
              <li className="">
                <span className=" font-semibold mr-2"> Total blogs: </span>
                <span className="">3</span>
              </li>
            </ul>
            <div className="my-6 flex gap-4">
              <Link to="/createBlog">
                <button className="bg-accent px-6 py-4 rounded-lg text-primary font-semibold">
                  Create Blog
                </button>
              </Link>

              <button
                onClick={logout}
                className="bg-accent px-6 py-4 rounded-lg text-primary font-semibold"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="grid w-[80%] mx-auto">
          <section className="container mx-auto p-6 font-mono">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
              <div className="w-full overflow-x-auto">
                <table className="w-full">
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
                  <tbody className="bg-white">
                    <tr className="text-gray-700">
                      <td className="px-4 py-3 text-sm font-semibold border">
                        1.
                      </td>
                      <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                          <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-10 h-full rounded-sm"
                              src="https://i.postimg.cc/ryd3Q9BD/WhatsApp_Image_2024-07-12_at_08.26.21_(1).jpg"
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
                      <td className="px-4 py-3 text-sm border">
                        Coaching For Authors
                      </td>
                      <td className="px-4 py-3 text-sm border">Coaching</td>
                      <td className="px-4 py-3 text-sm border">6/4/2000</td>
                      <td className="px-4 py-3  border">
                        <button className="px-2 py-1 text-base leading-tight font-bold text-red-700 cursor-pointer bg-red-100 rounded-sm">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
