import { INoteItemProps } from '../interfaces';

function NoteItem({ note }: INoteItemProps) {
  const { body, updated, created } = note;

  return (
    <div>{body}</div>
  )
}

export default NoteItem;
