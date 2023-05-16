export type InputEvent = React.FormEvent<HTMLFormElement>;

export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
