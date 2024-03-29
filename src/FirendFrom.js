import React, { useState } from 'react';

function FriendFrom({ orderIndex, onAddFriend }) {
  const [friendName, setFriendName] = useState('');

  const handleAddFriend = () => {
    onAddFriend(orderIndex, friendName);
    setFriendName('');
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Friend Name"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
        className="friend-input"
      />
      <button onClick={handleAddFriend} className="friend-button">Add Friend</button>
    </div>
  );
}

export default FriendFrom;
