

//import { Chart } from './Chart'; // Assume a reusable Chart component

function DashboardOverview() {
  const stats = [
    { label: 'Total Users', value: 1200 },
    {label: 'Admins', value:4},
    { label: 'Doctors', value: 80 },
    {label: 'customers', value:120},
    { label: 'Notes Issued', value: 3000 },
    { label: 'Pending Requests', value: 15 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white p-4 rounded-lg shadow-md">
          <div className="text-sm text-gray-500">{stat.label}</div>
          <div className="text-2xl font-semibold">{stat.value}</div>
        </div>
      ))}
      <div className="col-span-1 md:col-span-2 lg:col-span-4">
        {/* <Chart /> */}
      </div>
    </div>
  );
};

export default DashboardOverview;
