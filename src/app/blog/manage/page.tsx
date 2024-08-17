"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMyBlog } from "@/apis/MyBlogApi";
import EditCardItems from "@/components/EditCardItems";
import EditAddBlog from "@/components/form/EditAddBlog";
import { Plus } from "lucide-react";
import withAuth from "./../../../lib/hof/withauth";

const Page = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const router = useRouter(); // Add useRouter hook

  // Define the fetchBlogs function
  const fetchBlogs = async () => {
    try {
      const response = await getMyBlog();
      setBlogs(response.myblogs || []); // Ensure to set the correct property
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Function to be passed to EditAddBlog to refresh the list
  const handleSuccess = () => {
    // Force page refresh
    router.refresh();
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {blogs.length > 0 ? (
            blogs.map((item: any) => (
              <EditCardItems
                key={item._id}
                detail={item}
                onDelete={handleSuccess} // Ensure to use handleSuccess
              />
            ))
          ) : (
            <p>No blogs found</p>
          )}
        </div>
      </div>
      <button className="fixed w-16 h-16 flex items-center justify-center rounded-2xl bg-gray-500 hover:bg-blue-600 absolute right-10 bottom-20 z-50">
        <EditAddBlog onSuccess={handleSuccess}>
          <Plus className="text-[32px] text-white " />
        </EditAddBlog>
      </button>
    </>
  );
};

export default withAuth(Page);
