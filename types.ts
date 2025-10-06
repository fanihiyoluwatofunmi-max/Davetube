
export interface Comment {
  id: string;
  author: string;
  avatarUrl: string;
  text: string;
  likes: number;
  timestamp: string;
}

export interface Video {
  id: string;
  thumbnailUrl: string;
  title: string;
  channelName: string;
  channelAvatarUrl: string;
  views: string;
  timestamp: string;
  duration: string;
  description: string;
  subscribers: string;
  comments: Comment[];
  videoUrl: string;
  category?: string;
}
