import express from "express";
import { LocalNoteStorage } from "./notes/LocalNoteStorage";
import { Note } from "./notes/model/Note";
import HttpError from "./errors/HttpError";

const app = express();
app.use(express.json());
const PORT = 8080;

const noteStorage = new LocalNoteStorage(); // Inject this as an abstract type

app.listen(PORT, () => {
  console.log("App listening on port ${PORT}");
});

app.get("/api/notes", (req, res) => {
  res.json(noteStorage.getNotes());
});

app.post("/api/notes", (req, res) => {
  try {
    const body = req.body;
    const newNote = new Note(body.id, body.title, body.content);
    noteStorage.saveNote(newNote);
    res.json(newNote);
  } catch (error) {
    if (error instanceof HttpError) {
      res.status(error.statusCode).send(error.message);
    } else {
      res.sendStatus(400);
    }
  }
});

app.put("/api/notes/:noteId", (req, res) => {
  try {
    const noteId = req.params.noteId;
    const body: Note = req.body;
    const updatedNote = noteStorage.updateNote(
      noteId,
      body.title,
      body.content
    );
    res.json(updatedNote);
  } catch (error) {
    if (error instanceof HttpError) {
      res.status(error.statusCode).send(error.message);
    } else {
      res.sendStatus(400);
    }
  }
});

app.delete("/api/notes/:noteId", (req, res) => {
  try {
    const noteId = req.params.noteId;
    noteStorage.deleteNote(noteId);
    res.json({ noteId: noteId });
  } catch (error) {
    if (error instanceof HttpError) {
      res.status(error.statusCode).send(error.message);
    } else {
      res.sendStatus(400);
    }
  }
});
