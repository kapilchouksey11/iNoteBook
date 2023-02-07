import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  // Get all Notes
  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1MjE0YjViZjg2Y2M4MjRiYTdkYzcxIn0sImlhdCI6MTY3MTMzMzg2Mn0.8WnbPi7ldFQvxjk0Aekl9lUVbUofOSmYwbLKN_GHY4o",
      },
    });
    const json = await response.json()
    console.log(json)
    setNotes(json) 
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    //TODO: API Calls
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1MjE0YjViZjg2Y2M4MjRiYTdkYzcxIn0sImlhdCI6MTY3MTMzMzg2Mn0.8WnbPi7ldFQvxjk0Aekl9lUVbUofOSmYwbLKN_GHY4o",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log(json);

    console.log("Adding a new note!");
    const note = {
      _id: "639ed59e2a693f82aa54bac50",
      user: "635214b5bf86cc824ba7dc71",
      title: title,
      description: description,
      tag: tag,
      __v: 0,
    };
    setNotes(notes.concat(note)); //Return a new Array.
  };

  // Delete a Note
  const deleteNote = async (id) => {
    //API Calls
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1MjE0YjViZjg2Y2M4MjRiYTdkYzcxIn0sImlhdCI6MTY3MTMzMzg2Mn0.8WnbPi7ldFQvxjk0Aekl9lUVbUofOSmYwbLKN_GHY4o",
      },
      
    });
    const json = response.json();
    console.log(json);

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // TODO: API Calls
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1MjE0YjViZjg2Y2M4MjRiYTdkYzcxIn0sImlhdCI6MTY3MTMzMzg2Mn0.8WnbPi7ldFQvxjk0Aekl9lUVbUofOSmYwbLKN_GHY4o",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes))

    //Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
