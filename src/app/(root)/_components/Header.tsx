import supabase from "@/supabase/client.supabase";
import { useAuthStore } from "@/zustand/useAuthStore";
import Link from "next/link";

function Header() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const handleClicklogOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className=" w-full border-b-2 border-gray-200 bg-white font-sans">
      <div className=" whitespace-nowrap w-full container flex itmes-center py-6">
        <Link href="/" className="ml-[200px] font-bold text-lg">
          중고마켓
        </Link>

        <nav className="ml-10 px-5 font-medium text-base w-full">
          <ul className="px-5 font-medium w-full flex flex-row gap-x-5">
            <li>
              <Link href={"/deals/create"}>판매하기</Link>
            </li>
            {isLoggedIn ? (
              <li>
                <Link href={"/my/deals"}>내 판매글</Link>
              </li>
            ) : null}
            {isLoggedIn ? (
              <li className="ml-[550px] flex flex-row gap-x-5">
                <button onClick={handleClicklogOut}>로그아웃</button>
              </li>
            ) : (
              <li className="ml-[550px] flex flex-row gap-x-5">
                <Link href={"/auth/login"}>로그인</Link>
                <Link href={"/auth/sign-up"}>회원가입</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
