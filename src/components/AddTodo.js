import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/todos";
import { isEmpty } from "lodash";
const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [isError, setError] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty(title)) {
      setError(true);
    } else {
      setError(false);
      if (title.trim()) {
        dispatch(
          addTodo({
            title,
            completed: false,
          })
        );
        setTitle("");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-error"
          label={isError ? "Please add some task" : "Add Task"}
          error={isError}
          className="inputText"
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button variant="contained" className="submitButton" type="submit">
          Add
        </Button>
      </form>
    </>
  );
};

export default AddTodo;

{
  /* <button className="submitButton" type="submit">
Add
</button> */
}

{
  /* <input
                    type="text"
                    value={title}
                    className="inputText"
                    onChange={(e) => setTitle(e.target.value)}
                /> */
}
