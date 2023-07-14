import { useState, useEffect } from 'react';
import axios from 'axios';
import { INote } from '../interfaces';
import { NoteItem } from '../layouts';
import { ApiRoutes } from '../constants';

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
    <>
      {notes.map((note, index) => (
        <NoteItem 
          key={index}
          note={note} 
        />
      ))}
    </>
  )
}

export default Notes;
