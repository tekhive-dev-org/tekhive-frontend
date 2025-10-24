import { useBlogs } from "../../context/BlogContext/BlogContext";
import BlogCard from "../../Components/BlogCard/BlogCard";

const RecentPosts = () => {
  const { blogs, loading } = useBlogs();

  if (loading) return <p className="text-center py-10">Loading recent posts...</p>;

  const recent = blogs.slice(0, 3);

  return (
    <section className="px-4 md:px-10 py-10">
      <h3 className="text-2xl font-semibold mb-6">Recent blog posts</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {recent.map((blog, i) => (
          <div key={i} className={i === 0 ? "md:col-span-2 row-span-2" : ""}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentPosts;
