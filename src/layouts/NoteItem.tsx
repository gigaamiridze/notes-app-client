import { Link } from 'react-router-dom';
import { PageRoutes } from '../constants';
import { INoteItemProps } from '../interfaces';
import { NotesListItem } from '../components';

function NoteItem({ note }: INoteItemProps) {
  const { id, body, updated, created } = note;

  const getTitle = (body: string) => {
    const title = body.split('\n')[0];
    if (title.length > 45) {
      return title.slice(0, 45);
    }

    return title;
  }
  
  return (
    <Link to={`${PageRoutes.NOTE}/${id}`}>
      <NotesListItem>
        <h3>{getTitle(body)}</h3>
        <p>
          <span>9/1/2023</span>
          {body}
        </p>
      </NotesListItem>
    </Link>
  )
}

export default NoteItem;
