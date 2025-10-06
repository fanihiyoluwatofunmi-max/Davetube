import type { Video, Comment } from '../types';

const videoDetails = [
  {
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
    title: 'Last To Leave Circle Wins $500,000',
    duration: '20:15',
    description: 'I gathered 100 people and challenged them to stay inside a giant red circle. The last person remaining wins half a million dollars. This was insane!',
    channelName: 'MrBeast',
    channelAvatarUrl: 'https://picsum.photos/seed/mrbeast/40/40',
    subscribers: '285M',
    category: 'Entertainment',
  },
  {
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
    title: 'I Filled My Brother\'s House With Slime!',
    duration: '15:42',
    description: 'My brother went on vacation, so I decided to surprise him by filling his entire house with slime. His reaction is priceless!',
    channelName: 'MrBeast',
    channelAvatarUrl: 'https://picsum.photos/seed/mrbeast/40/40',
    subscribers: '285M',
    category: 'Entertainment',
  },
  {
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg',
    title: '$1 vs $1,000,000 Hotel Room!',
    duration: '18:05',
    description: 'We stayed in some of the cheapest and most expensive hotel rooms in the world to see what you get for your money. The difference is shocking.',
    channelName: 'MrBeast',
    channelAvatarUrl: 'https://picsum.photos/seed/mrbeast/40/40',
    subscribers: '285M',
    category: 'Entertainment',
  },
  {
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    title: 'Big Buck Bunny',
    duration: '9:56',
    description: 'A beautifully animated short film by the Blender Institute. Follow the adventures of Big Buck Bunny as he deals with some pesky rodents.',
    channelName: 'Blender Foundation',
    channelAvatarUrl: 'https://picsum.photos/seed/blender/40/40',
    subscribers: '1.5M',
    category: 'Animation',
  },
  {
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
    title: 'Elephants Dream',
    duration: '10:53',
    description: 'The first open-source animated short film. Two characters explore a surreal, dream-like world.',
    channelName: 'Blender Foundation',
    channelAvatarUrl: 'https://picsum.photos/seed/blender/40/40',
    subscribers: '1.5M',
    category: 'Animation',
  },
   {
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
    title: 'Sintel',
    duration: '14:48',
    description: 'An epic fantasy short film about a young woman on a quest to find her pet dragon.',
    channelName: 'Blender Foundation',
    channelAvatarUrl: 'https://picsum.photos/seed/blender/40/40',
    subscribers: '1.5M',
    category: 'Fantasy',
  },
  {
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg',
    title: 'Tears of Steel',
    duration: '12:14',
    description: 'A visually stunning sci-fi short set in a future Amsterdam, featuring giant robots and thrilling action.',
    channelName: 'Blender Foundation',
    channelAvatarUrl: 'https://picsum.photos/seed/blender/40/40',
    subscribers: '1.5M',
    category: 'Sci-Fi',
  },
  {
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
    title: 'Subaru Outback: On Street and Dirt',
    duration: '2:47',
    description: 'A comprehensive review of the Subaru Outback, testing its performance on both paved roads and off-road trails.',
    channelName: 'Car Reviews',
    channelAvatarUrl: 'https://picsum.photos/seed/cars/40/40',
    subscribers: '890K',
    category: 'Cars',
  },
  {
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg',
    title: '2015 Volkswagen GTI Review',
    duration: '2:09',
    description: 'An in-depth look at the 2015 Volkswagen GTI. Is this the ultimate hot hatch?',
    channelName: 'Car Reviews',
    channelAvatarUrl: 'https://picsum.photos/seed/cars/40/40',
    subscribers: '890K',
    category: 'Cars',
  },
  {
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
    title: 'For Bigger Meltdowns',
    duration: '1:00',
    description: 'Intense emotions and dramatic moments captured on film.',
    channelName: 'Ad Agency',
    channelAvatarUrl: 'https://picsum.photos/seed/ads/40/40',
    subscribers: '120K',
    category: 'Drama',
  },
  {
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WhatCarCanYouGetForAGrand.jpg',
    title: 'What Car Can You Get For A Grand?',
    duration: '1:00',
    description: 'Exploring the world of budget cars. What hidden gems can you find for under $1000?',
    channelName: 'Budget Motors',
    channelAvatarUrl: 'https://picsum.photos/seed/budget/40/40',
    subscribers: '230K',
    category: 'Cars',
  },
  {
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
    title: 'For Bigger Blazes',
    duration: '1:00',
    description: 'A fiery and explosive cinematic clip that will keep you on the edge of your seat.',
    channelName: 'Action Flicks',
    channelAvatarUrl: 'https://picsum.photos/seed/action/40/40',
    subscribers: '2.1M',
    category: 'Action',
  },
];

const videoComments = [
    "This is the craziest video I've ever seen!",
    "The animation is absolutely stunning.",
    "Incredible storytelling.",
    "This was so cool! Subscribing right now.",
    "How was this made? It's incredible!",
    "I've watched this five times already.",
    "This deserves an award.",
    "Blender is such an amazing tool.",
    "That car sounds amazing.",
    "Great review, very informative.",
    "I wish I could drive one of these.",
    "The cinematography in this ad is top-notch.",
    "This short film is a masterpiece.",
];

const getCommentsForVideo = (videoId: string): Comment[] => {
    // Ensure variety by shuffling
    const shuffledComments = [...videoComments].sort(() => Math.random() - 0.5);

    return Array.from({ length: 20 }, (_, j) => {
        const author = ["Alex Johnson", "Beth Smith", "Charlie Brown", "Diana Prince", "Ethan Hunt", "Fiona Glenanne", "George Costanza", "Hannah Montana", "Ian Malcolm", "Jane Doe"][j % 10];
        return {
            id: `comment-${videoId}-${j}`,
            author,
            avatarUrl: `https://picsum.photos/seed/commenter${j}/40/40`,
            text: shuffledComments[j % shuffledComments.length],
            likes: Math.floor(Math.random() * 5000), // Adjusted likes to be more realistic
            timestamp: `${j + 1} days ago`,
        };
    });
}

// Generate a larger, more varied list of videos
export const mockVideos: Video[] = Array.from({ length: 40 }, (_, i) => {
  const videoData = videoDetails[i % videoDetails.length];
  
  // Make views and timestamps slightly varied
  const viewsNumber = Math.floor(Math.random() * 20000000) + 100000;
  const views = viewsNumber > 1000000 
    ? `${(viewsNumber / 1000000).toFixed(1)}M views` 
    : `${(viewsNumber / 1000).toFixed(0)}K views`;
    
  const timestamp = `${Math.floor(Math.random() * 12) + 1} months ago`;

  return {
    id: `vid${i + 1}`,
    ...videoData,
    views,
    timestamp,
    comments: getCommentsForVideo(`vid${i + 1}`),
  };
});