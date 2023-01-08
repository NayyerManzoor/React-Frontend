import React from 'react';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import { Link } from 'react-router-dom';
export default function SignUP() {
  const paperStyle = {
    // height: '100vh',
    width: 350,
    padding: 20,
    margin: '20px auto',
  };
  const avatarStyle = {
    backgroundColor: 'green',
  };
  const commonStyle = {
    marginTop: 15,
    marginBottom: 15,
  };
  return (
    <>
      <Grid>
        <Paper elevation={7} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockPersonOutlinedIcon />
            </Avatar>
            <h2>SignUp</h2>
          </Grid>
          <TextField
            variant="standard"
            label="username"
            placeholder="Enter your UserName"
            fullWidth
            required
          ></TextField>
          <TextField
            variant="standard"
            label="password"
            placeholder="Enter your Password"
            type="password"
            fullWidth
            required
            style={commonStyle}
          ></TextField>
          <TextField
            variant="standard"
            label="confirm password"
            placeholder="Enter your Password Again"
            type="password"
            fullWidth
            required
            style={commonStyle}
          ></TextField>
          <TextField
            variant="standard"
            label="First Name"
            placeholder="Enter your First Name"
            fullWidth
            required
            style={commonStyle}
          ></TextField>
          <TextField
            variant="standard"
            label="Last Name"
            placeholder="Enter your Last Name"
            fullWidth
            required
            style={commonStyle}
          ></TextField>
          <TextField
            variant="standard"
            label="Data of Birth"
            placeholder="Enter your Data of Birth"
            type="test"
            fullWidth
            required
            style={commonStyle}
          ></TextField>
          <TextField
            variant="standard"
            label="Age"
            placeholder="Enter your Age"
            type="number"
            fullWidth
            required
            style={commonStyle}
          ></TextField>
          <TextField
            variant="standard"
            label="Phone Number"
            placeholder="Enter your Phone Number"
            type="text"
            fullWidth
            required
            style={commonStyle}
          ></TextField>
          {/* <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember Me"
          /> */}
          <Button variant="contained" fullWidth style={commonStyle}>
            SignUP
          </Button>
          {/* <Typography>
            <Link href="#">Forget Password</Link>
          </Typography> */}
          <Typography style={commonStyle}>
            Already have an account?<Link to="/">Login</Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}
