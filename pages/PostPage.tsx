
import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import RelatedPosts from '../components/RelatedPosts';

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const post = useMemo(() => posts.find(p => p.id === id), [id]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Gemini React Blog`;
    }
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Post not found</h1>
        <p className="mt-4 text-gray-600">Sorry, we couldn't find the post you're looking for.</p>
        <Link to="/" className="mt-6 inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <article>
        <header className="mb-8">
          <div className="mb-4">
            <Link to="/" className="text-blue-600 hover:underline text-sm font-medium">&larr; Back to all posts</Link>
          </div>
          <p className="text-base text-blue-600 font-semibold tracking-wide uppercase">{post.category}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 my-2">{post.title}</h1>
          <div className="flex items-center text-sm text-gray-500">
            <img className="h-8 w-8 rounded-full mr-2" src={`https://i.pravatar.cc/32?u=${post.author}`} alt={post.author} />
            <span>By {post.author} on <time dateTime={post.publicationDate}>{new Date(post.publicationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time></span>
          </div>
        </header>

        <img className="w-full rounded-lg shadow-lg mb-8" src={post.imageUrl.replace('600/400', '1000/500')} alt={post.title} />

        <div className="prose prose-lg max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                    <span key={tag} className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </article>

      <RelatedPosts currentPostId={post.id} category={post.category} />
    </div>
  );
};

export default PostPage;
