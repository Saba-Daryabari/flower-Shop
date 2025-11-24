import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";
import blog7 from "../assets/blog7.jpg";
import blog8 from "../assets/blog8.jpg";
import blog9 from "../assets/blog9.jpg";
import blog10 from "../assets/blog10.jpg";
import BlogPostCard from "../Components/BlogPostCard";

export type BlogPost = {
  date: string;
  title: string;
  description: string;
  author?: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    date: "04.05.2018",
    title: "Say you care",
    description: "Class aptent taciti sociosqu ad litora torquent per inceptos himenaeos.",
    image: blog1
  },
  {
    date: "04.05.2018",
    title: "With Impact",
    description: "Class aptent taciti sociosqu ad litora torquent per inceptos himenaeos.",
    image: blog2
  },
  {
    date: "04.05.2018",
    title: "Making beautiful flowers a part of your life.",
    description: "Jasmine White",
    author: "Jasmine White",
    image: blog3
  },
  {
    date: "04.05.2018",
    title: "Flowers, anytime…",
    description: "Class aptent taciti sociosqu ad litora torquent per inceptos himenaeos.",
    image: blog4
  },
  {
    date: "04.05.2018",
    title: "The art of fresher flowers",
    description: "Class aptent taciti sociosqu ad litora torquent per inceptos himenaeos.",
    image: blog5
  },
  {
    date: "04.05.2018",
    title: "You bring the thought. We’ll bring the flowers.",
    description: "Jasmine White",
    author: "Jasmine White",
    image: blog6
  },
  {
    date: "04.05.2018",
    title: "Made With Care",
    description: "Class aptent taciti sociosqu ad litora torquent per inceptos himenaeos.",
    image: blog7
  },
  {
    date: "04.05.2018",
    title: "Where dreams become reality",
    description: "Class aptent taciti sociosqu ad litora torquent per inceptos himenaeos.",
    image: blog8
  },
  {
    date: "04.05.2018",
    title: "Say it with flowers",
    description: "Class aptent taciti sociosqu ad litora torquent per inceptos himenaeos.",
    image: blog9
  },
  {
    date: "04.05.2018",
    title: "Award winning florist",
    description: "Class aptent taciti sociosqu ad litora torquent per inceptos himenaeos.",
    image: blog10
  }
];

export default function Blog() {
  return (
    <div className="blog-container">
        {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post}/>
        ))} 

    </div>
  )
}
