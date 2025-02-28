import { useState, useEffect } from "react";
import FadeInStagger from "../animation/FadeInStagger";
import GridBlogCard from "../blog/grid-blog/GridBlogCard";

const WP_API_URL = "https://codersh.com/wp-json/wp/v2/case-studies?_embed";

function GridBlog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const decodeHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.documentElement.textContent;
  };

  useEffect(() => {
    fetch(WP_API_URL)
      .then((response) => response.json())
      .then((data) => {
        // Transform WP data to match GridBlogCard structure
        const formattedPosts = data.map((post) => ({
          id: post.id,
          title: decodeHTML(post.title.rendered),
          img: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/blog1.png",
          link: `/case-studies/${post.slug}`
        }));
        setPosts(formattedPosts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: "center", marginTop: "20px" }}>Loading posts...</p>;

  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {posts.map((caseStudy, index) => (
                <FadeInStagger className="col-xl-4" key={caseStudy.id} index={index}>
                  <GridBlogCard blog={caseStudy} />
                </FadeInStagger>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridBlog;
