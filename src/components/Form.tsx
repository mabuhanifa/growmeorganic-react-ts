import { Button, Input, InputLabel } from "@mui/material";
import { useState } from "react";
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
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input id="name" name="name" onChange={(e) => setName(e.target.value)} />

        <Button type="submit" variant="contained">Submit</Button>
      </form>
    </div>
  );
}
