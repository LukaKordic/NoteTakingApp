import { FormEvent, useState } from "react";
import "./NoteInput.css";

interface Props {
  onNoteSave: (event: FormEvent, title: string, content: string) => void;
}

function NoteInput({ onNoteSave }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <form
        className={"noteInput"}
        onSubmit={(event) => {
          onNoteSave(event, title, content);
          setTitle("");
          setContent("");
        }}
      >
        <label htmlFor="input-title">Title</label>
        <input
          type="text"
          name="content"
          id="input-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="input-content">Content</label>
        <input
          type="text"
          name="content"
          id="input-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button id={"saveBtn"} disabled={!title || !content}>
          Save
        </button>
      </form>
    </>
  );
}

export default NoteInput;
