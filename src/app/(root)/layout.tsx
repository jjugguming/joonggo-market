"use client";
import supabase from "@/supabase/client.supabase";
import { useAuthStore } from "@/zustand/useAuthStore";
import React, { useEffect } from "react";
import Header from "./_components/Header";

function RootLayout({ children }: { children: React.ReactNode }) {
  const logIn = useAuthStore((state) => state.logIn);
  const logOut = useAuthStore((state) => state.logOut);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        //로그인 된 상태
        logIn();
      } else {
        //로그아웃 된 상태
        logOut();
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default RootLayout;
