import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import logo2 from "../assets/logoIcon.png";
import {
  Logo,
  Logo2,
  NavWrapper,
  NavWrapperLink,
  StyledNavText,
  DropdownMenu,
  DropdownItem,
} from "../styles/index.styled";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [subsOpen, setSubsOpen] = useState(false);
  const servicesRef = useRef(null);
  const subsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (subsRef.current && !subsRef.current.contains(event.target)) {
        setSubsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Scroll to top whenever location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const closeMenu = () => {
    setActive(false);
    setServicesOpen(false);
    setSubsOpen(false);
  };

  const link = [
    { page: "Home", href: "https://the-brown-patience-company.vercel.app/" },
    {
      page: "Services",
      href: "#",
      dropdown: [
        {
          page: "Book Writing & Editing",
          href: "https://the-brown-patience-company.vercel.app/editing",
        },
        {
          page: "Content Writing",
          href: "https://the-brown-patience-company.vercel.app/contentWriting",
        },
        {
          page: "Coaching For Writers",
          href: "https://the-brown-patience-company.vercel.app/coachingForWriters",
        },
      ],
    },
    {
      page: "About",
      href: "https://the-brown-patience-company.vercel.app/about",
    },
    {
      page: "Subscriptions",
      href: "#",
      dropdown: [
        {
          page: "Guidance For Solopreneurs",
          href: "https://the-brown-patience-company.vercel.app/guidianceForSolopreneur",
        },
        {
          page: "Coaching For Authors",
          href: "https://the-brown-patience-company.vercel.app/coachingForAuthors",
        },
      ],
    },
    {
      page: "Books",
      href: "https://the-brown-patience-company.vercel.app/book",
    },
    { page: "Blog", href: "/" },
    {
      page: "Community",
      href: "https://the-brown-patience-company.vercel.app/community",
    },
  ];

  return (
    <>
      <NavWrapper
        id="nav"
        className="px-12 w[100%] py-2 drop-shadow-md relative"
      >
        <div>
          <NavLink
            to="https://the-brown-patience-company.vercel.app"
            onClick={closeMenu}
          >
            <Logo className="w-[11rem]" src={logo} />
          </NavLink>
          <NavLink
            to="https://the-brown-patience-company.vercel.app"
            onClick={closeMenu}
          >
            <Logo2 className="" src={logo2} alt="" />
          </NavLink>
        </div>
        {active ? (
          <IoCloseOutline
            className="md:hidden xx:block absolute sm:top-[50px] sm:right-[30px] ss:top-[45px] ss:right-[30px] xs:top-[50px] xs:right-[30px] xx:top-[30px] xx:right-[20px] xx:text-[1.4rem] xs:text-[2rem] text-accent"
            onClick={() => setActive(!active)}
          />
        ) : (
          <CiMenuFries
            className="md:hidden xx:block absolute sm:top-[50px] sm:right-[30px] ss:top-[45px] ss:right-[30px] xs:top-[50px] xs:right-[30px] xx:top-[30px] xx:right-[20px] xx:text-[1.4rem] xs:text-[2rem] text-accent"
            onClick={() => setActive(!active)}
          />
        )}

        <NavWrapperLink active={active}>
          {link.map((link) => (
            <div key={link.page} className="relative">
              <StyledNavText
                to={link.href}
                className={"text-base font-semibold"}
                onClick={(e) => {
                  if (
                    link.page === "Services" ||
                    link.page === "Subscriptions"
                  ) {
                    e.preventDefault();
                    if (link.page === "Services")
                      setServicesOpen(!servicesOpen);
                    if (link.page === "Subscriptions") setSubsOpen(!subsOpen);
                  } else {
                    closeMenu();
                  }
                }}
              >
                {link.page}
              </StyledNavText>
              {link.dropdown && (
                <DropdownMenu
                  className="absolute top-full left-0"
                  open={
                    (link.page === "Services" && servicesOpen) ||
                    (link.page === "Subscriptions" && subsOpen)
                  }
                  ref={link.page === "Services" ? servicesRef : subsRef}
                >
                  {link.dropdown.map((dropdownLink) => (
                    <DropdownItem
                      key={dropdownLink.page}
                      to={dropdownLink.href}
                      className="block px-4 py-2 text-sm"
                      onClick={closeMenu}
                    >
                      {dropdownLink.page}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              )}
            </div>
          ))}
        </NavWrapperLink>
        {/* <div className="">
          <Link className="" to="/adminLogin">
            <button className="w-[10rem] fixed right-[-17rem] top-0 py-5 px-7  bg-white h-[3rem] my-3 mr-[25rem] flex items-center rounded-xl cursor-pointer  overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-lightAccent before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]">
              Admin Login
            </button>
          </Link>
        </div> */}
      </NavWrapper>
    </>
  );
};

export default NavBar;
