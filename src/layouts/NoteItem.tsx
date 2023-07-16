import { Link } from 'react-router-dom';
import { PageRoutes } from '../constants';
import { INoteItemProps } from '../interfaces';
import { NotesListItem } from '../components';

function NoteItem({ note }: INoteItemProps) {
  const { id, body, updated } = note;

  const getTitle = (body: string) => {
    const title = body.split('\n')[0];
    if (title.length > 45) {
      return title.slice(0, 45);
    }

    return title;
  }

  const getTime = (updated: string | undefined) => {
    if (updated) {
      return new Date(updated).toLocaleDateString();
    }
  }

  const getContent = (body: string) => {
    const title = getTitle(body);
    let content = body.replace('\n', ' ');
    content = content.replace(title, '');

    if (content.length > 45) {
      return content.slice(0, 45) + '...';
    } else {
      return content;
    }
  }

  return (
    <Link to={`${PageRoutes.NOTE}/${id}`}>
      <NotesListItem>
        <h3>{getTitle(body)}</h3>
        <p>
          <span>{getTime(updated)}</span>
          {getContent(body)}
        </p>
      </NotesListItem>
    </Link>
  )
}

export default NoteItem;
