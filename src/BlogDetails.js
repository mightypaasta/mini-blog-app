import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    fetchError,
    networkError,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
      console.log("blog deleted");
    });
  };
  return (
    <div className="blog-details">
      {isLoading && <h2>Loading...</h2>}
      {fetchError && (
        <h2>could not the fetch the requested resource FETCH ERROR!!</h2>
      )}
      {networkError && <h2>Error 404!! NETWORK ERROR!!</h2>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
