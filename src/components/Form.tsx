import { Button, FormControl, TextField } from "@mui/material";
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
    <div className="form-container">
      <form onSubmit={submitter}>
        <FormControl sx={{ minWidth: "400px" }}>
          <TextField
            size="small"
            required
            label="Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            sx={input}
            fullWidth
          />
          <TextField
            size="small"
            required
            label="Phone"
            variant="outlined"
            onChange={(e) => setPhone(e.target.value)}
            sx={input}
            fullWidth
          />
          <TextField
            size="small"
            required
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            sx={input}
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={btn}
            fullWidth
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
