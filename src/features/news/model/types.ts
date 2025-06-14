export interface INews {
  id: string;
  title: string;
  content: string;
  createdAt: number;
}

export interface NewsState {
  news: INews[];
}
