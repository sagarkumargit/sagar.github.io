import TagInput from '@/utils/TagInput';
import React, { useState } from 'react';

interface User {
    id: number;
    name: string;
    avatar: string; // URL to user profile image
  }

const CommentSection: React.FC = () => {
  const [comment, setComment] = useState('');
  const [taggedUser, setTaggedUser] = useState<User | null>(null);
  
  const users: User[] = [
    { id: 1, name: 'Alice', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Bob', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Charlie', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, name: 'David', avatar: 'https://i.pravatar.cc/150?img=4' },
  ];

  const handleTagSelect = (user: User) => {
    setTaggedUser(user);
    console.log(`User tagged: ${user.name}`);
  };

  const handleCommentChange = (newComment: string) => {
    setComment(newComment);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Comment Section</h2>
      <TagInput
        users={users}
        value={comment}
        onChange={handleCommentChange}
        onTagSelect={handleTagSelect}
      />
      {taggedUser && <p className="mt-2 text-sm text-gray-600">Tagged User: {taggedUser.name}</p>}
    </div>
  );
};

export default CommentSection;
