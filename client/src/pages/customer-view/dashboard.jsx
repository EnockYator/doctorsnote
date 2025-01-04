function Dashboard() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stats Cards */}
          <div className="p-4 bg-white rounded shadow-md">
            <h2 className="text-lg font-semibold">Total Notes</h2>
            <p className="text-2xl text-blue-600">12</p>
          </div>
          <div className="p-4 bg-white rounded shadow-md">
            <h2 className="text-lg font-semibold">Pending Requests</h2>
            <p className="text-2xl text-yellow-600">3</p>
          </div>
          <div className="p-4 bg-white rounded shadow-md">
            <h2 className="text-lg font-semibold">Completed Notes</h2>
            <p className="text-2xl text-green-600">9</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  