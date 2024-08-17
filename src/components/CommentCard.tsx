import { User } from "lucide-react";
import React from "react";

const CommentCard = ({ data }: any) => {
  return (
    <div className="grid items-center bg-gray-200  rounded-lg shadow mb-4 ">
      <div className="flex flex-row justify-between px-2 pt-2">
        <div className="flex ">
          <User size={20} style={{ color: "black" }} />
          <h3 className="">{data.author}</h3>
        </div>
        <div className="flex">
          <h3 className=""> {data.createdOn.slice(0, 10)}</h3>
        </div>
      </div>
      <div className="ml-4 mb-3">
        <p className="text-gray-600">{data.content}</p>
      </div>
    </div>
  );
};

export default CommentCard;
