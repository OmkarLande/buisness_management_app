import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vel lectus blandit aliquam.',
    role: 'Manager',
    location: 'New York, USA',
    image: 'https://via.placeholder.com/150'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you can add the logic to save the changes, e.g., API call
  };

  return (
    <div className="min-h-screen bg-custColor2 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        {!isEditing ? (
          <>
            <div className="flex items-center mb-4">
              <img
                className="w-16 h-16 rounded-full mr-4"
                src={profile.image}
                alt="Profile"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-900">{profile.name}</h2>
                <p className="text-gray-600">{profile.email}</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
              <p className="text-gray-700">{profile.about}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Details</h3>
              <p className="text-gray-700"><strong>Role:</strong> {profile.role}</p>
              <p className="text-gray-700"><strong>Location:</strong> {profile.location}</p>
            </div>
            <button
              className="mt-6 bg-custColor2 text-white py-2 px-4 rounded hover:bg-blue-700"
              onClick={handleEditClick}
            >
              Edit Profile
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">About</label>
              <textarea
                name="about"
                value={profile.about}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Role</label>
              <input
                type="text"
                name="role"
                value={profile.role}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Profile Image</label>
              <input
                type="file"
                onChange={handleImageChange}
                className="mt-1 block w-full text-gray-700"
              />
            </div>
            <button
              type="submit"
              className="mt-6 bg-custColor2 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Save
            </button>
            <button
              type="button"
              className="mt-6 ml-4 bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-700"
              onClick={handleEditClick}
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
