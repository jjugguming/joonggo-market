import supabase from "@/supabase/client.supabase";
import Link from "next/link";

export default async function HomePage() {
  const response = await supabase.from("deals").select();
  const deals = response.data;
  return (
    <>
      <h1 className="ml-[200px] text-left font-bold text-2xl mb-8 mt-20">
        전체 판매글
      </h1>
      <ul className="ml-[200px] grid grid-cols-3">
        {deals.map((deal) => {
          return (
            <li className="mb-10" key={deal.id}>
              <Link href={`/deals/${deal.id}`}>
                <div className="mb-2 w-[300px] h-[300px] bg-blue-400"></div>
                <h2 className="font-semibold">{deal.title}</h2>
                <p className="font-semibold">{deal.price.toLocaleString()}원</p>
                <p className="font-semibold">{deal.location}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
