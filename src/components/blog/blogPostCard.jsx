/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/data/myContext";

function BlogPostCard() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("MyContext.Provider is missing");
  }
  const { getAllBlog } = context;
  console.log(getAllBlog);
  const navigate = useNavigate();
  return (
    <div>
      <>
        <section className="ss:px-12 xx:px-6 py-16">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8  py-16 text-secondary">
            {/* Main Content */}
            {getAllBlog.length > 0 ? (
              <>
                {getAllBlog.map((item, index) => {
                  console.log(item);
                  const { thumbnail, date, title, description, id, category } =
                    item;
                  return (
                    <div
                      key={index}
                      className="bg-primary dark:bg-black rounded-lg overflow-hidden drop-shadow-md "
                    >
                      <img
                        onClick={() => navigate(`/blogInfo/${id}`)}
                        className="h-56 w-full object-cover"
                        src={thumbnail}
                        alt=""
                      />
                      <div className="xs:p-8 xx:p-4">
                        <p className="">{date}</p>
                        <h3 className="font-bold text-2xl text-accent my-1">
                          {title}
                        </h3>
                        <h6 className="line-clamp-3  dark:text-primary  text-secondary  my-4">
                          {description}
                        </h6>
                        <button className="px-2 py-1 text-base leading-tight font-bold text-lightAccent cursor-pointer bg-red-100 rounded-sm">
                          {category}
                        </button>
                      </div>

                      <button
                        onClick={() => navigate(`/blogInfo/${id}`)}
                        className="relative xs:m-8 xx:m-4 px-6 py-4 dark:text-primary  text-secondary text-base font-bold nded-full overflow-hidden dark:bg-secondary bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
                      >
                        Read More
                      </button>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <h1>Not Found</h1>
              </>
            )}
          </div>
          <div className="xx:ml-auto ss:mx-auto ">
            <Link to={"/allBlog"}>
              <button className="relative ss:px-6 py-4 xx:px-16   text-secondary text-base font-bold nded-full overflow-hidden bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                See More
              </button>
            </Link>
          </div>
        </section>
      </>
    </div>
  );
}

export default BlogPostCard;
