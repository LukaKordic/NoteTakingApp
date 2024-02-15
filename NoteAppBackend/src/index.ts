import express from 'express'
import { LocalNoteStorage } from "./notes/LocalNoteStorage"
import { Note } from "./notes/model/Note"

const app = express()
const PORT = 8080

const noteStorage = new LocalNoteStorage() // Inject this as an abstract type

noteStorage.saveNote(new Note(
    "id", "title", "content", 3271898, 8437289
))

app.listen(PORT, () => {
    console.log("App listening on port ${PORT}")
})

app.post("/api/notes", (req, res) => {
    const note = req.body()
})

app.get('/notes', (req, res) => {
    res.json(noteStorage.getNotes())
})

app.delete("/api/notes/:noteId", (req, res) => {
    const param = req.params
    param.noteId
})
