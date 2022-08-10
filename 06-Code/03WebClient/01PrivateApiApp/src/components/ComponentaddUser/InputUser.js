import React from "react";

function ComponenInput(props) {
    return (
        <div>
            <label className='name'>{props.text}
                <input type='text' />
            </label>
        </div>
    );
}

export default ComponenInput;