export type Anime = {
  id: number;
  title: string;
  genre: string;
  episodes: number;
  rating: number;
  status: string;
  description: string;
};

export type AnimeFormData = {
  title: string;
  genre: string;
  episodes: string;
  rating: string;
  status: string;
  description: string;
};
