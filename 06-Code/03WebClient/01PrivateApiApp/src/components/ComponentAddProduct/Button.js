import React from "react";

function Button(props) {
  return (
    <div className="form-group">
      <div className="col-md-8">
        <button id="save" type="submit" name="save" className="btn btn-save">
          GUARDAR
        </button>
      </div>
    </div>
  );
}

export default Button;
