
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import TrendingTopics from '../components/TrendingTopics';
import { posts } from '../data/posts';

const HomePage: React.FC = () => {
    useEffect(() => {
        document.title = 'Gemini React Blog - Home';
    }, []);

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div>
      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-12 group">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img src={featuredPost.imageUrl.replace('600/400', '1200/600')} alt={featuredPost.title} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <span className="text-white bg-blue-600 px-3 py-1 text-sm font-semibold rounded-full mb-2 inline-block">{featuredPost.category}</span>
              <h1 className="text-2xl md:text-4xl font-bold text-white mt-2 leading-tight">
                <Link to={`/post/${featuredPost.id}`} className="hover:underline">
                  {featuredPost.title}
                </Link>
              </h1>
              <p className="text-gray-200 mt-2 hidden md:block max-w-2xl">{featuredPost.summary}</p>
            </div>
          </div>
        </div>
      )}

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Latest Posts</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {otherPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <TrendingTopics />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
