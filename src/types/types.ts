export type InputEvent = React.FormEvent<HTMLFormElement>;

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type Children = {
  children: React.ReactNode;
};

export interface User {
  name: string;
  phone: string;
  email: string;
}

export interface StateType {
  user: User;
  posts: Posts[];
}

export type Action =
  | { type: "ADD_USER"; payload: User }
  | { type: "ADD_POSTS"; payload: Posts[] };

export type MainState = {
  state: StateType;
  dispatch: React.Dispatch<Action>;
};
