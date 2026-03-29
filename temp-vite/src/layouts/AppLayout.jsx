import { Link } from 'react-router-dom';

export default function AppLayout({ children, userRole }) {
  return (
    <div className="flex bg-gray-50 min-h-screen font-sans">
      <aside className="w-64 bg-slate-900 text-white min-h-screen flex flex-col">
        <div className="p-6 text-2xl font-bold text-green-400">ReCycleX</div>
        <nav className="flex-1 px-4 space-y-2">
          <Link to="/" className="block py-2 px-3 rounded hover:bg-slate-800">Dashboard</Link>
          <Link to="/submit" className="block py-2 px-3 rounded hover:bg-slate-800">Submit Item</Link>
          <Link to="/my-items" className="block py-2 px-3 rounded hover:bg-slate-800">My Items</Link>
          <Link to="/pickup" className="block py-2 px-3 rounded hover:bg-slate-800">Pickup Request</Link>
          <Link to="/tracking" className="block py-2 px-3 rounded hover:bg-slate-800">Tracking</Link>
          <Link to="/rewards" className="block py-2 px-3 rounded hover:bg-slate-800">Rewards</Link>
          {userRole === 'admin' && (
            <>
              <div className="pt-6 pb-2 text-xs uppercase text-gray-400 font-bold">Admin</div>
              <Link to="/admin" className="block py-2 px-3 rounded hover:bg-slate-800">Admin Dashboard</Link>
              <Link to="/admin/review" className="block py-2 px-3 rounded hover:bg-slate-800">Admin Review</Link>
            </>
          )}
          {userRole === 'processing' && (
            <>
              <div className="pt-6 pb-2 text-xs uppercase text-gray-400 font-bold">Center</div>
              <Link to="/processing" className="block py-2 px-3 rounded hover:bg-slate-800">Processing Center</Link>
            </>
          )}
        </nav>
        <div className="p-4 border-t border-slate-700">
          <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded">Logout</button>
        </div>
      </aside>
      <main className="flex-1 flex flex-col">
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Portal</h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">{userRole === 'admin' ? 'Admin' : 'User'}</span>
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">U</div>
          </div>
        </header>
        <div className="p-6 flex-1 overflow-auto">{children}</div>
      </main>
    </div>
  );
}
