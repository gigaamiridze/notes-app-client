import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { NoNoteImg } from '../assets';
import { INote } from '../interfaces';
import { opacity } from '../animations';
import { ApiRoutes } from '../constants';
import { NoteItem, Loader, AddButton } from '../layouts';
import { NotesHeader, NotesTitle, NotesCount, NotesList, NoNotes } from '../components';

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
      setIsLoading(false);
    }
  }

  return (
    <motion.div
      variants={opacity}
      initial='initial'
      animate='animate'
    >
      <NotesHeader>
        <NotesTitle>&#9782; Notes</NotesTitle>
        <NotesCount>{notes.length}</NotesCount>
      </NotesHeader>
      {isLoading ? (
        <Loader />
      ) : notes.length === 0 && !isLoading ? (
        <NoNotes src={NoNoteImg} alt='No Note' />
      ) : (
        <NotesList>
          {notes.map((note, index) => (
            <NoteItem
              key={index}
              note={note}
            />
          ))}
        </NotesList>
      )}
      <AddButton />
    </motion.div>
  )
}

export default Notes;
