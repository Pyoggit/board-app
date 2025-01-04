import { useState } from "react";
import { Link } from "react-router-dom";
import "./BoardPage.css";

const BoardPage = ({ posts, onDeletePost }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (postId, postPassword) => {
    const inputPassword = prompt("비밀번호를 입력하세요:");
    if (inputPassword === postPassword) {
      onDeletePost(postId);
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="board-page">
      <div className="board-header">
        <h1>글 목록</h1>
        <input
          type="text"
          className="search-input"
          placeholder="제목 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul className="post-list">
        {filteredPosts.map((post) => (
          <li key={post.id} className="post-item">
            <div className="post-content">
              <Link to={`/post/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
              <p>작성자: {post.name}</p>
              <p>작성일: {new Date(post.createdAt).toLocaleString()}</p>
            </div>
            <div className="post-actions">
              <Link to={`/edit/${post.id}`}>
                <button className="btn btn--secondary">수정</button>
              </Link>
              <button
                className="btn btn--danger"
                onClick={() => handleDelete(post.id, post.password)}
              >
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardPage;
