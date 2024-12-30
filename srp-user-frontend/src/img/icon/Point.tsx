import React from 'react';

interface PoinProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  fill?: string;
}

const Poin: React.FC<PoinProps> = ({ width = 2, height = 2, fill = "#676767", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 2 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.999349 1.83317C0.884071 1.83317 0.775738 1.81128 0.674349 1.7675C0.57296 1.72373 0.484766 1.66437 0.409766 1.58942C0.334766 1.51448 0.275405 1.42628 0.231682 1.32484C0.18796 1.22339 0.166071 1.11506 0.166016 0.999837C0.16596 0.884615 0.187849 0.776282 0.231682 0.674837C0.275516 0.573393 0.334877 0.485198 0.409766 0.410254C0.484655 0.335309 0.572849 0.275948 0.674349 0.232171C0.775849 0.188393 0.884182 0.166504 0.999349 0.166504C1.11452 0.166504 1.22285 0.188393 1.32435 0.232171C1.42585 0.275948 1.51404 0.335309 1.58893 0.410254C1.66382 0.485198 1.72321 0.573393 1.7671 0.674837C1.81099 0.776282 1.83285 0.884615 1.83268 0.999837C1.83252 1.11506 1.81063 1.22339 1.76702 1.32484C1.7234 1.42628 1.66404 1.51448 1.58893 1.58942C1.51382 1.66437 1.42563 1.72375 1.32435 1.76759C1.22307 1.81142 1.11474 1.83328 0.999349 1.83317Z"
      fill={fill}
    />
  </svg>
);

export default Poin;