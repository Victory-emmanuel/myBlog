// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import auth from "../../firebase/firebaseConfig";
// import { useState } from "react";
// /* eslint-disable react/no-unescaped-entities */
// const AdminLogin = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   //  Login Function
//   const login = async () => {
//     if (!email || !password) {
//       return toast.error("Fill all required fields");
//     }
//     try {
//       const result = await signInWithEmailAndPassword(auth, email, password);
//       toast.success("Login success");
//       localStorage.setItem("admin", JSON.stringify(result));
//       navigate("/dashboard");
//     } catch (error) {
//       toast.error("Login Failed");
//       console.log(error);
//     }
//   };
//   return (
//     <>
//       <div className="relative py-16">
//         <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
//           <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
//             <div className="rounded-3xl border border-gray-100 bg-white dark:bg-black dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
//               <div className="p-8 py-12 sm:p-16">
//                 <h2 className="mb-8 text-2xl font-bold text-accent dark:text-white">
//                   Admin Login
//                 </h2>
//                 <form action="" className="space-y-8">
//                   <div className="space-y-2">
//                     <label
//                       htmlFor="email"
//                       className="text-secondary dark:text-primary"
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       id="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       autoComplete="email"
//                       className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-secondary dark:text-primary transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2"
//                     />
//                   </div>

//                   <div>
//                     <div className="flex items-center justify-between">
//                       <label
//                         htmlFor="password"
//                         className="text-secondary dark:text-primary"
//                       >
//                         Password
//                       </label>
//                       <button className="-mr-2 p-2" type="reset">
//                         <span className="text-sm text-primary">
//                           Forgot your password ?
//                         </span>
//                       </button>
//                     </div>
//                     <input
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       type="password"
//                       name="password"
//                       id="pwd"
//                       autoComplete="current-password"
//                       className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-secondary dark:text-primary transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     onClick={login}
//                     className="relative my-6  bg-accent dark:bg-primary flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 rounded-lg before:rounded-full before:bg-accent dark:before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
//                   >
//                     <span className="relative text-base font-semibold text-white dark:text-black">
//                       Connect
//                     </span>
//                   </button>

//                   <p className="border-t border-gray-100 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400">
//                     Don't have an account ?
//                     <a href="#" className="text-primary">
//                       Sign up
//                     </a>
//                   </p>
//                 </form>
//               </div>
//             </div>
//             <div className="space-x-4 text-center text-gray-500">
//               <span>&copy; tailus</span>
//               <a href="#" className="text-sm hover:text-primary">
//                 Contact
//               </a>
//               <a href="#" className="text-sm hover:text-primary">
//                 Privacy & Terms
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminLogin;
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig"; // Import auth from the updated file
import { useState } from "react";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("Fill all required fields");
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login success");
      localStorage.setItem("admin", JSON.stringify(result.user));
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login Failed");
      console.log(error);
    }
  };

  return (
    <div className="relative py-16">
      <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-3xl border border-gray-100 bg-white dark:bg-black dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
            <div className="p-8 py-12 sm:p-16">
              <h2 className="mb-8 text-2xl font-bold text-accent dark:text-white">
                Admin Login
              </h2>
              <form action="" className="space-y-8" onSubmit={login}>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-secondary dark:text-primary"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-secondary dark:text-primary transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-secondary dark:text-primary"
                    >
                      Password
                    </label>
                    <button className="-mr-2 p-2" type="reset">
                      <span className="text-sm text-primary">
                        Forgot your password?
                      </span>
                    </button>
                  </div>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="pwd"
                    autoComplete="current-password"
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-secondary dark:text-primary transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2"
                  />
                </div>

                <button
                  type="submit"
                  className="relative my-6 bg-accent dark:bg-primary flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 rounded-lg before:rounded-full before:bg-accent dark:before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                >
                  <span className="relative text-base font-semibold text-white dark:text-black">
                    Connect
                  </span>
                </button>

                <p className="border-t border-gray-100 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400">
                  Don't have an account?
                  <a href="#" className="text-primary">
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div className="space-x-4 text-center text-gray-500">
            <span>&copy; tailus</span>
            <a href="#" className="text-sm hover:text-primary">
              Contact
            </a>
            <a href="#" className="text-sm hover:text-primary">
              Privacy & Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
