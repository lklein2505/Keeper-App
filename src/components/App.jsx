import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

function App() {
    return (
        <div>
            <Header />
            {notes.map(noteBlock => (
                <Note 
                    key={noteBlock.key}
                    title={noteBlock.title}
                    content={noteBlock.content}
                />
            ))}
            <Footer />
        </div>
    )
}

export default App;