import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';
import VideoPlayer from './components/VideoPlayer';
import type { Video } from './types';
import { mockVideos } from './services/mockData';

const App: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [displayedVideos, setDisplayedVideos] = useState<Video[]>(mockVideos);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase().trim();
    if (lowercasedQuery === '') {
      setDisplayedVideos(mockVideos);
    } else {
      const filteredVideos = mockVideos.filter(video => 
        video.title.toLowerCase().includes(lowercasedQuery) ||
        video.channelName.toLowerCase().includes(lowercasedQuery) ||
        video.description.toLowerCase().includes(lowercasedQuery)
      );
      setDisplayedVideos(filteredVideos);
    }
  }, [searchQuery]);

  const handleSelectVideo = (video: Video) => {
    setSelectedVideo(video);
    window.scrollTo(0, 0);
  };

  const handleClearVideo = () => {
    setSelectedVideo(null);
  };
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedVideo(null); // Go back to grid view on new search
  };

  const handleGoHome = () => {
    setSelectedVideo(null);
    setSearchQuery('');
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-100 font-sans">
      <Header 
        toggleSidebar={toggleSidebar} 
        onSearch={handleSearch} 
        onGoHome={handleGoHome} 
      />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />
        <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-60' : 'ml-0 md:ml-20'}`}>
          {selectedVideo ? (
            <VideoPlayer 
              video={selectedVideo} 
              onBack={handleClearVideo} 
              onSelectVideo={handleSelectVideo}
              allVideos={mockVideos}
            />
          ) : (
            <VideoGrid videos={displayedVideos} onSelectVideo={handleSelectVideo} />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;