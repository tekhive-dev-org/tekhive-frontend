// import { createContext, useContext, useEffect, useState } from "react";

// const BlogContext = createContext();

// export const BlogProvider = ({ children }) => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch blogs from API
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await fetch("https://your-api-url.com/blogs"); // Replace with your real endpoint
//         const data = await res.json();
//         setBlogs(data);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBlogs();
//   }, []);

//   return (
//     <BlogContext.Provider value={{ blogs, loading }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export const useBlogs = () => useContext(BlogContext);


import { createContext, useContext, useEffect, useState } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch();
        const data = await res.json();

        // Map and format data to fit your BlogCard structure
        const formatted = data.map((article) => ({
          id: article.id,
          title: article.title,
          author: article.user?.name || "Anonymous",
          date: article.published_at || new Date().toISOString(),
          description:
            article.description ||
            article.summary ||
            "No description available.",
          image:
            article.cover_image ||
            "https://via.placeholder.com/600x400?text=No+Image",
          url: article.url,
        }));

        setBlogs(formatted);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, loading }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => useContext(BlogContext);
