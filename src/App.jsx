import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar, Footer } from "./components/components";
import { useEffect, useState } from "react";
import { AllBlog, Blog, BlogInfo, HomePage, NoPage } from "./pages/blog/routes";
import { AdminLogin, CreateBlog, Dashboard } from "./pages/blogAdmin/routes";
import { Toaster } from "react-hot-toast";
function App() {
  //Theme changer........
  const [theme, setTheme] = useState("light");
  const element = document.documentElement;

  const options = [
    { icon: "sunny-outline", text: "light" },
    { icon: "moon-outline", text: "dark" },
  ];

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [element.classList, theme]);
  //.....................
  return (
    <>
      <BrowserRouter>
        <div className="app relative dark:bg-secondary  duration-100">
          <div
            id=""
            className="fixed lg:top-5 lg:right-10 xs:top-[45px] md:top-[25px] xs:right-[90px]  xx:top-[21px] xx:right-[60px]  z-20  duration-100  bg-transparent rounded"
          >
            {options?.map((opt) => (
              <button
                key={opt.text}
                onClick={() => setTheme(opt.text)}
                className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
                  theme === opt.text && "  text-accent"
                }`}
              >
                <ion-icon name={opt.icon}></ion-icon>
              </button>
            ))}
          </div>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/allBlog" element={<AllBlog />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogInfo/:id" element={<BlogInfo />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/createBlog" element={<CreateBlog />} />
          </Routes>
        </div>
        <Toaster />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
