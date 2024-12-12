import React from "react";
import Bookmark from "./Bookmark";
import "./styles.css";

const BookmarkList = ({ bookmarks, isLoaded, onCrudOperation }) => {
  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  if (bookmarks.length === 0) {
    return <h2>No bookmarks available. Add one now!</h2>;
  }

  return (
    <div className="bookmark-list">
      {bookmarks.map((bookmark) => (
        <Bookmark
          key={bookmark.id}
          bookmark={bookmark}
          onCrudOperation={onCrudOperation}
        />
      ))}
    </div>
  );
};

export default BookmarkList;