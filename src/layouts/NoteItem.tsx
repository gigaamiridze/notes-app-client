import { Link } from 'react-router-dom';
import { PageRoutes } from '../constants';
import { INoteItemProps } from '../interfaces';
import { NotesListItem } from '../components';

function NoteItem({ note }: INoteItemProps) {
  const { id, body, updated, created } = note;

  return (
    <Link to={`${PageRoutes.NOTE}/${id}`}>
      <NotesListItem>
        <h3>Reminders</h3>
        <p>
          <span>9/1/2023</span>
          {body}
        </p>
      </NotesListItem>
    </Link>
  )
}

export default NoteItem;
