function RequestNote() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Request a Medical Note</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Reason</label>
            <textarea className="w-full p-2 border rounded" rows="4"></textarea>
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded">
            Submit Request
          </button>
        </form>
      </div>
    );
  };
  
  export default RequestNote;
  