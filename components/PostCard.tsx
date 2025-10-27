
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out flex flex-col">
      <Link to={`/post/${post.id}`} className="block">
        <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{post.category}</p>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
          <Link to={`/post/${post.id}`} className="hover:text-blue-700 transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 flex-grow">{post.summary}</p>
        <div className="mt-4 flex items-center">
          <div className="flex-shrink-0">
             <img className="h-10 w-10 rounded-full" src={`https://i.pravatar.cc/40?u=${post.author}`} alt={post.author} />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{post.author}</p>
            <div className="text-sm text-gray-500">
              <time dateTime={post.publicationDate}>{new Date(post.publicationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
