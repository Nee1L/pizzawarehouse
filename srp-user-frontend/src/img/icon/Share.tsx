import React from 'react';

interface ShareProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  fill?: string;
}

const ShareIcon: React.FC<ShareProps> = ({ width = 18, height = 20, fill = "black", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 14.12C14.24 14.12 13.56 14.42 13.04 14.89L5.91 10.74C5.96 10.51 6 10.28 6 10.04C6 9.80004 5.96 9.57004 5.91 9.34004L12.96 5.23004C13.5 5.73004 14.21 6.04004 15 6.04004C16.66 6.04004 18 4.70004 18 3.04004C18 1.38004 16.66 0.0400391 15 0.0400391C13.34 0.0400391 12 1.38004 12 3.04004C12 3.28004 12.04 3.51004 12.09 3.74004L5.04 7.85004C4.5 7.35004 3.79 7.04004 3 7.04004C1.34 7.04004 0 8.38004 0 10.04C0 11.7 1.34 13.04 3 13.04C3.79 13.04 4.5 12.73 5.04 12.23L12.16 16.39C12.11 16.6 12.08 16.82 12.08 17.04C12.08 18.65 13.39 19.96 15 19.96C16.61 19.96 17.92 18.65 17.92 17.04C17.92 15.43 16.61 14.12 15 14.12ZM15 2.04004C15.55 2.04004 16 2.49004 16 3.04004C16 3.59004 15.55 4.04004 15 4.04004C14.45 4.04004 14 3.59004 14 3.04004C14 2.49004 14.45 2.04004 15 2.04004ZM3 11.04C2.45 11.04 2 10.59 2 10.04C2 9.49004 2.45 9.04004 3 9.04004C3.55 9.04004 4 9.49004 4 10.04C4 10.59 3.55 11.04 3 11.04ZM15 18.06C14.45 18.06 14 17.61 14 17.06C14 16.51 14.45 16.06 15 16.06C15.55 16.06 16 16.51 16 17.06C16 17.61 15.55 18.06 15 18.06Z"
      fill={fill}
    />
  </svg>
);

export default ShareIcon;
