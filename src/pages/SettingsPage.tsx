
import { LogOut, User, Shield, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './SettingsPage.css';

export default function SettingsPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="settings-page">
      <div className="page-header">
        <h1 className="page-title">Cài đặt tài khoản</h1>
        <p className="page-subtitle">Quản lý thông tin cá nhân và phân quyền</p>
      </div>

      <div className="settings-container">
        <div className="profile-section">
          <div className="avatar-large">
            <span className="avatar-text">B</span>
          </div>
          <div className="profile-info-header">
            <h2 className="profile-name">Nguyễn Văn B</h2>
            <span className="profile-role-badge">
              <Shield size={14} />
              Quản trị viên
            </span>
          </div>
        </div>

        <div className="settings-details">
          <div className="settings-group">
            <h3 className="settings-group-title">Thông tin cá nhân</h3>
            
            <div className="info-row">
              <div className="info-label">
                <User size={18} className="info-icon" />
                <span>Họ và tên</span>
              </div>
              <div className="info-value">Nguyễn Văn B</div>
            </div>

            <div className="info-row">
              <div className="info-label">
                <Mail size={18} className="info-icon" />
                <span>Email liên hệ</span>
              </div>
              <div className="info-value">nguyenvanb@pockie.vn</div>
            </div>

            <div className="info-row">
              <div className="info-label">
                <Shield size={18} className="info-icon" />
                <span>Chức vụ</span>
              </div>
              <div className="info-value role-text">Quản trị viên hệ thống (Admin)</div>
            </div>
          </div>
        </div>

        <div className="settings-actions">
          <button className="logout-btn-large" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Đăng xuất tài khoản</span>
          </button>
        </div>
      </div>
    </div>
  );
}
