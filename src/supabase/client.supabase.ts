import { createClient } from "@supabase/supabase-js";

export const createFetch =
  (options: Pick<RequestInit, "next" | "cache">) =>
  (url: RequestInfo | URL, init?: RequestInit) => {
    return fetch(url, {
      ...init,
      ...options,
    });
  };

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    global: {
      fetch: createFetch({
        cache: "no-store",
      }),
    },
  }
);

export default supabase;
