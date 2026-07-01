export type CampaignType = 'mint' | 'yellow';

export interface Campaign {
  id: string;
  title: string;
  date: number; // Day of the month
  reach: number;
  type: CampaignType;
}

export const mockCampaigns: Campaign[] = [
  { id: '1', title: 'Giảm giá cuối tuần', date: 3, reach: 5200, type: 'yellow' },
  { id: '2', title: 'Back to school', date: 15, reach: 15400, type: 'mint' },
  { id: '3', title: 'Flash sale', date: 15, reach: 8900, type: 'yellow' },
  { id: '4', title: 'Sự kiện ra mắt tính năng', date: 22, reach: 12000, type: 'mint' },
  { id: '5', title: 'Khuyến mãi thành viên mới', date: 28, reach: 6500, type: 'yellow' },
  { id: '6', title: 'Mini game', date: 10, reach: 4300, type: 'mint' }
];

// Helper function to get highest reach campaign
export const getHighestReachCampaign = () => {
  return mockCampaigns.reduce((prev, current) => (prev.reach > current.reach) ? prev : current);
};
