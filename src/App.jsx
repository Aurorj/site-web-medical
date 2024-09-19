import { useState } from "react";
import "./App.css";
import Group from "./assets/Group.png";
import MEDIMEMO from "./assets/MEDIMEMO.png";
import { TextField, Link, Typography, Button } from "@mui/material";

function App() {

  const [ eusername,seteusername] = useState("");
  const listen = (ok) => {console.log("Email or Username",ok)};
  
  // seteusername((prevstage))

  const [ passw,setpassw] = useState("");
  const send = (ok) => {console.log("password",ok)};

  return (
    <div className="background">
      <div className="logo-container">
        <img className="Group" src={Group} alt="Group" />
        <img className="MEDIMEMO" src={MEDIMEMO} alt="MEDIMEMO" />
      </div>
      <div className="panel">
        <Typography fontWeight={700} textAlign={"center"}>
          Let's sign you in!
        </Typography>
        <TextField
          id="outlined-basic"
          label="Email or Username" 
          onChange={listen} 
          variant="outlined"
          // value ={eusername}
        />
        <TextField id="outlined-basic" 
        label="Password" 
        variant="outlined" 
        onChange={send}
        />
        <Typography
          marginBottom={3}
          textAlign="right"
          fontSize={12}
        >
          <Link href="#">{"forgot password"}</Link>
        </Typography>
        <Button
          style={{ backgroundColor: "#f00" }}
          margin={10}
          fullWidth
          variant="contained"
        >
          login
        </Button>

        <Typography
          marginBottom={3}
          fullWidth={true}
          textAlign="center"
          fontSize={12}
        >
          Don't have an account?
          <Link  style={{color: "#f00" }} href="#">{"Sign Up!"}</Link>
        </Typography>
      </div>
    </div>
  );
}

export default App;
