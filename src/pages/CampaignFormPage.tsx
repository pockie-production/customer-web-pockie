import React, { useState } from 'react';
import { Shirt, Sparkles, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import './CampaignFormPage.css';

interface CampaignPackage {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const CAMPAIGN_PACKAGES: CampaignPackage[] = [
  {
    id: 'pkg-mascot',
    name: 'Gói Mascot Năng Động',
    description: 'Thay đổi trang phục cho mascot và xuất hiện nhiều voucher hấp dẫn thu hút người dùng.',
    icon: <Shirt size={24} />
  },
  {
    id: 'pkg-feature',
    name: 'Gói Tính Năng Chuyên Sâu',
    description: 'Có thêm tính năng phục vụ riêng cho chiến dịch (VD: Vòng quay may mắn, mini-game).',
    icon: <Sparkles size={24} />
  },
  {
    id: 'pkg-rocket',
    name: 'Gói Tăng Tốc Toàn Diện',
    description: 'Kết hợp cả trang phục Mascot độc quyền và các tính năng tương tác đa dạng.',
    icon: <Rocket size={24} />
  }
];

export default function CampaignFormPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPackage) {
      alert('Vui lòng chọn một gói chiến dịch đề xuất!');
      return;
    }
    // Simulate submit
    alert('Đăng ký chiến dịch thành công!');
  };

  return (
    <div className="campaign-form-page">
      <div className="form-header">
        <h1 className="form-title">Đăng ký Chiến dịch Mới</h1>
        <p className="form-subtitle">Khởi tạo chiến dịch marketing tiếp theo của bạn cùng Pockie</p>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="campaignName">Tên chiến dịch</label>
            <input 
              type="text" 
              id="campaignName" 
              className="form-input" 
              placeholder="VD: Mùa hè rực rỡ cùng Pockie" 
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="desiredReach">Số lượt tiếp cận mong muốn</label>
            <input 
              type="number" 
              id="desiredReach" 
              className="form-input" 
              placeholder="VD: 100000" 
              min="1"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="adminName">Người phụ trách quản trị</label>
            <input 
              type="text" 
              id="adminName" 
              className="form-input" 
              placeholder="Họ và tên" 
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactEmail">Email liên hệ</label>
            <input 
              type="email" 
              id="contactEmail" 
              className="form-input" 
              placeholder="email@congty.com" 
              required
            />
          </div>
        </div>

        <div className="packages-section">
          <h2 className="packages-title">Gói chiến dịch đề xuất</h2>
          <div className="packages-grid">
            {CAMPAIGN_PACKAGES.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`package-card ${selectedPackage === pkg.id ? 'selected' : ''}`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                <div className="package-icon">
                  {pkg.icon}
                </div>
                <h3 className="package-name">{pkg.name}</h3>
                <p className="package-desc">{pkg.description}</p>
                <CheckCircle2 size={24} className="check-icon" />
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Đăng ký chiến dịch
          <ArrowRight size={20} />
        </button>
      </form>
    </div>
  );
}
