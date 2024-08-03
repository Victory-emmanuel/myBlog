import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/data/myContext";

const AllBlog = () => {
  const context = useContext(MyContext);
  const { getAllBlog } = context;
  const navigate = useNavigate();
  return (
    <>
      <section className="ss:px-12 xx:px-6">
        <div className="">
          <h1 className="dark:text-primary text-accent ss:text-5xl xx:text-3xl mx-auto font-semibold mt-16">
            All Blogs
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8  py-16 text-secondary">
          {/* Main content */}
          {getAllBlog.length > 0 ? (
            <>
              {getAllBlog.map((item, index) => {
                console.log(item);
                const { title, description, thumbnail, date, id } = item;
                return (
                  <div
                    key={index}
                    className="bg-primary dark:bg-black rounded-lg overflow-hidden drop-shadow-md "
                  >
                    <img
                      className="h-56 w-full object-cover"
                      src={thumbnail}
                      alt=""
                    />
                    <div className="xs:p-8 xx:p-4">
                      <p className="my-4">{date}</p>
                      <h3 className="font-bold text-2xl text-accent my-1">
                        {title}
                      </h3>
                      <h6 className="text-  dark:text-primary  text-secondary  my-4">
                        {description}
                      </h6>
                    </div>

                    <button
                      onClick={() => navigate(`/blogInfo/${id}`)}
                      className="relative xs:m-8 xx:m-4 px-6 py-4 dark:text-primary  text-secondary text-base font-bold nded-full overflow-hidden dark:bg-secondary bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
                    >
                      View blog
                    </button>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <h1 className="font-bold text-accent">Not Found</h1>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default AllBlog;
