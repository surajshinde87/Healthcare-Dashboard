import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent'

function App() {
  return (
    <div id='app-container'>
      {/* Sidebar with Logo and Links */}
      <div className="sidebar-container">
        <Sidebar />
      </div>
      {/* Main Dashboard of the App */}
      <div className="dashboard-main-container">
        <DashboardMainContent />
      </div>
    </div>
  )
}

export default App
