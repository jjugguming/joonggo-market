"use client";

import supabase from "@/supabase/client.supabase";
import { useRouter } from "next/navigation";
import { ComponentProps, useState } from "react";

function DealsPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");

  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();

    await supabase.from("deals").insert({ title, content, price, location });

    alert("판매글이 작성되었습니다.");
    router.push("/");
  };
  //제목
  const handleChangeTitle: ComponentProps<"input">["onChange"] = (e) => {
    setTitle(e.target.value);
  };

  //내용
  const handleChangeContent: ComponentProps<"input">["onChange"] = (e) => {
    setContent(e.target.value);
  };

  //판매 가격
  const handleChangePrice: ComponentProps<"input">["onChange"] = (e) => {
    setPrice(Number(e.target.value));
  };

  //직거래 위치
  const handleChangeLocation: ComponentProps<"input">["onChange"] = (e) => {
    setLocation(e.target.value);
  };

  return (
    <>
      <h1 className="ml-[200px] text-left font-bold text-2xl mb-10 mt-20">
        판매글 작성하기
      </h1>

      <form onSubmit={handleSubmit} className="text-center w-[900px] m-auto">
        <h1 className="text-left mb-2 text-[18px] font-bold">제목</h1>
        <input
          value={title}
          onChange={handleChangeTitle}
          className="p-[10px] w-full border-[1.5px] border-gray-300
      rounded-md focus:border-blue-300 outline-none px-8 text-xl mb-5"
          type="text"
          autoFocus
          name="title"
        />
        <h1 className="text-left mb-2 text-[18px] font-bold">글 내용</h1>
        <input
          value={content}
          onChange={handleChangeContent}
          className="p-[150px] w-full border-[1.5px] border-gray-300
      rounded-md focus:border-blue-300 outline-none px-8 text-xl mb-5"
          type="text"
          autoFocus
          name="title"
        />
        <h1 className="text-left mb-2 text-[18px] font-bold">직거래 위치</h1>
        <input
          value={location}
          onChange={handleChangeLocation}
          className="p-[10px] w-full border-[1.5px] border-gray-300
      rounded-md focus:border-blue-300 outline-none px-8 text-xl mb-5"
          type="text"
          autoFocus
          name="title"
        />
        <h1 className="text-left mb-2 text-[18px] font-bold">판매 가격</h1>
        <input
          value={price}
          onChange={handleChangePrice}
          className="p-[10px] w-full border-[1.5px] border-gray-300
      rounded-md focus:border-blue-300 outline-none px-8 text-xl mb-5"
          type="text"
          autoFocus
          name="title"
        />
        <button className="hover:translate-y-[-10px] transition-transform bg-blue-400 font-semibold text-white p-3 text-lg w-full">
          판매글 작성하기
        </button>
      </form>
    </>
  );
}

export default DealsPage;
