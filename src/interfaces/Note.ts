export interface INote {
  id?: number;
  body: string;
  updated?: string;
  created?: string;
}

export interface INoteItemProps {
  note: INote;
}
