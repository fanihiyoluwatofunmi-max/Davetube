
import React from 'react';
import type { Video } from '../types';

interface VideoCardProps {
  video: Video;
  onSelectVideo: (video: Video) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onSelectVideo }) => {
  return (
    <div className="cursor-pointer group" onClick={() => onSelectVideo(video)}>
      <div className="relative">
        <img src={video.thumbnailUrl} alt={video.title} className="w-full rounded-xl group-hover:rounded-none transition-all duration-200" />
        <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded">
          {video.duration}
        </span>
      </div>
      <div className="flex items-start mt-3">
        <img src={video.channelAvatarUrl} alt={video.channelName} className="w-9 h-9 rounded-full mr-3" />
        <div className="flex-1">
          <h3 className="text-white text-base font-medium leading-snug break-words">
            {video.title}
          </h3>
          <p className="text-zinc-400 text-sm mt-1">{video.channelName}</p>
          <p className="text-zinc-400 text-sm">
            {video.views} &bull; {video.timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
