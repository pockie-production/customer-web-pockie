import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react';
import { mockCampaigns, getHighestReachCampaign } from '../data/mockCalendar';
import './CalendarPage.css';

export default function CalendarPage() {
  const highestCampaign = getHighestReachCampaign();
  
  // Generic month layout for demo (e.g., 31 days starting on a Wednesday)
  const daysInMonth = 31;
  const startDayOffset = 2; // 0 = Mon, 1 = Tue, 2 = Wed
  
  const calendarCells = [];
  
  // Empty cells for offset
  for (let i = 0; i < startDayOffset; i++) {
    calendarCells.push(<div key={`empty-${i}`} className="calendar-cell empty"></div>);
  }
  
  // Days
  for (let day = 1; day <= daysInMonth; day++) {
    const dayCampaigns = mockCampaigns.filter(c => c.date === day);
    
    calendarCells.push(
      <div key={`day-${day}`} className={`calendar-cell ${day === 15 ? 'today' : ''}`}>
        <span className="day-number">{day}</span>
        <div className="campaigns-container">
          {dayCampaigns.map(campaign => (
            <div key={campaign.id} className={`campaign-badge type-${campaign.type}`}>
              {campaign.title}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="calendar-page-container">
      {/* Top Banner for Highest Reach */}
      <div className="highlight-banner">
        <div className="highlight-icon">
          <Trophy size={28} className="text-yellow" />
        </div>
        <div className="highlight-content">
          <h3 className="highlight-title">Ngày có lượt tiếp cận cao nhất</h3>
          <p className="highlight-desc">
            Ngày {highestCampaign.date} - <strong>{highestCampaign.title}</strong> đạt <span className="text-mint font-bold">{highestCampaign.reach.toLocaleString()}</span> lượt tiếp cận.
          </p>
        </div>
      </div>

      {/* Calendar Card */}
      <div className="calendar-card">
        <div className="calendar-header">
          <h2 className="calendar-month-title">Tháng 7, 2026</h2>
          <div className="calendar-nav-buttons">
            <button className="nav-btn"><ChevronLeft size={20} /></button>
            <button className="nav-btn"><ChevronRight size={20} /></button>
          </div>
        </div>

        <div className="calendar-grid">
          {/* Weekday Headers */}
          <div className="weekday-header">Thứ 2</div>
          <div className="weekday-header">Thứ 3</div>
          <div className="weekday-header">Thứ 4</div>
          <div className="weekday-header">Thứ 5</div>
          <div className="weekday-header">Thứ 6</div>
          <div className="weekday-header">Thứ 7</div>
          <div className="weekday-header">Chủ nhật</div>

          {/* Calendar Cells */}
          {calendarCells}
        </div>
      </div>
    </div>
  );
}
