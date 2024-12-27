// components/TagInput.tsx

import Image from 'next/image';
import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  avatar: string; // URL to user profile image
}

interface TagInputProps {
  users: User[];
  value: string;
  onChange: (newComment: string) => void;
  onTagSelect: (user: User) => void;
}

const TagInput: React.FC<TagInputProps> = ({ users, value, onChange, onTagSelect }) => {
  const [isTagging, setIsTagging] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [currentInput, setCurrentInput] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setCurrentInput(inputValue);
    onChange(inputValue);

    if (inputValue.includes('@')) {
      const lastWord = inputValue.split(' ').pop()!;
      if (lastWord.startsWith('@')) {
        setIsTagging(true);
        filterUsers(lastWord.slice(1));
      } else {
        setIsTagging(false);
      }
    } else {
      setIsTagging(false);
    }
  };

  const filterUsers = (query: string) => {
    const results = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(results);
  };

  const handleUserSelect = (user: User) => {
    const lastWord = currentInput.split(' ').pop()!;
    const newComment = currentInput.replace(lastWord, `@${user.name}`);
    setCurrentInput(newComment);
    onChange(newComment);
    setIsTagging(false);
    onTagSelect(user);
  };

  return (
    <div className="relative">
      <textarea
        value={currentInput}
        onChange={handleChange}
        placeholder="Write a comment..."
        rows={4}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
      />
      
      {isTagging && filteredUsers.length > 0 && (
        <ul className="absolute mt-2 w-full max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              onClick={() => handleUserSelect(user)}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
            >
              <Image
                src={user.avatar || '/default-avatar.png'} // Use a fallback image if no avatar is provided
                alt={user.name}
                className="w-8 h-8 rounded-full mr-2"
                priority
              />
              <span className="text-gray-800">{user.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagInput;
