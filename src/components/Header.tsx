"use client";
import React, { useEffect } from "react";
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
  const dispatch = useAppDispatch();
  const userdata = useAppSelector((state) => state.user);

  return (
    <>
      <div className="border-b-2 border-b-primary py-6 bg-white">
        <div className="container mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary">
            <Link href="/">My_Blog</Link>
          </h2>
          <div className="flex">{userdata ? <MainNav /> : <AuthNav />}</div>
        </div>
      </div>
      {showhero && <Hero />}
    </>
  );
};

export default Header;
