import BlogPostCard from "../../components/blog/blogPostCard";
import Hero from "../../components/blog/hero";
import Loader from "../../components/blog/loader";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <BlogPostCard />
      <Loader />
    </div>
  );
};

export default HomePage;
