import { useState, useEffect } from 'react';
import axios from 'axios';
import { INote } from '../interfaces';
import { NoteItem } from '../layouts';
import { ApiRoutes } from '../constants';
import { NotesHeader, NotesTitle, NotesCount, NotesList } from '../components';

function Notes() {
  const [notes, setNotes] = useState<INote[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(ApiRoutes.NOTES);
      setNotes(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(true);
    }
  }

  return (
    <div>
      <NotesHeader>
        <NotesTitle>&#9782; Notes</NotesTitle>
        <NotesCount>{notes.length}</NotesCount>
      </NotesHeader>
      <NotesList>
        {notes.map((note, index) => (
          <NoteItem 
            key={index}
            note={note} 
          />
        ))}
      </NotesList>
    </div>
  )
}

export default Notes;
