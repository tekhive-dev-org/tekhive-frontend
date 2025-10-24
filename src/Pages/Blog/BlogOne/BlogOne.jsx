import NewsletterHeader from "../../../Components/NewsLetterHeader/NewsLetterHeader";
import RecentPosts from "../../../Components/RecentPosts/RecentPosts";
import AllPosts from "../../../Components/AllPosts/AllPosts";

const BlogOne = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <NewsletterHeader />
      <RecentPosts />
      <AllPosts />
    </main>
  );
}

export default BlogOne;
