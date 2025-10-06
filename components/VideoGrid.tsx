import React from 'react';
import type { Video } from '../types';
import VideoCard from './VideoCard';

interface VideoGridProps {
  videos: Video[];
  onSelectVideo: (video: Video) => void;
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, onSelectVideo }) => {
  if (videos.length === 0) {
    return (
      <div className="pt-16 flex flex-col items-center justify-center h-[calc(100vh-56px)] text-center px-4">
        <h2 className="text-2xl font-bold text-white">No results found</h2>
        <p className="text-zinc-400 mt-2">Try different keywords or remove search filters.</p>
      </div>
    );
  }

  return (
    <div className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8">
            {videos.map(video => (
                <VideoCard key={video.id} video={video} onSelectVideo={onSelectVideo} />
            ))}
        </div>
    </div>
  );
};

export default VideoGrid;