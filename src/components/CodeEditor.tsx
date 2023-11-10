import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

function CodeEditor({readonly=true, code}: {readonly : boolean, code:string}) {
    return (
        <AceEditor
            height={"500px"}
            width={"100%"}
            value={code}
            mode="javascript"
            theme="monokai"
            fontSize="16px"
            highlightActiveLine={true}
            readOnly={readonly}
            setOptions={{
                enableLiveAutocompletion: true,
                showLineNumbers: true,
                tabSize: 2
            }}
        />
    );
}
export default CodeEditor;