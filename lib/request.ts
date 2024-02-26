export async function get(url: string) {
  return await (
    await fetch("http:localhost:3000" + url, { cache: "no-store" })
  ).json();
}

export async function post(url: string, data: any) {
  return await (
    await fetch(url, {
      method: "POST",
      cache: "no-store",
      body: JSON.stringify(data),
    })
  ).json();
}
