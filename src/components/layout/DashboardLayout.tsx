import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Calendar,
  FileText,
  Table,
  Settings,
  Search,
  Bell,
  MessageSquare,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import pockieLogo from '../../assets/logo_nav.png';
import './DashboardLayout.css';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Basic logout handling
    navigate('/login');
  };

  return (
    <div className="dashboard-layout">
      {/* --- Sidebar --- */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <img src={pockieLogo} alt="Pockie" className="sidebar-logo" />
          <button className="sidebar-close-btn" onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-group">
            <h3 className="nav-group-title">DANH MỤC</h3>
            <ul className="nav-list">
              <li>
                <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  <LayoutDashboard size={20} />
                  <span>Tổng quan</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/calendar" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  <Calendar size={20} />
                  <span>Lịch</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/forms" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  <FileText size={20} />
                  <span>Biểu mẫu</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/tables" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  <Table size={20} />
                  <span>Bảng biểu</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/settings" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  <Settings size={20} />
                  <span>Cài đặt</span>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="nav-group">
            <h3 className="nav-group-title">HỖ TRỢ</h3>
            <ul className="nav-list">
              <li>
                <div className="sidebar-user-profile">
                  <div className="user-info sidebar-user-info">
                    <span className="user-name">Nguyễn Văn B</span>
                    <span className="user-role">Quản trị viên</span>
                  </div>
                  <div className="avatar-placeholder">B</div>
                </div>
              </li>
              <li>
                <button className="nav-link logout-btn" onClick={handleLogout}>
                  <LogOut size={20} />
                  <span>Đăng xuất</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* --- Main Content --- */}
      <div className="main-wrapper">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <button className="menu-toggle-btn" onClick={() => setSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="search-box">
              <Search size={20} className="search-icon" />
              <input type="text" placeholder="Nhập để tìm kiếm..." className="search-input" />
            </div>
          </div>

          <div className="header-right">
            <button className="icon-btn">
              <Bell size={20} />
              <span className="badge"></span>
            </button>
            <button className="icon-btn">
              <MessageSquare size={20} />
              <span className="badge"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="main-content">
          <Outlet />
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}
    </div>
  );
}
