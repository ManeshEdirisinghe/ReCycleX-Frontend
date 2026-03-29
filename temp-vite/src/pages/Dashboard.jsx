import AppLayout from '../layouts/AppLayout';
import { userMock, itemsMock } from '../mockData';

export default function Dashboard() {
  return (
    <AppLayout userRole={userMock.role}>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow border border-green-100">
          <h3 className="text-gray-500 font-medium">Total Points</h3>
          <p className="text-3xl font-bold text-green-600">{userMock.points}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border border-blue-100">
          <h3 className="text-gray-500 font-medium">Items Submitted</h3>
          <p className="text-3xl font-bold text-blue-600">{itemsMock.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border border-yellow-100">
          <h3 className="text-gray-500 font-medium">Processing</h3>
          <p className="text-3xl font-bold text-yellow-600">1</p>
        </div>
      </div>
      
      <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Submissions</h2>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {itemsMock.map(item => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 'Submitted' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLayout>
  );
}
