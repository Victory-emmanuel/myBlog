/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom";
import MyContext from "../../context/data/myContext";
import { useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { fireDb } from "../../firebase/firebaseConfig";
import Loader from "../../components/blog/loader";
import Comments from "../../components/blog/comments";
import toast from "react-hot-toast";
const BlogInfo = () => {
  const [getBlogs, setGetBlogs] = useState();
  // comments
  const [fullName, setFullName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [allComment, setAllComment] = useState([]);
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("MyContext.Provider is missing");
  }
  const { setIsLoading, IsLoading } = context;
  const params = useParams();
  console.log(params.id);

  // blog data

  const getAllBlogs = async () => {
    setIsLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDb, "blogPost", params.id));
      if (productTemp.exists()) {
        setGetBlogs(productTemp.data());
      } else {
        console.log("Document does not exist");
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);

  //comments
  const addComment = async () => {
    const commentRef = collection(
      fireDb,
      "blogPost/" + `${params.id}/` + "comment"
    );
    try {
      await addDoc(commentRef, {
        fullName,
        commentText,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-Us", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      });
      toast.success("Comment Added Successfully");
      setFullName("");
      setCommentText("");
    } catch (error) {
      console.log(error);
    }
  };
  const getComment = async () => {
    try {
      const q = query(
        collection(fireDb, "blogPost/" + `${params.id}/` + "comment"),
        orderBy("time")
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setAllComment(productArray);
        console.log(productArray);
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComment();
  }, []);

  // create markup function
  function createMarkup(c) {
    return { __html: c };
  }
  return (
    <>
      <div className="" id="blog-content">
        <div className="w-full text-secondary bg-primary py-24">
          <div className="max-w-[1240px] mx-auto">
            <div className="grid lg:grid-cols-3 xx:grid-cols-1 xx:gap-y-4 ss:gap-y-8 lg:place-items-start ss:place-items-start xx:place-items-center lg:gap-8 xs:px-4 xx:px-2 text-secondary">
              {IsLoading ? (
                <Loader />
              ) : (
                <div className="bg-primary shadow-lg rounded-lg col-span-2 overflow-hidden drop-shadow-md ">
                  {/* thumbnail */}
                  <img
                    className="h-[30rem] w-full object-cover"
                    src={getBlogs?.thumbnail}
                    alt=""
                  />
                  <div className="ss:p-8 xx:px-4">
                    {/* Title  */}
                    <h3 className="font-bold text-accent text-2xl mt-2 mb-8 ">
                      {getBlogs?.title}
                    </h3>
                    {/* COntent */}
                    <div className="content">
                      <div
                        className={`[&>h1]:ss:text-[32px] [&>h1]:xx:text-[20px] [&>h1]:font-bold [&>h1]:mb-2.5 [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:mb-2.5 [&>h3]:text-[18.75px] [&>h3]:font-bold [&>h3]:mb-2.5 [&>h4]:text-[16px] [&>h4]:font-bold [&>h4]:mb-2.5 [&>h5]:text-[13.28px] [&>h5]:font-bold [&>h5]:mb-2.5 [&>h6]:text-[10px] [&>h6]:font-bold [&>h6]:mb-2.5 [&>p]:text-[16px] [&>p]:mb-1.5 [&>ul]:list-disc [&>ul]:mb-2 [&>ol]:list-decimal [&>ol]:mb-2 [&>li]:list-decimal [&>li]:mb-10 [&>img]:rounded-lg [&>img]:w-[100%]`}
                        dangerouslySetInnerHTML={createMarkup(
                          getBlogs?.content
                        )}
                      ></div>
                    </div>
                    {/* date */}
                    <div className="">
                      <p className=" font-bold mt-6 text-lightAccent underline">
                        Upload Date: {getBlogs?.date}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="lg:w-full w-fit rounded-lg overflow-hidden sm-mx-auto bg-primary py-5 drop-shadow-md xs:max-h-[17.625rem] xx:max-h-[18.625rem] ">
                <div className="">
                  <img
                    src="https://i.postimg.cc/t4wVD9bk/41044-1.jpg"
                    alt="Author"
                    className="p-2 xs:w-32 xs:h-32 xx:w-24 xx:h-24 rounded-full object-cover mx-auto"
                  />
                  <h1 className="text-center xs:text-2xl xx:text-xl font-bold mt-3">
                    Brown Patience
                  </h1>
                  <p className="text-center  p-4 m-4 bg-accent rounded-lg text-primary xs:text-lg xx:text-base  font-medium mt-3">
                    Ghostwriter. Editor. Writing Coach.
                  </p>
                </div>
              </div>
            </div>
            <Comments
              addComment={addComment}
              commentText={commentText}
              setCommentText={setCommentText}
              allComment={allComment}
              fullName={fullName}
              setFullName={setFullName}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogInfo;
