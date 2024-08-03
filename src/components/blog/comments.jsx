/* eslint-disable react/prop-types */
import { useContext } from "react";
import MyContext from "../../context/data/myContext";

const Comments = ({
  addComment,
  commentText,
  setCommentText,
  allComment,  
  fullName,
  setFullName,
}) => {
  const context = useContext(MyContext);
  // eslint-disable-next-line no-empty-pattern
  const {} = context;
  return (
    <div>
      <div className="flex justify-start items-center w-full my-16 bg-white">
        <div>
          <div className="flex justify-between">
            <div className="mb-4">
              <span className="bg-[#F3F4F6] rounded-md font-semibold cursor-pointer p-2">
                Write
              </span>
            </div>
            <div className="flex gap-3 text-[#9CA3AF]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
          </div>
          <form action="">
            <div className="mb-4">
              <input
                type="text"
                name="fullName"
                label="Enter Your name"
                placeholder="Enter Your name"
                className="shadow-lg outline-none w-full rounded-md p-2  border-extraClr "
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </form>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add your comment..."
            required
            defaultValue={""}
            rows={6}
            className="p-2  font-bold border-[0.1px] resize-none h-[120px] border-[#9EA5B1] rounded-md w-[40rem]"
          ></textarea>
          <div className="flex justify-start">
            <button
              onClick={addComment}
              className="relative mt-3 px-6 py-4 dark:text-primary  text-secondary text-base font-bold nded-full overflow-hidden dark:bg-secondary bg-extraClr rounded-lg transition-all duration-800 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-secondary before:transition-all before:duration-1000 before:ease-in-out before:z-[-1] before:rounded-lg hover:before:left-0"
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>
      {/* ////// */}
      <div className="flex justify-start relative top-1/3 w-[40rem]">
        <article className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
          {allComment.map((item, index) => {
            console.log(item);
            const { fullName, commentText, date } = item;
            return (
              <>
                <div key={index} className="">
                  <div className="relative flex gap-4">
                    {/* <img
              src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
              className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
              alt=""
              loading="lazy"
            /> */}
                    <div className="flex flex-col w-full">
                      <div className="flex flex-row justify-between">
                        <p className="relative font-semibold text-accent text-lg whitespace-nowrap truncate overflow-hidden">
                          {fullName}
                        </p>
                      </div>
                      <p className="text-gray-400 mb-6 mt-3 text-sm">{date}</p>
                    </div>
                  </div>
                  <ul className="mt-4 px-6  list-disc text-secondary text-base rounded-lg">
                    <li className=""> {commentText}</li>
                  </ul>
                </div>
              </>
            );
          })}
        </article>
      </div>
    </div>
  );
};

export default Comments;
