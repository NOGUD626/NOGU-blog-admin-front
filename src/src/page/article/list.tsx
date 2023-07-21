import { useState } from "react";
import SimpleMDE from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";

const App = () => {
    const [markdown, setMarkdown] = useState('');

    return (
        <SimpleMDE onChange={(e) => setMarkdown(e)}/>
    );
}

export default App;
