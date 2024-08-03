/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { fireDb } from "../../firebase/firebaseConfig";
import MyContext from "./myContext";
import toast from "react-hot-toast";

const MyState = ({ children }) => {
  const [searchKey, setSearchKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [getAllBlog, setGetAllBlog] = useState([]);

  const getAllBlogs = () => {
    setIsLoading(true);
    try {
      const q = query(collection(fireDb, "blogPost"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let blogArray = [];
        QuerySnapshot.forEach((doc) => {
          blogArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllBlog(blogArray);
        setIsLoading(false);
      });
      return data;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const data = getAllBlogs();
    return () => data && data();
  }, []);

  // delete blog function

  const deleteBlog = async (id) => {
    try {
      await deleteDoc(doc(fireDb, "blogPost", id)), getAllBlog();
      toast.success("Blog deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MyContext.Provider
      value={{
        searchKey,
        setSearchKey,
        isLoading,
        setIsLoading,
        getAllBlog,
        deleteBlog,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyState;
