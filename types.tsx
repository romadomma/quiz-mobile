export type User = {
  id: number;
  email: string;
  nickname: string;
  createdAt: string;
  accessToken: string;
};

export type Quiz = {
  id: number;
  ownerId: number;
  title: string;
  createdAt: string;
  updatedAt: string;
};

export type Answer = {
  id: number;
  text: string;
};

export type Question = {
  text: string;
  answers: Answer[];
  number: number;
};
