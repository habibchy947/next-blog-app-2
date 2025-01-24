
const BlogDetails = async ({ params }) => {
    const { id } = params
    console.log(id)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    console.log(post)
    return (
        <div className="card bg-white mt-5 border rounded-sm shadow-sm w-10/12 mx-auto">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    );
};

export default BlogDetails;