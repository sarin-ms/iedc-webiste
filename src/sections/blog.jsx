"use client";

import { useState } from "react";
import BlogCard from "../components/blog/BlogCard";
import BlogSearch from "../components/blog/BlogSearch";
import BlogFilter from "../components/blog/BlogFilter";
import ViewMoreButton from "../components/ViewMoreButton";
import { blogPosts } from "../data/blog";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const displayedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <section id="updates" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          Updates and Announcements
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Upcoming events and other announcements from the IEDC community
        </p>

        <div className="mb-8 space-y-4">
          <BlogSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <BlogFilter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <ViewMoreButton href="/updates" text="View More Updates" />
      </div>
    </section>
  );
}
