import { useState, useEffect } from 'react';
import axios from 'axios';
import { INote } from '../interfaces';
import { ApiRoutes } from '../constants';

function Notes() {
  const [notes, setNotes] = useState<INote | null>(null);
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
    <div>Notes</div>
  )
}

export default Notes;
