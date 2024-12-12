import React, { useState } from "react";
import "./styles.css";

const Bookmark = ({ bookmark, onCrudOperation }) => {
  const [newLink, setNewLink] = useState("");

  const handleDelete = async () => {
    try {
      await fetch("http://localhost:8000/api/delete.php", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: bookmark.id }),
      });
      onCrudOperation();
    } catch (error) {
      console.error("Error deleting bookmark:", error);
    }
  };

  const handleUpdate = async () => {
    const formattedLink = newLink.startsWith("http") ? newLink : `http://${newLink}`;
    try {
      await fetch("http://localhost:3000/api/update.php", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: bookmark.id, link: formattedLink }),
      });
      onCrudOperation();
    } catch (error) {
      console.error("Error updating bookmark:", error);
    }
  };

  return (
    <div className="bookmark-card">
      <h2>{bookmark.title}</h2>
      <a href={bookmark.link} target="_blank" rel="noopener noreferrer">
        {bookmark.link}
      </a>
      <div className="actions">
        <input
          type="text"
          placeholder="Update Link"
          value={newLink}
          onChange={(e) => setNewLink(e.target.value)}
        />
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default Bookmark;