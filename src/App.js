import './App.css';
import { AppBar, Typography, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Passengers from "./containers/Passengers/Passengers";
import Profile from "./containers/Profile/Profile";
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Snapp App
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Routes>
          <Route exact path="/" />
          <Route path="passengers" element={<Passengers/>} />
          <Route path="profile/:id" element={<Profile/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
