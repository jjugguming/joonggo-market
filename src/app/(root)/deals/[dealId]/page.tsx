"use client";
import supabase from "@/supabase/client.supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ComponentProps } from "react";

export default async function DealsDetaliPage({ params: { dealId } }) {
  const router = useRouter();
  const response = await supabase
    .from("deals")
    .select()
    .eq("id", dealId)
    .single();
  const deal = response.data;

  const hadleClickEvent: ComponentProps<"button">["onClick"] = async (e) => {
    await supabase.from("deals").delete().eq("id", dealId);
    alert("삭제되었습니다.");
    router.push("/");
  };
  console.log(deal);
  return (
    <>
      <ul className="ml-[450px] mt-10">
        <li className="mb-10" key={deal.id}>
          <div className="mb-2 w-[600px] h-[600px] bg-blue-400"></div>
          <hr className="border w-[600px] mb-5" />
          <h2 className="font-semibold mb-5">{deal.title}</h2>
          <p className="font-bold text-xl mb-5">
            {deal.price.toLocaleString()}원
          </p>
          <p className="font-semibold mb-5">{deal.content}</p>
          <Link href={`/deals/${deal.id}/edit`}>
            <button className="bg-blue-300 mb-5 p-3 text-white rounded-sm">
              수정하기
            </button>
          </Link>
          <button
            onClick={hadleClickEvent}
            className="bg-blue-300 ml-10 mb-5 p-3 text-white rounded-sm"
          >
            삭제하기
          </button>
          <hr className="border w-[600px] mb-5" />
        </li>
        <h1 className="font-bold text-xl">인기중고</h1>
        {/* <ul className="ml-[200px] grid grid-cols-3">
          {deal.map((deal) => {
            return (
              <li className="mb-10" key={deal.id}>
                <Link href={`/deals/${deal.id}`}>
                  <div className="mb-2 w-[300px] h-[300px] bg-blue-400"></div>
                  <h2 className="font-semibold">{deal.title}</h2>
                  <p className="font-semibold">
                    {deal.price.toLocaleString()}원
                  </p>
                  <p className="font-semibold">{deal.location}</p>
                </Link>
              </li>
            );
          })}
        </ul> */}
      </ul>
    </>
  );
}
