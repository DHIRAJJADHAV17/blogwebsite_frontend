"use client";

import React from "react";
import { Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import EditAddBlog from "./form/EditAddBlog";
import { deleteblog } from "@/apis/MyBlogApi";
import { useRouter } from "next/navigation";

type Props = {
  detail: any;
  onDelete: () => void;
};

const EditCardItems = ({ detail, onDelete }: Props) => {
  const router = useRouter();

  const removeHandle = async () => {
    try {
      await deleteblog(detail._id);
      onDelete(); // Call the onDelete function to refresh the list
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="border rounded-xl p-4 bg-white hover:shadow-xl transform transition-transform duration-300 hover:scale-105 relative">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">{detail.title.slice(0, 30)}</h6>
          <span className="text-xs text-slate-500"></span>
        </div>
        <Link href={`/blog/${detail._id}`}>
          <p className="bg-primary text-white rounded text-sm px-2">
            View Comments
          </p>
        </Link>
      </div>
      <p className="text-xs text-slate-600 mt-2">
        {detail.content.slice(0, 60)}{" "}
        <span className="text-blue-500">View More....</span>
      </p>
      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-slate-500">{detail.author}</div>
        <div className="flex items-center gap-2">
          <EditAddBlog blogData={detail}>
            <Edit className="icon-btn hover:text-green-600" />
          </EditAddBlog>
          <Trash2
            onClick={removeHandle}
            className="icon-btn hover:text-red-500"
          />
        </div>
      </div>
    </div>
  );
};

export default EditCardItems;
