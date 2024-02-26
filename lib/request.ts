export async function get(url: string) {
  return await (
    await fetch(process.env.VERCEL_URL + url, { cache: "no-store" })
  ).json();
}

export async function post(url: string, data: any) {
  return await (
    await fetch(process.env.VERCEL_URL + url, {
      method: "POST",
      cache: "no-store",
      body: JSON.stringify(data),
    })
  ).json();
}
