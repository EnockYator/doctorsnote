import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '@/store/auth-slice';
import { Toast } from '@radix-ui/react-toast';

const AdminSignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    adminCode: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.adminCode) {
      Toast.error('Admin code is required');
      return;
    }
    dispatch(registerUser(formData));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-8 shadow-md rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-4">Admin Sign Up</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Admin Code</label>
          <input
            type="text"
            name="adminCode"
            value={formData.adminCode}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default AdminSignUp;