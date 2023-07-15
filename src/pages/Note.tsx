import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import axios from 'axios';
import { INote } from '../interfaces';
import { requestHeaders } from '../config';
import { ApiRoutes, PageRoutes } from '../constants';
import { NoteContainer, NoteHeader, ActionButton, Textarea } from '../components';

function Note() {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const updateNote = async () => {
    axios.put(`${ApiRoutes.NOTES}/${id}/update`, {
      ...requestHeaders,
      body: note,
    });
  }

  const handleDelete = async () => {
    axios.delete(`${ApiRoutes.NOTES}/${id}/delete`, { ...requestHeaders });
    navigate(PageRoutes.ROOT);
  }

  const handleSubmit = () => {
    updateNote();
    navigate(PageRoutes.ROOT);
  }

  return (
    <NoteContainer>
      <NoteHeader>
        <MdKeyboardArrowLeft onClick={handleSubmit} />
        <ActionButton onClick={handleDelete}>Delete</ActionButton>
      </NoteHeader>
      <Textarea 
        placeholder='Edit note'
        value={note?.body}
        onChange={(e) => setNote({ ...note, 'body': e.target.value })}
      />
    </NoteContainer>
  )
}

export default Note;
