import { Link, useNavigate, useParams } from "react-router-dom";
import "./BoardDetailPage.css";

const BoardDetailPage = ({ posts, onDeletePost }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div>존재하지 않는 게시물입니다.</div>;
  }

  const handleDelete = () => {
    const inputPassword = prompt("비밀번호를 입력하세요:");
    if (inputPassword === post.password) {
      onDeletePost(post.id);
      navigate("/");
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="board-detail-page">
      <h1>{post.title}</h1>
      <p className="board-detail-content">{post.content}</p>
      <div className="board-detail-meta">
        <p>
          <strong>작성자:</strong> {post.name}
        </p>
        <p>
          <strong>이메일:</strong> {post.email}
        </p>
        <p>
          <strong>작성일:</strong> {new Date(post.createdAt).toLocaleString()}
        </p>
      </div>
      <div className="board-detail-actions">
        <Link to={`/edit/${post.id}`}>
          <button className="btn btn--secondary">수정</button>
        </Link>
        <button className="btn btn--danger" onClick={handleDelete}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default BoardDetailPage;
