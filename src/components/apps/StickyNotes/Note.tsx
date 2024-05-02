// type NoteProp = NotesProps & handleDragStart : () => void

const Note = ({ body, id, handleDragStart, position }) => {
  return (
    <div
      id={id}
      draggable
      onDragStart={(e) => handleDragStart(e)}
      style={{ top: `${position?.posX}px`, left: `${position?.posY}px` }}
      className="justify-cente r absolute flex h-32 w-60 cursor-grab select-none  items-center rounded-md bg-gray-200 p-3 text-sm shadow-md active:bg-gray-400"
    >
      {body}
    </div>
  );
};

export default Note;
