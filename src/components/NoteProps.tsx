import React, { useState } from "react";
import { Card, CardContent, Button, TextField, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';    
import DeleteIcon from '@mui/icons-material/Delete'; 
import SaveIcon from '@mui/icons-material/Save';    
import CancelIcon from '@mui/icons-material/Cancel';

export interface NoteProps {
    note: {
        id: string;
        title: string;
        content: string;
    };
    onDelete: (id: string) => void;
    onEdit: (id: string, newContent: string) => void;
}

// Define the Note component
const Note: React.FC<NoteProps> = ({ note, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(note.content);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSubmit = () => {
        onEdit(note.id, editedContent);
        setIsEditing(false);
    };

    return (
        <Card className="bg-secondary-subtle rounded-3">
            <CardContent>
                {isEditing ? (
                    <div>
                        <TextField
                            fullWidth
                            label="Edit Content"
                            variant="outlined"
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}
                        />
                        <Button 
                            variant="contained" 
                            color="primary" 
                            startIcon={<SaveIcon />} 
                            onClick={handleSubmit}
                        >
                            Save
                        </Button>
                        <Button 
                            variant="text" 
                            color="secondary" 
                            startIcon={<CancelIcon />} 
                            onClick={() => setIsEditing(false)}
                        >
                            Cancel
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Typography variant="h5" gutterBottom>
                            {note.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" gutterBottom>
                            {note.content}
                        </Typography>
                        <div className="d-flex justify-content-end">
                            <Button 
                                variant="contained" 
                                color="primary" 
                                startIcon={<EditIcon />} 
                                onClick={handleEdit}
                            >
                                Edit
                            </Button>
                            <Button 
                                variant="contained" 
                                color="secondary" 
                                startIcon={<DeleteIcon />} 
                                onClick={() => onDelete(note.id)}
                            >
                                Delete
                        </Button>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

// Export the Note component
export default Note;
