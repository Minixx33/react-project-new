import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Note from './NoteProps';
import { Container, Button, Card } from "react-bootstrap";
import TextField from "@mui/material/TextField";

const NotesApp : React.FC = () => {
    
    type Notes = {title: string, content: string, id: string}
    const [notes, setNotes] = useState<Notes[]>([]);
    const [newNote, setNewNote] = useState<{ title: string; content: string }>({title: "", content: ""});
    

    const AddNote = () => {
        if (newNote.title && newNote.content) {
            const newId = Date.now().toString();
            setNotes([...notes, { ...newNote, id: newId }]);
            setNewNote({ title: "", content: "" });
        }
    };

    const deleteNote = (id: string) => {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
    }

    const editNote = (id: string, newContent: string) => {
        const updatedNotes = notes.map((note) =>
            note.id === id ? {...note, text: newContent} : note
        );
        setNotes(updatedNotes);
    }

    return (
        <Container>
            <h1 className="text-center py-3">Notes App</h1>
            <div className="mb-3 bg-white rounded-3">
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    value={newNote.title}
                    onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                />
            </div>
            <div className="mb-3 bg-white rounded-3">
                <TextField
                    label="Content"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={newNote.content}
                    onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                />
            </div>
            <div className="d-flex justify-content-end mb-3">
                <Button variant="primary" onClick={AddNote}>
                    Add Note
                </Button>
            </div>
            <h2 className="py-3">Notes List:</h2>
            <div className="mt-4">
                {notes.map(note => (
                    <Note key={note.id} note={note} onDelete={deleteNote} onEdit={editNote} />
                ))}
            </div>
        </Container>
    );
}

export default NotesApp;