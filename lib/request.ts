export async function Get(url: string) {
  return await (
    await fetch(process.env.NEXT_PUBLIC_VERCEL_URL + url, {
      method: "GET",
      cache: "no-store",
    })
  ).json();
}

export async function Post(url: string, data: any) {
  return await (
    await fetch(url, {
      method: "POST",
      cache: "no-store",
      body: JSON.stringify(data),
    })
  ).json();
}

export async function Patch(url: string, data: any) {
  return await (
    await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(data),
    })
  ).json();
}
export async function Delete(url: string, data: any) {
  return await (
    await fetch(url, {
      method: "DELETE",
      cache: "no-store",
      body: JSON.stringify(data),
    })
  ).json();
}
