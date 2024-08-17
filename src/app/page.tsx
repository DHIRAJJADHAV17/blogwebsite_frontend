"use client";
import CardItems from "@/components/CardItems";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import axios from "axios"; // Assuming you're using axios for HTTP requests
import { getAllBlog } from "@/apis/MyBlogApi";

export default function Home() {
  const [otherBlogs, setOtherBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getAllBlog();
        

        const res = await response.blogs;
        setOtherBlogs(res);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header showhero />
      <div className="container mx-auto flex-1 py-10">
        <div className="flex flex-col gap-12">
          <div className="md:px-32 bg-gray-100 rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-40">
            <h1 className="text-5xl font-bold tracking-tight text-primary">
              Tuck Into A Takeaway Today
            </h1>
            <span className="text-xl">Blog is just a click away!</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Other Blogs</h2>
            <div className="grid md:grid-cols-4 gap-5 mt-5">
              {otherBlogs.map((blog, index) => (
                <CardItems key={index} detail={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
