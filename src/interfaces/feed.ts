export default interface FeedData {
  clubName: string;
  content: string;
  feedId: number;
  flag: boolean;
  flags: number;
  follow: boolean;
  media: string[];
  owner: boolean;
  pin: boolean;
  profileImage: string;
  uploadAt: Date;
}

interface StateFeed {
  loading: boolean;
  data: FeedData[] | null;
  error: boolean;
}

export interface FeedType {
  FeedList: StateFeed;
}
