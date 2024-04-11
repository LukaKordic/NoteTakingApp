import { useState } from "react";
import "./NoteComponent.css";

interface NoteProps {
  title: string;
  content: string;
}

export function NoteComponent({ title, content }: NoteProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <p className={"noteTitle"} onClick={() => setExpanded(!expanded)}>
        {title}
      </p>
      {expanded && <p className={"noteContent"}>{content}</p>}
    </>
  );
}
