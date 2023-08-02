import './App.css';
import { Route, Routes } from "react-router-dom";
import home from "./testpage/home";
import calendar from "./testpage/calendar";
import badge from "./testpage/badge";
import activity from "./testpage/activity";
import myPage from "./testpage/myPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" Component={home}  />
        <Route path="/calendar" Component={calendar} />
        <Route path="/badge" Component={badge} />
        <Route path="/activity" Component={activity} />
        <Route path="/myPage" Component={myPage} />
      </Routes>
    </div>
  );
}

export default App;
