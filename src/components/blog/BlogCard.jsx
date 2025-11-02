export default function BlogCard({ post }) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <img src={post.image || "/blog/iedc_landscape.jpg"} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold text-gray-600 uppercase">{post.category}</span>
          <span className="text-xs text-gray-500">{post.readTime} min read</span>
        </div>
        <h3 className="text-lg font-bold mb-2 text-black">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
      </div>
    </article>
  )
}
