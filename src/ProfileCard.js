import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

import ClearIcon from "@mui/icons-material/Clear";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ProfileCard() {

  const [profile, setProfile] = useState({ name: "", age: null, phNo: null });

  const [profileCards, setProfileCards] = useState([]);

  const onChangeProfile = (event, key) => {
    setProfile({ ...profile, [key]: event.target.value });
  };

  const addProfiles = ()=>{
      let isValid = true;
    Object.keys(profile).map((key)=>{
        if(!profile[key]) isValid = false
    });
    if(isValid){
        setProfileCards([...profileCards,profile]);
      setProfile({ name: "", age:"", phNo:""})
    }
  }
 
  const removeCard = (cardKey)=>{
    const newVar=[...profileCards]
    newVar.splice(cardKey,1);
    
    setProfileCards(newVar)
    
  }

  const returnProfiles = (cards)=>{
   return cards.map((newProfile,cardKey)=>  <Grid item xs={4} key={cardKey}>
   <Card sx={{ maxWidth: 345 }}>
     <CardHeader
       action={
         <IconButton aria-label="settings" onClick={()=>removeCard(cardKey)}>
           <ClearIcon />
         </IconButton>
       }
     />
     <Item>
       <TextField
         id="standard-basic"
         value={newProfile.name}
         onChange={(event) => onChangeProfile(event, "name")}
         label="Name"
         variant="standard"
       />
     </Item>
     <Item>
       <TextField
         id="standard-basic"
         value={newProfile.age}
         onChange={(event) => onChangeProfile(event, "age")}
         label="Age"
         variant="standard"
       />
     </Item>
     <Item>
       <TextField
         id="standard-basic"
         type={"number"}
         value={newProfile.phNo}
         onChange={(event) => onChangeProfile(event, "phNo")}
         label="Ph No"
         variant="standard"
       />
     </Item>
   </Card>
 </Grid>)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <TextField
              id="standard-basic"
              value={profile.name}
              onChange={(event) => onChangeProfile(event, "name")}
              label="Name"
              variant="standard"
            />
          </Item>
          <Item>
            <TextField
              id="standard-basic"
              value={profile.age}
              type={"number"}
              onChange={(event) => onChangeProfile(event, "age")}
              label="Age"
              variant="standard"
            />
          </Item>
          <Item>
            <TextField
              id="standard-basic"
              type={"number"}
              value={profile.phNo}
              onChange={(event) => onChangeProfile(event, "phNo")}
              label="Ph No"
              variant="standard"
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Button size="large" variant="contained" onClick={addProfiles}>
              ADD
            </Button>
          </Item>
        </Grid>
      </Grid>
      <Box sx={{ flexGrow: 1,marginTop:5 }}>
        <Grid container spacing={2}>
            {
           returnProfiles(profileCards)
        }
         
        </Grid>
      </Box>
    </Box>
  );
}

export default ProfileCard;
