"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
// Adjust the import path based on your project structure
import MainNav from "./MainNav";
import AuthNav from "./AuthNav";
import Hero from "./Hero";
import { RootState } from "@/lib/store/store";
import { checkUser } from "@/lib/store/features/user/userSlice";
import { log } from "console";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";

type Props = {
  showhero?: boolean;
};

const Header = ({ showhero = false }: Props) => {
  const [islogin, setlogin] = useState<boolean>(false);
  useEffect(() => {
    const userdata = localStorage.getItem("user");
    if (userdata) {
      setlogin(true);
    } else {
      setlogin(false);
    }
  }, [islogin]);

  return (
    <>
      <div className="border-b-2 border-b-primary py-6 bg-white">
        <div className="container mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary">
            <Link href="/">My_Blog</Link>
          </h2>
          <div className="flex">{islogin ? <MainNav /> : <AuthNav />}</div>
        </div>
      </div>
      {showhero && <Hero />}
    </>
  );
};

export default Header;
