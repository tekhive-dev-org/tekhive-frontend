import { useBlogs } from "../../context/BlogContext/BlogContext";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { useState } from "react";

const AllPosts = () => {
  const { blogs, loading } = useBlogs();
  const [page, setPage] = useState(1);
  const postsPerPage = 6;

  if (loading) return <p className="text-center py-10">Loading posts...</p>;

  const totalPages = Math.ceil(blogs.length / postsPerPage);
  const currentPosts = blogs.slice((page - 1) * postsPerPage, page * postsPerPage);

  return (
    <section className="px-4 md:px-10 py-10">
      <h3 className="text-2xl font-semibold mb-6">All blog posts</h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((blog, i) => (
          <BlogCard key={i} blog={blog} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 border rounded ${page === i + 1 ? "bg-blue-600 text-white" : "bg-white"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

export default AllPosts;
