import React from "react";

function Button() {
  return (
    <div class="form-group">
      <label class="col-md-12 control-label" for="save"></label>
      <div class="col-md-8">
        <button id="save" name="save" class="btn btn-save">
          GUARDAR
        </button>
        <button id="exit" name="exit" class="btn btn-exit">
          SALIR
        </button>
      </div>
    </div>
  );
}

export default Button;
