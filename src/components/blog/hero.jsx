/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section id="Bloghero">
        <div
          style={{
            background: ` url("https://i.postimg.cc/K8XNPK0r/Untitled-design-21.jpg")
            no-repeat center center/cover`,
          }}
          className="grid ss:py-40 xx:py-32 text-center img ss:px-12 xx:px-6 "
        >
          <h1 className="text-primary ss:text-5xl text-3xl xx:py-3 ss:py-6  ss:font-semibold font-bold">
            My Blog
          </h1>
          <p className="sm:text-2xl xx:text-xl xx:w-full ss:w-[75%] mx-auto  text-white xx:py-3  ss:py-6 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            atque nesciunt suscipit hic veritatis soluta ipsum tenetur quia
            magni unde nobis eius quidem rem iusto modi, illum tempora libero.
            Ut.
          </p>
          <Link to={"https://wa.me/message/DOCQNYXAEPVDH1"}>
            <button className="w-[11rem] py-5 px-7 mx-auto  bg-white h-[4rem] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-lightAccent before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]">
              CONTACT ME
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
