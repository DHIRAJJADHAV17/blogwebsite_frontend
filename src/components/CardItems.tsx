"use client";

import React from "react";
import { Delete, Edit, Text, Trash2 } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import EditAddBlog from "./form/EditAddBlog";

type Props = {
  detail: any;
};

const CardItems = ({ detail }: Props) => {
  return (
    <div className="border rounded-xl p-4 bg-white hover:shadow-xl transform transition-transform duration-300 hover:scale-105 relative ">
      <div className="flex items-center justify-between">
        <div>
          <h6 className=" text-sm font-medium">{detail.title.slice(0, 30)}</h6>
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
      </div>
    </div>
  );
};

export default CardItems;
