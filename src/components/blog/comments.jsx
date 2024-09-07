/* eslint-disable react/no-unescaped-entities */
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
    <div className="lg:px-0 xx:px-6">
      <div className="flex justify-start items-center xx:w-[100%] ss:w-[50%] my-16 bg-white">
        <div>
          <div className="flex justify-between">
            <div className="mb-4">
              <span className="bg-[#F3F4F6] rounded-md xx:text-sm ss:text-base font-semibold cursor-pointer p-2">
                You've got questions? Please ask below.
              </span>
            </div>
          </div>

          <form action="">
            <div className="mb-4">
              <input
                type="text"
                name="fullName"
                label="Enter Your name"
                placeholder="Enter Your name"
                className="shadow-lg outline-none w-[100%]  rounded-md p-2  border-extraClr "
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
            className="p-2  font-bold border-[0.1px] resize-none h-[120px] border-[#9EA5B1] rounded-md ss:w-[40rem] xx:w-[100%] "
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
      <div className="flex justify-start relative top-1/3 xx:w-[100%] ss:w-[50%]">
        <article className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
          {allComment.map((item, index) => {
            console.log(item);
            const { fullName, commentText, date } = item;
            return (
              <>
                <div key={index} className="">
                  <div className="relative flex gap-4">
                    <div className="flex flex-col xx:w-[100%] ss:w-[50%] md:w-[70%]">
                      <div className="flex flex-row justify-between">
                        <p className="relative font-semibold text-accent text-lg whitespace-nowrap truncate overflow-hidden">
                          {fullName}
                        </p>
                      </div>
                      <p className="text-gray-400 mb-6 mt-3 text-xs">{date}</p>
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
