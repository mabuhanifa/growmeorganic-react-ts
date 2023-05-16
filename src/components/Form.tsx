import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { btn, input } from "../styles/style";
import { InputEvent } from "../types/types";

export default function Form() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const submitter = (e: InputEvent) => {
    e.preventDefault();
    console.log(name, phone, email);
  };
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
          onChange={(e) => setPhone(e.target.value)}
          sx={input}
        />
        <TextField
          size="small"
          required
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
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
