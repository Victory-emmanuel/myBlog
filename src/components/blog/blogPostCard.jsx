/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function BlogPostCard() {
  return (
    <div>
      <>
        <section className="ss:px-12 xx:px-6 py-16">
          {" "}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8  py-16 text-secondary">
            {/* BLog 1 */}
            <div className="bg-primary dark:bg-black rounded-lg overflow-hidden drop-shadow-md ">
              <img
                className="h-56 w-full object-cover"
                src="https://i.postimg.cc/ryd3Q9BD/Whats-App-Image-2024-07-12-at-08-26-21-1.jpg"
                alt=""
              />
              <div className="xs:p-8 xx:p-4">
                <h3 className="font-bold text-2xl text-accent my-1">
                  Coaching for Authors
                </h3>
                <h6 className="text-  dark:text-primary  text-secondary  my-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate natus, minima delectus veniam accusamus fugit
                  quisquam animi et voluptatibus! Exercitationem aperiam
                  expedita minus culpa eum? Perspiciatis nesciunt sapiente ipsum
                  nisi.
                </h6>
              </div>
              <Link className="" to="/blogContentPg">
                <button className="relative xs:m-8 xx:m-4 px-6 py-4 dark:text-primary  text-secondary text-base font-bold nded-full overflow-hidden dark:bg-secondary bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                  View blog
                </button>
              </Link>
            </div>
            {/* BLog 2 */}
            <div className="bg-primary dark:bg-black rounded-lg overflow-hidden drop-shadow-md ">
              <img
                className="h-56 w-full object-cover"
                src="https://i.postimg.cc/ryd3Q9BD/Whats-App-Image-2024-07-12-at-08-26-21-1.jpg"
                alt=""
              />
              <div className="xs:p-8 xx:p-4">
                <h3 className="font-bold text-2xl text-accent my-1">
                  Coaching for Authors
                </h3>
                <h6 className="text-  dark:text-primary  text-secondary  my-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate natus, minima delectus veniam accusamus fugit
                  quisquam animi et voluptatibus! Exercitationem aperiam
                  expedita minus culpa eum? Perspiciatis nesciunt sapiente ipsum
                  nisi.
                </h6>
              </div>
              <Link className="" to="/blogContentPg">
                <button className="relative xs:m-8 xx:m-4 px-6 py-4 dark:text-primary  text-secondary text-base font-bold nded-full overflow-hidden dark:bg-secondary bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                  View blog
                </button>
              </Link>
            </div>
            {/* BLog 3 */}
            <div className="bg-primary dark:bg-black rounded-lg overflow-hidden drop-shadow-md ">
              <img
                className="h-56 w-full object-cover"
                src="https://i.postimg.cc/ryd3Q9BD/Whats-App-Image-2024-07-12-at-08-26-21-1.jpg"
                alt=""
              />
              <div className="xs:p-8 xx:p-4">
                <h3 className="font-bold text-2xl text-accent my-1">
                  Coaching for Authors
                </h3>
                <h6 className="text-  dark:text-primary  text-secondary  my-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate natus, minima delectus veniam accusamus fugit
                  quisquam animi et voluptatibus! Exercitationem aperiam
                  expedita minus culpa eum? Perspiciatis nesciunt sapiente ipsum
                  nisi.
                </h6>
              </div>
              <Link className="" to="/blogContentPg">
                <button className="relative xs:m-8 xx:m-4 px-6 py-4 dark:text-primary  text-secondary text-base font-bold nded-full overflow-hidden dark:bg-secondary bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0">
                  View blog
                </button>
              </Link>
            </div>
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
