import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import axios from 'axios';
import { INote } from '../interfaces';
import { ApiRoutes, PageRoutes } from '../constants';
import { NoteContainer, NoteHeader, ActionButton } from '../components';

function Note() {
  const { id } = useParams();
  const [note, setNote] = useState<INote | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getNote();
  }, [id]);

  const getNote = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${ApiRoutes.NOTES}/${id}`);
      setNote(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(true);
    }
  }

  return (
    <NoteContainer>
      <NoteHeader>
        <Link to={PageRoutes.ROOT}>
          <MdKeyboardArrowLeft />
        </Link>
        <ActionButton>Done</ActionButton>
      </NoteHeader>
      {note?.body}
    </NoteContainer>
  )
}

export default Note;
