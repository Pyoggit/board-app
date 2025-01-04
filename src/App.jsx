import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BoardPage from "./pages/BoardPage";
import CreatePostPage from "./pages/CreatePostPage";
import EditPostPage from "./pages/EditPostPage";
import BoardDetailPage from "./pages/BoardDetailPage";
import Footer from "./components/Footer";

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => setPosts((prevPosts) => [post, ...prevPosts]);

  const updatePost = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  const deletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<BoardPage posts={posts} onDeletePost={deletePost} />}
        />
        <Route
          path="/create"
          element={<CreatePostPage onAddPost={addPost} />}
        />
        <Route
          path="/edit/:id"
          element={<EditPostPage posts={posts} onUpdatePost={updatePost} />}
        />
        <Route
          path="/post/:id"
          element={<BoardDetailPage posts={posts} onDeletePost={deletePost} />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
