import { useCallback, useEffect, useState } from "react";

import { BackToHome, Note } from "../../utils/helper";
import { stickyNotes } from "./data";

export type NotesProps = {
  id: string;
  body: string;
  position?: {
    posX: number;
    posY: number;
  };
};

const StickyNotes = () => {
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState<NotesProps[]>(stickyNotes);

  const handleNewNote = () => {
    if (newNote) {
      const randomID = Math.ceil(Math.random() * 100);
      setNotes((prev) => [
        ...prev,
        {
          id: randomID.toString(),
          body: newNote,
          position: generateInitialPosition(),
        },
      ]);
    }

    setNewNote("");
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  };

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const copyNotes = [...notes];

    const data = e.dataTransfer.getData("text/plain");

    const draggedNote = copyNotes.find((note) => note.id === data);
    draggedNote!.position = { posX: e.clientX, posY: e.clientY };

    console.log(draggedNote?.position);

    setNotes(copyNotes);
  };

  const maxX = window.innerWidth - 240;
  const maxY = window.innerHeight - 128;

  const generateInitialPosition = useCallback(() => {
    const posX = Math.floor(Math.random() * maxX);
    const posY = Math.floor(Math.random() * maxY);
    return { posX, posY };
  }, [maxX, maxY]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const updatedNotes = notes?.map((note) => {
      const savedNote = savedNotes.find((n: NotesProps) => n.id === note.id);

      if (savedNote) {
        return { ...note, position: savedNote.position };
      } else {
        const position = generateInitialPosition();
        return { ...note, position };
      }
    });

    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }, [generateInitialPosition, notes.length]);

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Sticky Notes" className="relative p-0">
        <div className="fixed left-4 top-20  rounded-md bg-gray-300 p-6">
          <h2 className="main-heading">Sticky Notes</h2>
          <div className="flex items-center justify-center">
            <input
              type="text"
              id="inputBody"
              value={newNote}
              name="inputBody"
              placeholder="Enter content..."
              className="input-primary mr-2 w-1/3"
              onChange={(e) => setNewNote(e.target.value)}
            />
            <button className="btn-link" onClick={handleNewNote}>
              Add Note
            </button>
          </div>
        </div>
        <div
          onDrop={handleOnDrop}
          onDragOver={(e) => e.preventDefault()}
          className="h-screen w-full border-t border-slate-200 bg-amber-100 active:bg-amber-200"
        >
          {notes && notes.length
            ? notes?.map((note) => (
                <Note
                  id={note.id}
                  key={note.id}
                  body={note.body}
                  position={note.position}
                  handleDragStart={(e: React.DragEvent<HTMLDivElement>) =>
                    handleDragStart(e)
                  }
                />
              ))
            : null}
        </div>
      </section>
    </>
  );
};

export default StickyNotes;
