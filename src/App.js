import "./App.css";
import { Route, Routes } from "react-router-dom";
import CommunityPage from "./pages/community/CommunityPage";
import PostWritePage from "./pages/community/PostWritePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostDetailPage from "./pages/community/PostDetailPage";
import CommentPage from "./pages/community/CommentPage";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/PostWrite" element={<PostWritePage />} />
          <Route
            path="/community/PostDetail/:_id"
            element={<PostDetailPage />}
          />
          <Route path="/community/Comment/:_id" element={<CommentPage />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
