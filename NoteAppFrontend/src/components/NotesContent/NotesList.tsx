import { Note } from "../../models/export interface Note {";
import { NoteComponent } from "../Note/NoteComponent";
import "./NotesList.css";

interface Props {
  notes: Note[];
}

function NotesList({ notes }: Props) {
  if (!notes.length) {
    return <p>You don't have any notes at the moment</p>;
  }

  return notes.map((note) => (
    <div key={note.id} className={"noteContainer"}>
      <NoteComponent title={note.title} content={note.content} />
    </div>
  ));
}

export default NotesList;
