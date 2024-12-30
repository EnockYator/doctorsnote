
import { useState, useEffect } from 'react';

function DoctorCertification() {
  const [pendingDoctors, setPendingDoctors] = useState([]);

  useEffect(() => {
    // Fetch pending certifications
    fetch('/api/doctors/pending')
      .then((res) => res.json())
      .then((data) => setPendingDoctors(data));
  }, []);

  const approveDoctor = (id) => {
    fetch(`/api/doctors/approve/${id}`, { method: 'POST' })
      .then(() => setPendingDoctors((prev) => prev.filter((doc) => doc.id !== id)));
  };

  const rejectDoctor = (id) => {
    fetch(`/api/doctors/reject/${id}`, { method: 'POST' })
      .then(() => setPendingDoctors((prev) => prev.filter((doc) => doc.id !== id)));
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Pending Certifications</h2>
      <ul>
        {pendingDoctors.map((doctor) => (
          <li key={doctor.id} className="p-4 bg-white shadow rounded-lg mb-2">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{doctor.name}</h3>
                <p className="text-sm text-gray-500">{doctor.email}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => approveDoctor(doctor.id)}
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => rejectDoctor(doctor.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Reject
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorCertification;
