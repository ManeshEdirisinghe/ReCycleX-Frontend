import AppLayout from '../layouts/AppLayout';
import { userMock } from '../mockData';

export default function SubmitItem() {
  return (
    <AppLayout userRole={userMock.role}>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Submit Item</h1>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto border-t-4 border-green-500">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Item Title</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border" placeholder="e.g. Old Laptop" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border">
              <option>Electronics</option>
              <option>Plastic</option>
              <option>Glass</option>
              <option>Metal</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 p-2 border"></textarea>
          </div>
          <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Submit for Review
          </button>
        </form>
      </div>
    </AppLayout>
  );
}
