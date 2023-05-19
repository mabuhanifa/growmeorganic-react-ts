import { Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { Toaster, toast, } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "../contextAPI/hooks";
import { btn, input } from "../styles/style";
import { InputEvent } from "../types/types";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const submitter = (e: InputEvent) => {
    e.preventDefault();
    dispatch({
      type: "ADD_USER",
      payload: { name, phone, email }
    });

    localStorage.setItem("loggedUser", JSON.stringify({ name, phone, email }));

    if (name && phone && email) {
      toast.success("User Added Successfully", { duration: 1500 });
      setTimeout(() => {
        toast("You will be redirected to page 2", { icon: '↗️', });
      }, 1000);
      setTimeout(() => {
        navigate("/page2");
      }, 2000);
    }
    else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <div className="form-container">

      <div>
        <Toaster />
      </div>

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
