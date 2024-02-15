"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LocalNoteStorage_1 = require("./notes/LocalNoteStorage");
const Note_1 = require("./notes/model/Note");
const app = (0, express_1.default)();
const PORT = 8080;
const noteStorage = new LocalNoteStorage_1.LocalNoteStorage();
noteStorage.saveNote(new Note_1.Note("id", "title", "content", 3271898, 8437289));
app.listen(PORT, () => {
    console.log("App listening on port ${PORT}");
});
app.post("/api/notes", (req, res) => {
    const note = req.body();
});
app.get('/notes', (req, res) => {
    res.json(noteStorage.getNotes());
});
app.delete("/api/notes/:noteId");
