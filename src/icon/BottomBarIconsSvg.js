export const BottomBarIconsSvg = ({ content, isActive }) => {
  const fill = isActive ? `#1363ff` : '#888';

  const Config = {
    Home: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="none"
        viewBox="0 0 26 26"
      >
        <g clipPath="url(#a)">
          <path
            fill={fill}
            d="M14.3 2.87a2.167 2.167 0 0 0-2.6 0L4.117 8.559a2.167 2.167 0 0 0-.867 1.734v10.291a2.167 2.167 0 0 0 2.167 2.167h4.225a1.192 1.192 0 0 0 1.191-1.192V16.25a2.167 2.167 0 0 1 4.334 0v5.308a1.192 1.192 0 0 0 1.191 1.192h4.225a2.167 2.167 0 0 0 2.167-2.167V10.292a2.167 2.167 0 0 0-.867-1.734L14.3 2.871Z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h26v26H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
    Activity: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="none"
        viewBox="0 0 26 26"
      >
        <path
          fill={fill}
          d="M10.833 2.167h4.334a2.167 2.167 0 0 1 2.166 2.166V6.5h4.334a2.167 2.167 0 0 1 2.166 2.167v11.916a2.166 2.166 0 0 1-2.166 2.167H4.333a2.167 2.167 0 0 1-2.166-2.167V8.667A2.16 2.16 0 0 1 4.333 6.5h4.334V4.333a2.16 2.16 0 0 1 2.166-2.166ZM15.167 6.5V4.333h-4.334V6.5h4.334Z"
        />
      </svg>
    ),
    Badge: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="26"
        fill="none"
        viewBox="0 0 27 26"
      >
        <path
          fill={fill}
          d="m11.584 15.175-.917 7.575 3.791-2.494 3.792 2.494-.918-7.583"
        />
        <path
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.853"
          d="m11.584 15.175-.917 7.575 3.791-2.494 3.792 2.494-.918-7.583"
        />
        <path
          fill={fill}
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.083"
          d="M14.458 15.167a7.042 7.042 0 1 0 0-14.084 7.042 7.042 0 0 0 0 14.084Z"
        />
      </svg>
    ),
    Community: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="none"
        viewBox="0 0 26 26"
      >
        <rect width="20" height="14" x="3" y="3" fill={fill} rx="4" />
        <path
          fill={fill}
          d="M21.193 20.527 13.5 10l9.5 1.5v8.437c0 .967-1.237 1.37-1.807.59Z"
        />
      </svg>
    ),
    Mypage: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="none"
        viewBox="0 0 26 26"
      >
        <g clipPath="url(#a)">
          <path
            fill={fill}
            d="M17.117 14.03c1.326 0 2.6.511 3.558 1.428.958.917 1.525 4.281 1.582 5.606l.005.224v1.029a2.058 2.058 0 0 1-1.904 2.053l-.154.005H5.796a2.059 2.059 0 0 1-2.053-1.904l-.006-.154v-1.03c0-1.325.513-4.713 1.43-5.67a5.146 5.146 0 0 1 3.493-1.583l.223-.005h8.234ZM13 2.707A5.146 5.146 0 1 1 13 13a5.146 5.146 0 0 1 0-10.292Z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h26v26H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  };

  return Config[content];
};
