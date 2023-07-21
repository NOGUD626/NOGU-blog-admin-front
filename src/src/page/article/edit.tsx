import {useState} from "react";
import SimpleMDE from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";
import {marked} from 'marked';

const App = () => {
    const [markdown, setMarkdown] = useState('');

    return (
        <div>
            <SimpleMDE onChange={(e) => setMarkdown(e)}/>
            <div id="body">
                <span dangerouslySetInnerHTML={{__html: marked(markdown, {mangle: false})}}/>
            </div>
        </div>
    );
}

export default App;
