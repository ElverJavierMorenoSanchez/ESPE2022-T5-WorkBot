import React from "react";

function ComponenInput(props) {
  return (
    <div>
      <label className="name">
        {props.text}
        <input
          type="text"
          onChange={(e) => {
            props.setValue(e.target.value);
          }}
        />
      </label>
    </div>
  );
}

export default ComponenInput;
