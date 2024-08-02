/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { fireDb } from "../../firebase/firebaseConfig";
import MyContext from "./myContext";

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

  return (
    <MyContext.Provider
      value={{ searchKey, setSearchKey, isLoading, setIsLoading, getAllBlog }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyState;
