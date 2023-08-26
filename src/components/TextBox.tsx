import React from "react";
import Microphone from "./Microphone";
export default function TextBox() {
  return (
    <div className="flex justify-center rounded-md">
      <textarea
        id="myTextArea"
        rows={2}
        cols={50}
        className="border-none focus:outline-none m-2"
        placeholder="Click the microphone to speak"
      ></textarea>
      <Microphone className="h-10" />
    </div>
  );
}
