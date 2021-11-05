import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    fetchError,
    networkError,
    isLoading,
  } = useFetch("http://localhost:8000/blogs");

  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  return (
    <div className="home">
      {isLoading && <h2>Loading...</h2>}
      {fetchError && (
        <h2>could not the fetch the requested resource FETCH ERROR!!</h2>
      )}
      {networkError && <h2>Error 404!! NETWORK ERROR!!</h2>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs!"} />}
    </div>
  );
};

export default Home;
