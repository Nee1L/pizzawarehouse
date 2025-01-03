import React from "react";
interface likeIconProps {
  fillColor?: string;
  width?: number;
  height?: number;
}
const LikeIcon: React.FC<likeIconProps> = ({
  fillColor = "#939393",
  width = 16,
  height = 16,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.00008 14.6666H12.0001C12.5534 14.6666 13.0267 14.3333 13.2267 13.8533L15.2401 9.15325C15.3001 8.99992 15.3334 8.83992 15.3334 8.66659V7.33325C15.3334 6.59992 14.7334 5.99992 14.0001 5.99992H9.79341L10.4267 2.95325L10.4467 2.73992C10.4467 2.46659 10.3334 2.21325 10.1534 2.03325L9.44675 1.33325L5.05341 5.72659C4.81341 5.96659 4.66675 6.29992 4.66675 6.66659V13.3333C4.66675 14.0666 5.26675 14.6666 6.00008 14.6666ZM6.00008 6.66659L8.89341 3.77325L8.00008 7.33325H14.0001V8.66659L12.0001 13.3333H6.00008V6.66659ZM0.666748 6.66659H3.33341V14.6666H0.666748V6.66659Z"
      fill={fillColor}
    />
  </svg>
);
export default LikeIcon;
