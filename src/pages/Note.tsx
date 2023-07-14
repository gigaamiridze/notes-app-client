import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { INote } from '../interfaces';
import { ApiRoutes } from '../constants';

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
    <div>{note?.body}</div>
  )
}

export default Note;
