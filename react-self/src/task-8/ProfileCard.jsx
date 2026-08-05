import React, { useRef, useState } from "react";
import "./ProfileCard.css";

function ProfileCard() {
  const fileInputRef = useRef(null);

  // SVG Data URI placeholder so it works offline reliably
  const defaultAvatar =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 24 24' fill='%23ccc'><circle cx='12' cy='8' r='4'/><path d='M12 14c-6.1 0-8 4-8 4v2h16v-2s-1.9-4-8-4z'/></svg>";

  const [profileImage, setProfileImage] = useState(defaultAvatar);
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Trigger hidden input via useRef
  const handleChooseImage = () => {
    fileInputRef.current.click();
  };

  // Handle uploaded file and revoke previous ObjectURL to free memory
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      if (profileImage !== defaultAvatar) {
        URL.revokeObjectURL(profileImage);
      }
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  // Functional state update for safer count tracking
  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  // Submit comment via button or Enter key
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setComments((prevComments) => [...prevComments, comment.trim()]);
      setComment("");
    }
  };

  return (
    <div className="profile-card">
      <h2 className="card-title">User Profile</h2>

      <div className="avatar-wrapper" onClick={handleChooseImage}>
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="avatar-overlay">Change</div>
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        hidden
      />

      <button className="btn btn-primary" onClick={handleChooseImage}>
        {profileImage === defaultAvatar ? "Upload Image" : "Replace Image"}
      </button>

      <div className="like-section">
        <button className="btn btn-like" onClick={handleLike}>
          ❤️ Like
        </button>
        <span className="like-count">
          <strong>{likes}</strong> {likes === 1 ? "like" : "likes"}
        </span>
      </div>

      <hr className="divider" />

      <div className="comment-section">
        <h3>Comments ({comments.length})</h3>

        <form onSubmit={handleCommentSubmit} className="comment-form">
          <input
            type="text"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="comment-input"
          />
          <button type="submit" className="btn btn-submit">
            Post
          </button>
        </form>

        <ul className="comments-list">
          {comments.length === 0 ? (
            <li className="no-comments">No comments yet. Start the conversation!</li>
          ) : (
            comments.map((item, index) => (
              <li key={index} className="comment-item">
                {item}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProfileCard;