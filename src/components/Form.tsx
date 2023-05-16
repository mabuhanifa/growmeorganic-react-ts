import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { btn, input } from "../styles/style";
import { InputEvent } from "../types/types";

export default function Form() {
  const [name, setName] = useState("")
  const submitter = (e: InputEvent) => {
    e.preventDefault();
    console.log(name);
    console.log(`object`);
  };
  console.log(name);
  return (
    <div>
      <form onSubmit={submitter}>
        <TextField
          size="small"
          required
          label="Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          sx={input}
        />
        <TextField
          size="small"
          required
          label="Phone"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          sx={input}
        />
        <TextField
          size="small"
          required
          label="Email"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          sx={input}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={btn}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
