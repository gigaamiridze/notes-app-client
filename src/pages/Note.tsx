import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import axios from 'axios';
import { INote } from '../interfaces';
import { opacity } from '../animations';
import { requestHeaders } from '../config';
import { ApiRoutes, PageRoutes } from '../constants';
import { NoteContainer, NoteHeader, ActionButton, Textarea } from '../components';

function Note() {
  const { id: noteId } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState<INote | null>(null);
  const isNoteIdNew = noteId === 'new';

  useEffect(() => {
    getNote();
  }, [noteId]);

  const getNote = async () => {
    if (isNoteIdNew) return;

    const { data } = await axios.get(`${ApiRoutes.NOTES}/${noteId}`);
    setNote(data);
  }

  const createNote = async () => {
    axios.post(ApiRoutes.NOTES, {
      ...requestHeaders,
      body: note,
    })
  }

  const updateNote = async () => {
    axios.put(`${ApiRoutes.NOTES}/${noteId}`, {
      ...requestHeaders,
      body: note,
    });
  }

  const deleteNote = async () => {
    axios.delete(`${ApiRoutes.NOTES}/${noteId}`, { ...requestHeaders });
    navigate(PageRoutes.ROOT);
  }

  const handleSubmit = () => {
    if (!isNoteIdNew && note?.body === '') {
      deleteNote();
    } else if (!isNoteIdNew) {
      updateNote();
    } else if (isNoteIdNew && note?.body !== undefined) {
      createNote();
    }
    
    navigate(PageRoutes.ROOT);
  }

  const handleChange = (value: string) => {
    setNote({ ...note, 'body': value }) 
  }

  return (
    <NoteContainer
      variants={opacity}
      initial='initial'
      animate='animate'
    >
      <NoteHeader>
        <MdKeyboardArrowLeft onClick={handleSubmit} />
        {isNoteIdNew ? (
          <ActionButton onClick={handleSubmit}>Done</ActionButton>
        ) : (
          <ActionButton onClick={deleteNote}>Delete</ActionButton>
        )}
      </NoteHeader>
      <Textarea 
        placeholder={isNoteIdNew ? 'Note body' : 'Edit note'}
        value={note?.body}
        onChange={(e) => handleChange(e.target.value)}
      />
    </NoteContainer>
  )
}

export default Note;
