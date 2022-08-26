import React from "react";
import { Canvas, useEditor } from "@layerhub-io/react";

function App() {
  const editor = useEditor();
  const addText = React.useCallback(() => {
    if (editor) {
      editor.objects.add({
        type: "StaticText",
        text: "Hello Layerhub",
        textAlign:"center"
      });
    }
  }, [editor]);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={addText}>ADD TEXT</button>
      </div>
      <div style={{ flex: 1, display:"flex" }}>
        <Canvas />
      </div>
    </div>
  );
}

export default App;
