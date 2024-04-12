"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LocalNoteStorage_1 = require("./notes/LocalNoteStorage");
const Note_1 = require("./notes/model/Note");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8080;
const noteStorage = new LocalNoteStorage_1.LocalNoteStorage(); // Inject this as an abstract type
app.listen(PORT, () => {
    console.log("App listening on port ${PORT}");
});
app.get("/api/notes", (req, res) => {
    res.json(noteStorage.getNotes());
});
app.post("/api/notes", (req, res) => {
    try {
        const body = req.body;
        const newNote = new Note_1.Note(body.id, body.title, body.content);
        noteStorage.saveNote(newNote);
        res.json(newNote);
    }
    catch (e) {
        if (e instanceof HttpError) {
            res.status(e.statusCode).send(e.message);
        }
        else {
            res.sendStatus(400);
        }
    }
});
app.delete("/api/notes/:noteId", (req, res) => {
    const param = req.params;
    param.noteId;
});
