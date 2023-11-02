import "./App.css";
import { Route, Routes } from "react-router-dom";
import Community from "./pages/community/Community";
import PostWrite from "./pages/community/PostWrite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostDetail from "./pages/community/PostDetail";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/community" element={<Community />} />
          <Route path="/community/PostWrite" element={<PostWrite />} />
          <Route path="/community/PostDetail/:_id" element={<PostDetail />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
