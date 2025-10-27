
import React from 'react';
import { posts as allPosts } from '../data/posts';
import { Post } from '../types';
import PostCard from './PostCard';

interface RelatedPostsProps {
  currentPostId: string;
  category: string;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentPostId, category }) => {
  const related = allPosts
    .filter(post => post.category === category && post.id !== currentPostId)
    .slice(0, 3);

  if (related.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Related Posts</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {related.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
