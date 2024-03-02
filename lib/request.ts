export async function get(url: string) {
  console.log("GET: " + process.env.NEXT_PUBLIC_VERCEL_URL + url);
  return await (
    await fetch(process.env.NEXT_PUBLIC_VERCEL_URL + url, { cache: "no-store" })
  ).json();
}

export async function post(url: string, data: any) {
  // console.log("POST: " + process.env.VERCEL_URL + url);
  console.log("POST: " + process.env.NEXT_PUBLIC_VERCEL_URL + url);
  return await (
    await fetch(url, {
      method: "POST",
      cache: "no-store",
      body: JSON.stringify(data),
    })
  ).json();
}
