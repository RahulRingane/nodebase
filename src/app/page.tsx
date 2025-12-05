import prisma from "@/lib/db";

export default async function Home() {
  const posts = await prisma.post.findMany()
  return (
    <main>
    <h1>Post</h1>
    </main>
  )
}