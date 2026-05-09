export class UpdateBlogMetricsDto {
  viewToken: string;
  viewType: 'signed' | 'unsigned';
  scrollDepth?: number;
  timeSpent?: number;
  bounced?: boolean;
  completed?: boolean;
  shares?: number;
  linkClicks?: number;
  imageClicks?: number;
  ctaClicks?: number;
}
