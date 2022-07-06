import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const state = {
        notes: [
        { "_id": { "$oid": "62c57df393cf9a2008cb9081" }, "user": { "$oid": "62c0a90b7a0096ef356dbd43" }, "title": "Passwords", "description": "All my passwords will be saved here", "tag": "Personal", "date": { "$date": { "$numberLong": "1657110003108" } }, "__v": 0 },
        { "_id": { "$oid": "62c57e1893cf9a2008cb9083" }, "user": { "$oid": "62c0a90b7a0096ef356dbd43" }, "title": "Shopping Items", "description": "I need to go to shopping grocery by evening", "tag": "Personal", "date": { "$date": { "$numberLong": "1657110040701" } }, "__v": 0 }]
    };
    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState