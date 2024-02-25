export default async function useFetch(url: string) {
  return await (
    await fetch("http:localhost:3000" + url, { cache: "no-store" })
  ).json();
}
