import './App.css';
import { Route, Routes } from "react-router-dom";
import home from "./testpage/home";
import community from "./testpage/community";
import badge from "./testpage/badge";
import activity from "./testpage/activity";
import myPage from "./testpage/myPage";
import communityy from './testpage/community2';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" Component={home}  />
        <Route path="/activity" Component={activity} />
        <Route path="/badge" Component={badge} />
        <Route path="/community" Component={community} />
        <Route path="/community/child" Component={communityy} />
        <Route path="/myPage" Component={myPage} />
      </Routes>
    </div>
  );
}

export default App;
