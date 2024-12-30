import { useEffect, useState } from "react";

function MedicalNotes() {
    const [notes, setNotes] = useState([
      { id: '1', customer: 'customer1', doctor: 'doctor1', status: 'pending', action: 'update'},
      { id: '1', customer: 'customer1', doctor: 'doctor1', status: 'pending', action: 'update'},
      { id: '1', customer: 'customer1', doctor: 'doctor1', status: 'pending', action: 'update'},
      { id: '1', customer: 'customer1', doctor: 'doctor1', status: 'pending', action: 'update'},
      { id: '1', customer: 'customer1', doctor: 'doctor1', status: 'pending', action: 'update'},
      { id: '1', customer: 'customer1', doctor: 'doctor1', status: 'pending', action: 'update'}
      ]
    );


    useEffect(() => {
      // Fetch notes from API
      fetch('/api/notes')
        .then((res) => res.json())
        .then((data) => setNotes(data));
    }, []);
  
    return (
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Request ID</th>
            <th className="py-2 px-4 border-b text-left">Customer</th>
            <th className="py-2 px-4 border-b text-left">Doctor</th>
            <th className="py-2 px-4 border-b text-left">Status</th>
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note.id}>
              <td className="py-2 px-4 border-b">{note.id}</td>
              <td className="py-2 px-4 border-b">{note.customer}</td>
              <td className="py-2 px-4 border-b">{note.doctor}</td>
              <td className="py-2 px-4 border-b">{note.status}</td>
              <td className="py-2 px-4 border-b">
                <button className="text-blue-600 hover:underline">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default MedicalNotes;
  