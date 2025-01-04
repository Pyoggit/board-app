import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditPostPage.css";

const EditPostPage = ({ posts, onUpdatePost }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    if (password === post.password) {
      onUpdatePost({ ...post, title, content });
      navigate("/");
    } else {
      alert("비밀번호가 맞지 않습니다.");
    }
  };

  return (
    <div className="edit-post-page">
      <h1>글 수정</h1>
      <form onSubmit={handleUpdate} className="edit-post-form">
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호 확인</label>
          <input
            id="password"
            type="password"
            placeholder="비밀번호 확인"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">수정</button>
      </form>
    </div>
  );
};

export default EditPostPage;
