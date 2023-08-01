import './App.css';
import BottomNav from './BottomNav';
import { Route, Switch } from "react-router-dom";
import home from "./testpage/home";
import calender from "./testpage/calender";
import badge from "./testpage/badge";
import activity from "./testpage/hactivityome";
import myPage from "./testpage/myPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={home} />
        <Route path="/calender" component={calender} />
        <Route path="/badge" component={badge} />
        <Route path="/activity" component={activity} />
        <Route path="/myPage" component={myPage} />
      </Switch>
    </div>
  );
}

export default App;
