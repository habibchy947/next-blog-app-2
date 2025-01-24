// import Image from "next/image";

import Link from "next/link"

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  console.log(posts)
  return (
      <div className="w-11/12 mx-auto mt-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
           {
            posts.map((post, index) => <Link key={index} href={`/blog/${post.id}`} className="p-5 hover:bg-slate-50 border rounded-md shadow-sm hover:text-blue-500">
              <h1>{post.title}</h1>
            </Link>)
           }
        </div>
      </div>
  )
}
