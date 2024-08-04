/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <footer className="w-full bg-extraClr dark:bg-[#111] xx:py-12 py-24 xx:px-0 px-12 ">
          <div className="ss:px-12 xx:px-6 lg:px-28">
            <div className=" m-auto space-y-6 text-secondary dark:text-primary">
              <div className="relative z-1 mb-12">
                <Link
                  to={"https://the-brown-patience-company.vercel.app"}
                  className=""
                  aria-label="logo"
                >
                  <h3 className="text-accent text-center xx:text-2xl ss:text-4xl ">
                    The Brown Patience Company
                  </h3>
                </Link>
                <p className="text-md xx:text-base xx:text-center ss:text-center ss:w-[75%] mx-auto pt-6 text-secondary dark:text-primary">
                  Get your message to the people in need of it. Many gifted
                  persons have a message for their world, books they've been
                  planning to write, a community they long to impact, but they
                  got stuck, couldn't find the time to continue, and began to
                  wonder if they'd ever share that message. The Brown Patience
                  Company exist to provide you all the help you need to share
                  the message you need to share.
                </p>
              </div>
              <ul className="flex flex-col items-center justify-center gap-4 py-6 sm:flex-row sm:gap-8">
                <li>
                  <Link
                    to={"https://the-brown-patience-company.vercel.app"}
                    className="hover:text-accent dark:text-primary font-bold font-xl"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://the-brown-patience-company.vercel.app/editing"}
                    className="hover:text-accent dark:text-primary font-bold font-xl"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://the-brown-patience-company.vercel.app/about"}
                    className="hover:text-accent dark:text-primary font-bold font-xl"
                  >
                    About me
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://the-brown-patience-company.vercel.app/book"}
                    className="hover:text-accent dark:text-primary font-bold font-xl"
                  >
                    Books
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://the-brown-patience-company.vercel.app/subs"}
                    className="hover:text-accent dark:text-primary font-bold font-xl"
                  >
                    Subscription
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      "https://the-brown-patience-company.vercel.app/community"
                    }
                    className="hover:text-accent dark:text-primary font-bold font-xl"
                  >
                    Community
                  </Link>
                </li>
              </ul>
              {/* " Dark mode" */}
              <div className="dark:block hidden">
                <Box className="f-icon  pb-12 m-auto flex w-max items-center justify-between space-x-4">
                  <Link to="tel:+243996660436" aria-label="call">
                    <Phone sx={{ color: "#fff" }} />
                  </Link>
                  <Link to="https://wa.me/message/DOCQNYXAEPVDH1">
                    <WhatsApp sx={{ color: "#fff" }} />
                  </Link>
                  <Link
                    to={
                      "https://www.facebook.com/Compelling_Storywriter?mibextid=ZbWKwL"
                    }
                    title="facebook"
                    target="blank"
                    aria-label="facebook"
                  >
                    <Facebook sx={{ color: "#fff" }} />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/patience-brown-3430ba17a"
                    title="linkedin"
                    aria-label="linkedin"
                  >
                    <LinkedIn sx={{ color: "#fff" }} />
                  </Link>
                  <Link
                    to="https://instagram.com/contents_by_brownpatience?utm_medium=copy_link"
                    title="instagram"
                    aria-label="instagram"
                  >
                    <Instagram sx={{ color: "#fff" }} />
                  </Link>
                  <Link
                    to="https://twitter.com/ContentsbyBrown?s=09"
                    title="X"
                    aria-label="X"
                  >
                    <Twitter sx={{ color: "#fff" }} />
                  </Link>
                </Box>
              </div>

              {/* Light mode */}
              <div className="dark:hidden block">
                <Box className="f-icon  pb-12 m-auto flex w-max items-center justify-between space-x-4">
                  <Link to="tel:+243996660436" aria-label="call">
                    <Phone />
                  </Link>
                  <Link to="https://wa.me/message/DOCQNYXAEPVDH1">
                    <WhatsApp />
                  </Link>
                  <Link
                    to={
                      "https://www.facebook.com/Compelling_Storywriter?mibextid=ZbWKwL"
                    }
                    title="facebook"
                    target="blank"
                    aria-label="facebook"
                  >
                    <Facebook />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/patience-brown-3430ba17a"
                    title="linkedin"
                    aria-label="linkedin"
                  >
                    <LinkedIn />
                  </Link>
                  <Link
                    to="https://instagram.com/contents_by_brownpatience?utm_medium=copy_link"
                    title="instagram"
                    aria-label="instagram"
                  >
                    <Instagram />
                  </Link>
                  <Link
                    to="https://twitter.com/ContentsbyBrown?s=09"
                    title="X"
                    aria-label="X"
                  >
                    <Twitter />
                  </Link>
                </Box>
              </div>

              <div className="text-center">
                <span className=" text-sm tracking-wide">
                  Copyright © emmanuel <span id="year"></span> | All right
                  reserved
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
