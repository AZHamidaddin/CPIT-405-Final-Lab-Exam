import React, { useState } from "react";
import "./styles.css";

const BookmarkForm = ({ onAddBookmark }) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const addBookmark = async () => {
    try {
      await fetch("http://localhost:8000/api/create.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, link }),
      });
      setTitle("");
      setLink("");
      onAddBookmark();
    } catch (error) {
      console.error("Error adding bookmark:", error);
    }
  };

  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="Bookmark Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bookmark Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button onClick={addBookmark}>Add Bookmark</button>
    </div>
  );
};

export default BookmarkForm;