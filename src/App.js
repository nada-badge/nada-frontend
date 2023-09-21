import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Community from "./pages/Community";
import { PostWrite } from "./community/PostWrite/PostWrite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/community" element={<Community />} />
            <Route path="/community/PostWrite" element={<PostWrite />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
