'use client'
import { JSONContent } from "novel";
import Editor from "./editor/advanced-editor";
import { useState } from "react";
import { defaultValue } from "@/lib/default-value";


export default function TextEditor() {
    const [value, setValue] = useState<JSONContent>(defaultValue);
    console.log(value);
    return (
        <Editor initialValue={value} onChange={setValue} />

    );
}

