import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Avatar,
} from "@mui/material";
export const From = () => {
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [fullname, setFullname] = useState("");
  const [hno, setHno] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [address, setAddress] = useState("");
  const [adhar, setAdhar] = useState("");
  const [pan, setPan] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [idproofs, setIdproofs] = useState("");
  const [data, setData] = useState([]);
  const Handle = () => {
    setData([
      ...data,
      fname,
      mname,
      lname,
      fullname,
      hno,
      area,
      city,
      pin,
      address,
      adhar,
      pan,
      email,
      number,
      idproofs,
    ]);
  };
  const Handleremove = () => {
    setFname("");
    setLname("");
    setMname("");
    setHno("");
    setArea("");
    setCity("");
    setPin("");
    setAdhar("");
    setPan("");
    setEmail("");
    setNumber("");
  };

  useEffect(() => {
    setFullname(`${fname} ${mname} ${lname}`);
    setAddress(`${hno},${area},${city}-${pin}.`);
    setIdproofs(`${adhar}:${pan}:${email}:${number}`);
  }, [fname, mname, lname, hno, area, city, pin, adhar, pan, email, number]);

  return (
    <div className="main">
    <Card>
      <CardContent>
        <React.Fragment>
          <Grid container spacing={7}>
            <Grid item xs={3}>
              <TextField
                value={fname}
                label="First Name"
                variant="standard"
                onChange={(e) => setFname(e.target.value)}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                value={mname}
                label="Middle Name"
                variant="standard"
                onChange={(e) => setMname(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                value={lname}
                label="Last Name"
                variant="standard"
                onChange={(e) => setLname(e.target.value)}
              />
            </Grid>
            
            <Grid item xs={2}>
              <TextField
                value={fullname}
                label="fullname"
                variant="standard"
                onChange={(e) => setFullname(e.target.value)}
                />
          </Grid>
          <Grid item x={2}>
                <Avatar alt="Cindy Baker" src="download (1).jpg" />
              </Grid>
                </Grid>
                <br />
                <br />
                
          <Grid container spacing={5}>
            <Grid item xs={3}>
              <TextField
                value={hno}
                label="House No"
                variant="standard"
                onChange={(e) => setHno(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                value={area}
                label="area"
                variant="standard"
                onChange={(e) => setArea(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                value={city}
                label="city"
                variant="standard"
                onChange={(e) => setCity(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                value={pin}
                label="pincode"
                variant="standard"
                onChange={(e) => setPin(e.target.value)}
              />
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <TextField
                value={address}
                label="address"
                variant="standard"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                value={adhar}
                label="adhar"
                variant="standard"
                onChange={(e) => setAdhar(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                value={pan}
                label="pan"
                variant="standard"
                onChange={(e) => setPan(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                value={email}
                label="Email"
                variant="standard"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>
<br />
<br />
          <Grid container>
          <Grid item xs={3}></Grid>         
            <Grid item xs={3}>
              <TextField
                value={number}
                variant="standard"
                label="Number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </Grid>

            <Grid item xs={5}>
              <TextField
                value={idproofs}
                label="idproofs"
                variant="standard"
                onChange={(e) => setIdproofs(e.target.value)}
              />
            </Grid>
            <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
  </RadioGroup>
</FormControl>
          </Grid>
          <br />
            <br />
            <br />
            <Grid container >
              <Grid item xs={4}></Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={Handle} className="btn">
                Submit
              </Button>
            </Grid>
              
              <Grid item xs={3}>
                <Button variant="contained" onClick={Handleremove}>
                  Reset
                </Button>
              </Grid>
          </Grid>
          {data.map((item) => {

          return(
            <div className="main2">
            <Card className="cls">
              <CardContent>{item}</CardContent>
            </Card>
            </div>
)})}
        </React.Fragment>
      </CardContent>
    </Card>
</div>
  );
};
