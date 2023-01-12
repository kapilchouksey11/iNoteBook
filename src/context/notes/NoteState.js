import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "639ed59e2a693f82aa54bac5",
          "user": "635214b5bf86cc824ba7dc71",
          "title": "My title",
          "description": "Please wakeUp early",
          "tag": "personal",
          "__v": 0
        },
        {
          "_id": "639ed59e2a693f82aa54bac5",
          "user": "635214b5bf86cc824ba7dc71",
          "title": "My title",
          "description": "Please wakeUp early",
          "tag": "personal",
          "__v": 0
        },
        {
          "_id": "639ed59e2a693f82aa54bac5",
          "user": "635214b5bf86cc824ba7dc71",
          "title": "My title",
          "description": "Please wakeUp early",
          "tag": "personal",
          "__v": 0
        },
        {
          "_id": "639ed59e2a693f82aa54bac5",
          "user": "635214b5bf86cc824ba7dc71",
          "title": "My title",
          "description": "Please wakeUp early",
          "tag": "personal",
          "__v": 0
        },
        {
          "_id": "639ed59e2a693f82aa54bac5",
          "user": "635214b5bf86cc824ba7dc71",
          "title": "My title",
          "description": "Please wakeUp early",
          "tag": "personal",
          "__v": 0
        },
        {
          "_id": "639ed59e2a693f82aa54bac5",
          "user": "635214b5bf86cc824ba7dc71",
          "title": "My title",
          "description": "Please wakeUp early",
          "tag": "personal",
          "__v": 0
        },
        {
          "_id": "639ed59e2a693f82aa54bac5",
          "user": "635214b5bf86cc824ba7dc71",
          "title": "My title",
          "description": "Please wakeUp early",
          "tag": "personal",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial);

    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;