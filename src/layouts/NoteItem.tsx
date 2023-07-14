import { Link } from 'react-router-dom';
import { PageRoutes } from '../constants';
import { INoteItemProps } from '../interfaces';

function NoteItem({ note }: INoteItemProps) {
  const { id, body, updated, created } = note;

  return (
    <Link to={`${PageRoutes.NOTE}/${id}`}>
      {body}
    </Link>
  )
}

export default NoteItem;
