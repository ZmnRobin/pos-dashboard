import React, { useState, useEffect } from 'react';
import { createUser, updateUser, findSingleUser } from '../../lib/api';

interface UserFormProps {
  closeModal: () => void;
  fetchData: () => void;
  isUpdateMode: boolean;
  userId: string | null;
}

const UserForm: React.FC<UserFormProps> = ({ closeModal, fetchData, isUpdateMode, userId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Manager',
  });

  useEffect(() => {
    // Fetch user data if in update mode
    if (isUpdateMode) {
      const fetchUserData = async () => {
        try {
          const user = await findSingleUser(userId);
          setFormData({
            name: user.name,
            email: user.email,
            role: user.role,
          });
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Handle error here
        }
      };

      fetchUserData();
    }
  }, [isUpdateMode, userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      name: formData.name,
      email: formData.email,
      role: formData.role,
      creationDate: new Date(),
    };

    try {
      if (isUpdateMode) {
        // Update existing user
        await updateUser(userId, userData);
      } else {
        // Create new user
        await createUser(userData);
      }

      fetchData(); // Fetch updated user list
      closeModal();
    } catch (error) {
      console.error('Error handling user data:', error);
      // Handle error here (e.g., display error message)
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <span className="absolute top-4 right-4 text-red-600 cursor-pointer" onClick={closeModal}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
              placeholder='name ..'
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
              placeholder='example@mail.com'
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            >
              {/* Add your role options here */}
              <option defaultValue="Manager">Manager</option>
              <option value="Accounts">Accounts</option>
              <option value="Seller">Seller</option>
            </select>
          </div>
          {isUpdateMode ? (
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">
              Update User
            </button>
          ) : (
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">
              Create User
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserForm;
