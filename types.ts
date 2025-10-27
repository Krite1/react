
export interface Post {
  id: string;
  title: string;
  author: string;
  publicationDate: string;
  category: string;
  summary: string;
  content: string;
  imageUrl: string;
  tags: string[];
}

export interface Topic {
  name: string;
  postCount: number;
}
