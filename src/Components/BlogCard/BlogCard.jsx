const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{blog.author} • {new Date(blog.date).toDateString()}</p>
        <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{blog.description}</p>
      </div>
    </div>
  );
}

export default BlogCard;
