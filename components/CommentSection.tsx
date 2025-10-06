
import React from 'react';
import type { Comment } from '../types';
import { LikeIcon, DislikeIcon } from './Icons';

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-4">{comments.length} Comments</h2>
      
      {/* Add comment input */}
      <div className="flex items-start space-x-4 mb-6">
        <img src="https://picsum.photos/seed/user/40/40" alt="Your Avatar" className="w-10 h-10 rounded-full" />
        <div className="flex-1">
            <input type="text" placeholder="Add a comment..." className="w-full bg-transparent border-b border-zinc-600 focus:border-white outline-none pb-1" />
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map(comment => (
          <div key={comment.id} className="flex items-start space-x-4">
            <img src={comment.avatarUrl} alt={comment.author} className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-semibold text-white">@{comment.author.toLowerCase().replace(' ', '')}</p>
                <p className="text-xs text-zinc-400">{comment.timestamp}</p>
              </div>
              <p className="text-sm mt-1">{comment.text}</p>
              <div className="flex items-center space-x-4 mt-2">
                <button className="flex items-center text-zinc-400 hover:text-white">
                  <LikeIcon className="w-4 h-4" />
                  <span className="text-xs ml-1">{comment.likes}</span>
                </button>
                <button className="text-zinc-400 hover:text-white">
                  <DislikeIcon className="w-4 h-4" />
                </button>
                <button className="text-xs text-zinc-400 hover:text-white font-semibold">Reply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
