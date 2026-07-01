
import {
  LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Filter, Download } from 'lucide-react';
import './TablesPage.css';

// Mock Data
const lineData = [
  { name: 'Th2', revenue: 4000, reach: 2400 },
  { name: 'Th3', revenue: 3000, reach: 1398 },
  { name: 'Th4', revenue: 2000, reach: 9800 },
  { name: 'Th5', revenue: 2780, reach: 3908 },
  { name: 'Th6', revenue: 1890, reach: 4800 },
  { name: 'Th7', revenue: 2390, reach: 3800 },
  { name: 'Th8', revenue: 3490, reach: 4300 },
];



const donutData = [
  { name: 'Facebook', value: 400 },
  { name: 'Tiktok', value: 300 },
  { name: 'Google', value: 300 },
  { name: 'Khác', value: 200 },
];

const COLORS = ['#059669', '#FACC15', '#34D399', '#94A3B8'];

const campaigns = [
  { id: '1', name: 'Mùa hè rực rỡ', status: 'Đang chạy', effectiveness: 85, conversions: 1240, revenue: '45.000.000' },
  { id: '2', name: 'Tết sum vầy 2026', status: 'Đã xong', effectiveness: 92, conversions: 3450, revenue: '120.500.000' },
  { id: '3', name: 'Back to School', status: 'Đang chạy', effectiveness: 67, conversions: 890, revenue: '23.400.000' },
  { id: '4', name: 'Black Friday Sớm', status: 'Đã xong', effectiveness: 98, conversions: 5600, revenue: '210.000.000' },
];

export default function TablesPage() {
  return (
    <div className="tables-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Bảng biểu & Báo cáo</h1>
          <p className="page-subtitle">Theo dõi hiệu suất các chiến dịch</p>
        </div>
        <div className="header-actions">
          <button className="action-btn"><Filter size={18} /> Bộ lọc</button>
          <button className="action-btn primary"><Download size={18} /> Xuất báo cáo</button>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-grid-3">
        {/* Line Chart */}
        <div className="chart-card lg-col-span-2">
          <div className="chart-header">
            <h3 className="chart-card-title">Xu hướng Lượt tiếp cận & Doanh thu</h3>
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                <RechartsTooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend iconType="circle" />
                <Line type="monotone" dataKey="revenue" name="Doanh thu" stroke="#FACC15" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="reach" name="Lượt tiếp cận" stroke="#059669" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-card-title">Nguồn Chuyển Đổi</h3>
          </div>
          <div className="chart-wrapper flex-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={donutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {donutData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend iconType="circle" verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-card">
        <div className="table-header">
          <h3 className="table-title">Chi tiết các chiến dịch</h3>
        </div>
        <div className="table-responsive">
          <table className="campaigns-table">
            <thead>
              <tr>
                <th>Tên chiến dịch</th>
                <th>Trạng thái</th>
                <th>Độ hiệu quả</th>
                <th>Lượt chuyển đổi</th>
                <th className="text-right">Số tiền thu được (VNĐ)</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id}>
                  <td className="font-medium">{campaign.name}</td>
                  <td>
                    <span className={`status-badge ${campaign.status === 'Đang chạy' ? 'active' : 'completed'}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td>
                    <div className="progress-cell">
                      <div className="progress-bar-bg">
                        <div 
                          className="progress-bar-fill" 
                          style={{ 
                            width: `${campaign.effectiveness}%`,
                            backgroundColor: campaign.effectiveness > 80 ? '#166534' : '#FACC15'
                          }}
                        ></div>
                      </div>
                      <span className="progress-text">{campaign.effectiveness}%</span>
                    </div>
                  </td>
                  <td>{campaign.conversions.toLocaleString()}</td>
                  <td className="text-right font-bold text-green">{campaign.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
