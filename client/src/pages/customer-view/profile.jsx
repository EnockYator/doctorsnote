function Profile() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded">
            Save Changes
          </button>
        </form>
      </div>
    );
  };
  
  export default Profile;
  