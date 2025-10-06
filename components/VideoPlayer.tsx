
import React from 'react';
import type { Video } from '../types';
import CommentSection from './CommentSection';
import { LikeIcon, DislikeIcon, ShareIcon, KebabMenuIcon } from './Icons';

interface CompactVideoCardProps {
    video: Video;
    onSelectVideo: (video: Video) => void;
}

const CompactVideoCard: React.FC<CompactVideoCardProps> = ({ video, onSelectVideo }) => (
    <div className="flex items-start space-x-2 cursor-pointer group mb-3" onClick={() => onSelectVideo(video)}>
        <div className="w-2/5 relative">
            <img src={video.thumbnailUrl} alt={video.title} className="w-full rounded-lg group-hover:rounded-none transition-all duration-200" />
             <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded">
              {video.duration}
            </span>
        </div>
        <div className="w-3/5">
            <h4 className="text-white text-sm font-medium leading-tight line-clamp-2">
                {video.title}
            </h4>
            <p className="text-zinc-400 text-xs mt-1">{video.channelName}</p>
            <p className="text-zinc-400 text-xs">
                {video.views} &bull; {video.timestamp}
            </p>
        </div>
    </div>
);


interface VideoPlayerProps {
  video: Video;
  allVideos: Video[];
  onBack: () => void;
  onSelectVideo: (video: Video) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, allVideos, onSelectVideo }) => {
    const recommendedVideos = allVideos.filter(v => v.id !== video.id);

    return (
        <div className="pt-16 p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-6">
            <div className="lg:w-2/3 w-full">
                {/* Video Player */}
                <div className="aspect-video bg-black rounded-xl mb-4 overflow-hidden">
                    <video 
                        key={video.id}
                        className="w-full h-full"
                        controls
                        autoPlay
                        src={video.videoUrl}
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Video Info */}
                <h1 className="text-xl font-bold text-white mb-2">{video.title}</h1>
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                        <img src={video.channelAvatarUrl} alt={video.channelName} className="w-10 h-10 rounded-full" />
                        <div>
                            <p className="text-white font-semibold">{video.channelName}</p>
                            <p className="text-zinc-400 text-sm">{video.subscribers} subscribers</p>
                        </div>
                        <button className="bg-white text-black px-4 py-2 rounded-full font-semibold text-sm hover:bg-zinc-200">
                            Subscribe
                        </button>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center bg-zinc-800 rounded-full">
                             <button className="flex items-center px-4 py-2 hover:bg-zinc-700 rounded-l-full">
                                <LikeIcon className="w-5 h-5 mr-2" />
                                <span>123K</span>
                            </button>
                            <div className="w-px h-6 bg-zinc-600"></div>
                            <button className="px-4 py-2 hover:bg-zinc-700 rounded-r-full">
                                <DislikeIcon className="w-5 h-5" />
                            </button>
                        </div>
                        <button className="flex items-center bg-zinc-800 rounded-full px-4 py-2 hover:bg-zinc-700">
                            <ShareIcon className="w-5 h-5 mr-2" />
                            <span>Share</span>
                        </button>
                        <button className="bg-zinc-800 rounded-full p-2.5 hover:bg-zinc-700">
                            <KebabMenuIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Description */}
                <div className="bg-zinc-800 rounded-xl p-3 mt-4 text-sm text-zinc-300">
                    <p className="font-semibold">{video.views} &bull; {video.timestamp}</p>
                    <p className="mt-2 whitespace-pre-wrap">{video.description}</p>
                </div>
                
                {/* Comments */}
                <CommentSection comments={video.comments} />
            </div>
            <div className="lg:w-1/3 w-full">
                <h3 className="text-lg font-bold mb-4">Up next</h3>
                {recommendedVideos.map(recVideo => (
                    <CompactVideoCard key={recVideo.id} video={recVideo} onSelectVideo={onSelectVideo} />
                ))}
            </div>
        </div>
    );
};

export default VideoPlayer;