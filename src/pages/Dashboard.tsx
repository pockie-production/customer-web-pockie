
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';
import { Eye, ShoppingCart, ShoppingBag, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import './Dashboard.css';
import { revenueData, weeklyData } from '../data/mockDashboard';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Stats Cards Row */}
      <div className="stats-grid">
        {/* Card 1 */}
        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <Eye size={24} className="stat-icon text-mint" />
          </div>
          <div className="stat-info">
            <h4 className="stat-value">3.456K</h4>
            <p className="stat-label">Tổng lượt xem</p>
          </div>
          <div className="stat-trend positive">
            <span>0.43%</span>
            <ArrowUpRight size={16} />
          </div>
        </div>

        {/* Card 2 */}
        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <ShoppingCart size={24} className="stat-icon text-mint" />
          </div>
          <div className="stat-info">
            <h4 className="stat-value">45.2M VNĐ</h4>
            <p className="stat-label">Tổng lợi nhuận</p>
          </div>
          <div className="stat-trend positive">
            <span>4.35%</span>
            <ArrowUpRight size={16} />
          </div>
        </div>

        {/* Card 3 */}
        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <ShoppingBag size={24} className="stat-icon text-mint" />
          </div>
          <div className="stat-info">
            <h4 className="stat-value">2.450</h4>
            <p className="stat-label">Tổng sản phẩm</p>
          </div>
          <div className="stat-trend positive">
            <span>2.59%</span>
            <ArrowUpRight size={16} />
          </div>
        </div>

        {/* Card 4 */}
        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <Users size={24} className="stat-icon text-mint" />
          </div>
          <div className="stat-info">
            <h4 className="stat-value">3.456</h4>
            <p className="stat-label">Tổng người dùng</p>
          </div>
          <div className="stat-trend negative">
            <span>0.95%</span>
            <ArrowDownRight size={16} />
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="charts-grid">
        {/* Line Chart */}
        <div className="chart-card lg-col-span-2">
          <div className="chart-header">
            <div className="chart-title-group">
              <div className="chart-legend-item">
                <span className="legend-dot bg-mint"></span>
                <div>
                  <h5 className="legend-title">Tổng doanh thu</h5>
                  <p className="legend-date">12.04.2022 - 12.05.2022</p>
                </div>
              </div>
              <div className="chart-legend-item">
                <span className="legend-dot bg-yellow"></span>
                <div>
                  <h5 className="legend-title">Tổng doanh số</h5>
                  <p className="legend-date">12.04.2022 - 12.05.2022</p>
                </div>
              </div>
            </div>
            <div className="chart-actions">
              <div className="btn-group">
                <button className="btn-group-item active">Ngày</button>
                <button className="btn-group-item">Tuần</button>
                <button className="btn-group-item">Tháng</button>
              </div>
            </div>
          </div>

          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} />
                <RechartsTooltip
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: 'var(--shadow-md)' }}
                />
                <Line type="monotone" dataKey="revenue" stroke="var(--color-mint)" strokeWidth={3} dot={{ r: 4, strokeWidth: 2, fill: 'var(--color-white)' }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="sales" stroke="var(--color-yellow)" strokeWidth={3} dot={{ r: 4, strokeWidth: 2, fill: 'var(--color-white)' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="chart-card">
          <div className="chart-header space-between">
            <h3 className="chart-card-title">Lợi nhuận tuần này</h3>
            <select className="chart-select">
              <option>Tuần này</option>
              <option>Tuần trước</option>
            </select>
          </div>

          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} />
                <RechartsTooltip cursor={{ fill: 'var(--color-mint-light)', opacity: 0.4 }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: 'var(--shadow-md)' }} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', color: 'var(--color-text-secondary)', paddingTop: '10px' }} />
                <Bar dataKey="sales" name="Doanh số" fill="var(--color-yellow)" radius={[4, 4, 0, 0]} barSize={12} />
                <Bar dataKey="revenue" name="Doanh thu" fill="var(--color-mint)" radius={[4, 4, 0, 0]} barSize={12} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
