"use client";
import supabase from "@/supabase/client.supabase";

async function MySellPage() {
  const response = await supabase.auth.getUser();
  // const response = await supabase
  //   .from("deals")
  //   .select()
  //   .eq("uuid", supabase.auth.getUser());
  // const deals = response.data;
  console.log(response.data);
  return (
    <>
      <h1 className="ml-[200px] text-left font-bold text-2xl mb-10 mt-20">
        내 판매글
      </h1>
      {/* <ul>
        <li className="ml-[200px] mb-5 inline-block">내 판매글</li>
        <ul className="ml-[200px] grid grid-cols-3">
          {deals.map((deal) => {
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
        </ul>
        <li className="ml-5 mb-5 inline-block">관심 판매글</li>
        <hr className="ml-[200px] w-[1100px] border" />
      </ul> */}
    </>
  );
}

export default MySellPage;
