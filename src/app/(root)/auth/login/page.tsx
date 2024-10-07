"use client";
import supabase from "@/supabase/client.supabase";
import { useRouter } from "next/navigation";
import { ComponentProps, useRef } from "react";

function LoginPage() {
  const router = useRouter();
  const formRef = useRef(null);

  const handleSubmitSignInForm: ComponentProps<"form">["onSubmit"] = async (
    e
  ) => {
    e.preventDefault();

    const email = formRef.current!.email.value;
    const password: string = formRef.current!.password.value;

    if (!email) return alert("이메일 입력해 주세요");
    if (!password || password.length < 8)
      return alert("비밀번호를 8자 이상 입력해 주세요");

    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (response.data.user) {
      alert("축하해유. 로그인에 성공했습니다.");

      router.push("/");
    } else {
      alert("로그인에 실패하였습니다.");
    }
  };
  return (
    <>
      <h1 className="ml-[200px] text-left font-bold text-2xl mb-8 mt-20">
        로그인
      </h1>
      <form
        ref={formRef}
        onSubmit={handleSubmitSignInForm}
        className="inline-block ml-[200px] w-[480px] m-auto"
      >
        <h1 className="text-left mb-2 text-[18px]">이메일</h1>
        <input
          className="p-[18px] w-full border-[1.5px] border-gray-300
        rounded-md focus:border-blue-300 outline-none px-8 text-xl mb-5"
          type="text"
          autoFocus
          name="email"
        />
        <h1 className="text-left mb-2 text-[18px]">비밀번호</h1>
        <input
          className="p-[18px] w-full border-[1.5px] border-gray-300
        rounded-md focus:border-blue-300 outline-none px-8 text-xl mb-5"
          type="password"
          name="password"
        />
        <button className="hover:translate-y-[-10px] transition-transform bg-blue-400 font-semibold text-white p-5 text-xl w-full">
          로그인하기
        </button>
      </form>
    </>
  );
}

export default LoginPage;
