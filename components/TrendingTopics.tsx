
import React from 'react';
import { trendingTopics } from '../data/posts';

const TrendingTopics: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Trending Topics</h3>
      <ul className="space-y-3">
        {trendingTopics.map((topic) => (
          <li key={topic.name} className="flex justify-between items-center text-gray-600 hover:text-blue-600 transition-colors">
            <a href="#" className="font-medium">{topic.name}</a>
            <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">{topic.postCount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingTopics;
