"use client";
import React from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { removeuser } from "@/lib/store/features/user/userSlice";

const MainNav = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4">
      <Link href="/manage_blog">
        <Button
          className="font-bold hover:text-white hover:bg-primary"
          variant="ghost"
        >
          Manage Restro
        </Button>
      </Link>
      <Button
        className="font-bold hover:text-white hover:bg-primary"
        variant="ghost"
        onClick={() => {
          dispatch(removeuser());
          router.replace("/login");
        }}
      >
        Log-Out
      </Button>
    </div>
  );
};

export default MainNav;
