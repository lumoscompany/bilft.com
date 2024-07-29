import type { ComponentProps } from "solid-js";
import { themeParams } from "./features/telegramIntegration";
import { clsxString } from "./lib/clsxString";

export const YoCoinIcon = (props: ComponentProps<"svg">) =>
  themeParams.isDark ? (
    <svg
      width="82"
      height="82"
      viewBox="0 0 82 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="82" height="82" rx="41" fill="white" />
      <rect
        x="0.2"
        y="0.2"
        width="81.6"
        height="81.6"
        rx="40.8"
        stroke="#545458"
        stroke-opacity="0.65"
        stroke-width="0.4"
      />
      <path
        d="M38.8821 45.4864L24.9697 21.8958H29.6072L41.0848 41.6029L52.3306 21.8958H57.0261L43.0558 45.4864V62.4693H38.8821V45.4864Z"
        fill="black"
      />
      <ellipse
        cx="40.9484"
        cy="21.899"
        rx="2.42401"
        ry="2.37504"
        fill="black"
      />
    </svg>
  ) : (
    <svg
      width="82"
      height="82"
      viewBox="0 0 82 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="82" height="82" rx="41" fill="black" />
      <rect
        x="0.2"
        y="0.2"
        width="81.6"
        height="81.6"
        rx="40.8"
        stroke="#3C3C43"
        stroke-opacity="0.36"
        stroke-width="0.4"
      />
      <path
        d="M38.8821 45.4864L24.9697 21.8958H29.6072L41.0848 41.6029L52.3306 21.8958H57.0261L43.0558 45.4864V62.4693H38.8821V45.4864Z"
        fill="white"
      />
      <ellipse
        cx="40.9484"
        cy="21.899"
        rx="2.42401"
        ry="2.37504"
        fill="white"
      />
    </svg>
  );

export const CloseIcon = (props: ComponentProps<"svg">) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM7.79289 7.79289C8.18342 7.40237 8.81658 7.40237 9.20711 7.79289L12 10.585L14.7929 7.79289C15.1534 7.43241 15.7206 7.40468 16.1129 7.7097L16.2071 7.79289C16.5976 8.18342 16.5976 8.81658 16.2071 9.20711L13.415 12L16.2071 14.7929C16.5676 15.1534 16.5953 15.7206 16.2903 16.1129L16.2071 16.2071C15.8166 16.5976 15.1834 16.5976 14.7929 16.2071L12 13.415L9.20711 16.2071C8.84662 16.5676 8.27939 16.5953 7.8871 16.2903L7.79289 16.2071C7.40237 15.8166 7.40237 15.1834 7.79289 14.7929L10.585 12L7.79289 9.20711C7.43241 8.84662 7.40468 8.27939 7.7097 7.8871L7.79289 7.79289Z"
      fill="currentColor"
    />
  </svg>
);

export const ArrowPointDownIcon = (props: ComponentProps<"svg">) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.15557 2.2952C2.40812 1.96688 2.879 1.90546 3.20732 2.15801L6.00004 4.30625L8.79275 2.15801C9.12107 1.90546 9.59196 1.96688 9.84451 2.2952C10.0971 2.62351 10.0356 3.0944 9.70732 3.34695L6.45732 5.84695C6.18773 6.05432 5.81234 6.05432 5.54275 5.84695L2.29275 3.34695C1.96444 3.0944 1.90302 2.62351 2.15557 2.2952Z"
      fill="currentColor"
    />
  </svg>
);

export const ArrowUpIcon = (props: ComponentProps<"svg">) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28ZM14.6498 7.37729C14.48 7.20016 14.2453 7.1 14 7.1C13.7547 7.1 13.52 7.20016 13.3502 7.37729L8.35021 12.5947C8.00629 12.9535 8.01842 13.5233 8.37729 13.8672C8.73615 14.2111 9.30587 14.199 9.64979 13.8401L13.1 10.2399V20C13.1 20.4971 13.5029 20.9 14 20.9C14.4971 20.9 14.9 20.4971 14.9 20V10.2399L18.3502 13.8401C18.6941 14.199 19.2638 14.2111 19.6227 13.8672C19.9816 13.5233 19.9937 12.9535 19.6498 12.5947L14.6498 7.37729Z"
      class="transition-[fill]"
    />
  </svg>
);

export const ArrowPointUp = (props: ComponentProps<"svg">) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 10L8 5L13 10"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const UnlinkIcon = (props: ComponentProps<"svg">) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.499 3.19072C12.0076 3.15057 11.3783 3.15005 10.485 3.15005H9.67504C9.30225 3.15005 9.00004 2.84784 9.00004 2.47505C9.00004 2.10226 9.30225 1.80005 9.67504 1.80005H10.5144C11.3716 1.80004 12.0561 1.80004 12.6089 1.84521C13.1759 1.89153 13.6636 1.98872 14.1116 2.21695C14.8313 2.58366 15.4164 3.16882 15.7831 3.88854C16.0114 4.33646 16.1086 4.82416 16.1549 5.39117C16.2001 5.944 16.2 6.62849 16.2 7.48568V10.5144C16.2 11.3716 16.2001 12.0561 16.1549 12.6089C16.1086 13.1759 16.0114 13.6636 15.7831 14.1116C15.4164 14.8313 14.8313 15.4164 14.1116 15.7831C13.6636 16.0114 13.1759 16.1086 12.6089 16.1549C12.0561 16.2001 11.3716 16.2001 10.5144 16.2H9.67922C9.30642 16.2 9.00422 15.8978 9.00422 15.525C9.00422 15.1523 9.30642 14.85 9.67922 14.85H10.485C11.3783 14.85 12.0076 14.8495 12.499 14.8094C12.9825 14.7699 13.2728 14.6954 13.4987 14.5803C13.9644 14.343 14.343 13.9644 14.5803 13.4987C14.6954 13.2728 14.7699 12.9825 14.8094 12.499C14.8495 12.0076 14.85 11.3783 14.85 10.485V7.51505C14.85 6.62183 14.8495 5.99251 14.8094 5.5011C14.7699 5.01758 14.6954 4.72732 14.5803 4.50142C14.343 4.03572 13.9644 3.65709 13.4987 3.41981C13.2728 3.30471 12.9825 3.23023 12.499 3.19072ZM7.39775 6.27275C7.66135 6.00915 8.08874 6.00915 8.35234 6.27275L10.6023 8.52273C10.7289 8.64932 10.8 8.82101 10.8 9.00003C10.8001 9.17905 10.7289 9.35074 10.6023 9.47733L8.35235 11.7273C8.08875 11.9909 7.66136 11.9909 7.39775 11.7273C7.13415 11.4637 7.13415 11.0364 7.39775 10.7728L8.49546 9.67503L2.47505 9.67505C2.10226 9.67505 1.80005 9.37284 1.80005 9.00005C1.80005 8.62726 2.10226 8.32505 2.47505 8.32505L8.49545 8.32503L7.39775 7.22735C7.13415 6.96374 7.13415 6.53636 7.39775 6.27275Z"
      fill="currentColor"
    />
  </svg>
);

export const RefreshIcon = (props: ComponentProps<"svg">) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.4517 3.62616L12.4512 3.62709C12.3535 3.7875 12.3283 3.96174 12.3707 4.12655C12.4127 4.29007 12.5193 4.43691 12.6726 4.55023L12.6726 4.55026L12.6748 4.55183C14.0849 5.53549 14.9981 7.15946 15.0047 8.99709C15.0113 12.0494 12.5039 14.4976 9.3753 14.4976C6.24702 14.4976 3.75262 12.0496 3.75262 8.99673C3.75262 6.4195 5.53259 4.27277 7.97439 3.67339V4.48958C7.97439 4.74374 8.06539 4.94036 8.24504 5.02071C8.41969 5.09882 8.63328 5.04578 8.83218 4.90796C8.83225 4.90791 8.83231 4.90787 8.83237 4.90783L10.9814 3.43257C10.9816 3.43248 10.9817 3.43238 10.9819 3.43228C11.1522 3.31746 11.2545 3.16 11.2556 2.9862C11.2567 2.81227 11.1563 2.65125 10.983 2.52974L10.9823 2.52926L8.83939 1.05361C8.83931 1.05355 8.83922 1.0535 8.83914 1.05344C8.63753 0.912735 8.42214 0.857271 8.24611 0.935493C8.06492 1.016 7.97439 1.21496 7.97439 1.47166V2.31865C4.81539 2.9645 2.4 5.73173 2.4 8.99673C2.4 12.731 5.56783 15.8178 9.3753 15.8178C13.1896 15.8178 16.3506 12.7309 16.3506 8.99673C16.3506 6.74781 15.187 4.72903 13.4315 3.4798C13.0924 3.22456 12.6538 3.30224 12.4517 3.62616Z"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="0.2"
    />
  </svg>
);

export const SuccessIcon = (props: ComponentProps<"svg">) => (
  <svg
    width="82"
    height="82"
    viewBox="0 0 82 82"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M41 0C63.6437 0 82 18.3563 82 41C82 63.6437 63.6437 82 41 82C18.3563 82 0 63.6437 0 41C0 18.3563 18.3563 0 41 0ZM41 6.83333C22.1303 6.83333 6.83333 22.1303 6.83333 41C6.83333 59.8697 22.1303 75.1667 41 75.1667C59.8697 75.1667 75.1667 59.8697 75.1667 41C75.1667 22.1303 59.8697 6.83333 41 6.83333ZM55.6575 28.3242C56.9918 26.9899 59.1749 26.9899 60.5092 28.3242C61.8435 29.6585 61.8435 31.8415 60.5092 33.1758L36.5826 57.0826C35.2483 58.4169 33.085 58.4169 31.7507 57.0826L19.7924 45.1243C18.4581 43.79 18.4581 41.6267 19.7924 40.2924C21.1267 38.9581 23.29 38.9581 24.6243 40.2924L34.1667 49.8348L55.6575 28.3242Z"
      fill="#30D158"
    />
  </svg>
);

export const AnonymousAvatarIcon = (props: ComponentProps<"svg">) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#clip0_1407_15170)">
      <rect width="40" height="40" rx="20" fill="currentFill" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.6566 12.7083H21.3435C22.2478 12.7083 22.982 12.7083 23.5727 12.7789C24.1885 12.8526 24.7174 13.0093 25.1796 13.3702C25.6418 13.731 25.9221 14.2061 26.1429 14.7857C26.3547 15.3416 26.5328 16.0539 26.7521 16.9312L27.1547 18.5416H28.3334C28.6785 18.5416 28.9584 18.8215 28.9584 19.1666C28.9584 19.5118 28.6785 19.7916 28.3334 19.7916H26.6798C26.6707 19.7918 26.6617 19.7918 26.6527 19.7916H13.3474C13.3384 19.7918 13.3293 19.7918 13.3203 19.7916H11.6667C11.3215 19.7916 11.0417 19.5118 11.0417 19.1666C11.0417 18.8215 11.3215 18.5416 11.6667 18.5416H12.8454L13.248 16.9312C13.4673 16.0539 13.6454 15.3416 13.8571 14.7857C14.0779 14.2061 14.3583 13.731 14.8205 13.3702C15.2826 13.0093 15.8115 12.8526 16.4274 12.7789C17.018 12.7083 17.7523 12.7083 18.6566 12.7083ZM14.1338 18.5416H25.8662L25.5488 17.2722C25.3178 16.348 25.1569 15.7086 24.9748 15.2307C24.7987 14.7685 24.6263 14.5241 24.4103 14.3554C24.1943 14.1868 23.9154 14.0788 23.4243 14.0201C22.9164 13.9594 22.2571 13.9583 21.3045 13.9583H18.6956C17.7429 13.9583 17.0836 13.9594 16.5758 14.0201C16.0846 14.0788 15.8057 14.1868 15.5897 14.3554C15.3738 14.5241 15.2013 14.7685 15.0252 15.2307C14.8432 15.7086 14.6822 16.348 14.4512 17.2722L14.1338 18.5416ZM15.4167 22.2916C14.151 22.2916 13.125 23.3177 13.125 24.5833C13.125 25.849 14.151 26.875 15.4167 26.875C16.6823 26.875 17.7084 25.849 17.7084 24.5833C17.7084 23.3177 16.6823 22.2916 15.4167 22.2916ZM11.875 24.5833C11.875 22.6273 13.4607 21.0416 15.4167 21.0416C17.0483 21.0416 18.4222 22.1449 18.833 23.6461C19.5816 23.3447 20.4185 23.3447 21.167 23.6461C21.5779 22.1449 22.9518 21.0416 24.5834 21.0416C26.5394 21.0416 28.125 22.6273 28.125 24.5833C28.125 26.5393 26.5394 28.125 24.5834 28.125C22.7617 28.125 21.2612 26.7496 21.0637 24.9806L20.8385 24.868C20.3107 24.6041 19.6894 24.6041 19.1615 24.868L18.9363 24.9806C18.7389 26.7496 17.2384 28.125 15.4167 28.125C13.4607 28.125 11.875 26.5393 11.875 24.5833ZM24.5834 22.2916C23.3177 22.2916 22.2917 23.3177 22.2917 24.5833C22.2917 25.849 23.3177 26.875 24.5834 26.875C25.849 26.875 26.875 25.849 26.875 24.5833C26.875 23.3177 25.849 22.2916 24.5834 22.2916Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="0.8"
        stroke-linecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1407_15170">
        <rect width="40" height="40" rx="20" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);

export const ArrowDownIcon = (props: ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="11"
    viewBox="0 0 20 11"
    {...props}
    class={clsxString("origin-center rotate-180", props.class ?? "")}
  >
    <g fill="none" fill-rule="evenodd">
      <g fill="currentColor" transform="translate(-260 -6684)">
        <g transform="translate(56 160)">
          <path d="M223.708 6534.634c.39-.405.39-1.06 0-1.464l-8.264-8.563a1.95 1.95 0 0 0-2.827 0l-8.325 8.625c-.385.4-.39 1.048-.01 1.454a.976.976 0 0 0 1.425.01l7.617-7.893a.975.975 0 0 1 1.414 0l7.557 7.83a.974.974 0 0 0 1.413 0" />
        </g>
      </g>
    </g>
  </svg>
);

export const ShareProfileIcon = (props: ComponentProps<"svg">) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.7071 8.29289C21.0976 8.68342 21.0976 9.31658 20.7071 9.70711C20.3166 10.0976 19.6834 10.0976 19.2929 9.70711L15 5.41421L15 17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17L13 5.41421L8.70711 9.70711C8.31658 10.0976 7.68342 10.0976 7.29289 9.70711C6.90237 9.31658 6.90237 8.68342 7.29289 8.29289L13.2928 2.29303L13.2929 2.29289C13.4874 2.09839 13.7421 2.00076 13.997 2C13.998 2 13.999 2 14 2C14.001 2 14.002 2 14.003 2C14.1375 2.0004 14.2657 2.02735 14.3828 2.07588C14.499 2.12395 14.6079 2.19487 14.7028 2.28864M20.7071 8.29289L14.7076 2.29342L20.7071 8.29289ZM4 17.6428V16C4 15.4477 4.44772 15 5 15C5.55229 15 6 15.4477 6 16L6 17.6C6 18.7366 6.00078 19.5289 6.05118 20.1458C6.10062 20.7509 6.19279 21.0986 6.32698 21.362C6.6146 21.9265 7.07354 22.3854 7.63803 22.673C7.90138 22.8072 8.24907 22.8994 8.85424 22.9488C9.47108 22.9992 10.2634 23 11.4 23H16.6C17.7366 23 18.5289 22.9992 19.1458 22.9488C19.7509 22.8994 20.0986 22.8072 20.362 22.673C20.9265 22.3854 21.3854 21.9265 21.673 21.362C21.8072 21.0986 21.8994 20.7509 21.9488 20.1458C21.9992 19.5289 22 18.7366 22 17.6V16C22 15.4477 22.4477 15 23 15C23.5523 15 24 15.4477 24 16V17.6428V17.6429C24 18.7267 24 19.6008 23.9422 20.3086C23.8826 21.0375 23.7568 21.6777 23.455 22.27C22.9757 23.2108 22.2108 23.9757 21.27 24.455C20.6777 24.7568 20.0375 24.8826 19.3086 24.9422C18.6008 25 17.7266 25 16.6429 25H16.6428H11.3572C10.2734 25 9.39926 25 8.69138 24.9422C7.96253 24.8826 7.32234 24.7568 6.73005 24.455C5.78924 23.9757 5.02433 23.2108 4.54497 22.27C4.24318 21.6777 4.11737 21.0375 4.05782 20.3086C3.99998 19.6007 3.99999 18.7266 4 17.6428V17.6428Z"
      fill="currentColor"
    />
  </svg>
);

export const LockIcon = (props: ComponentProps<"svg">) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.1 4V3.9999C10.0999 2.28786 8.71205 0.9 7 0.9C5.28793 0.9 3.90003 2.28789 3.9 3.99995C3.9 3.99997 3.9 3.99998 3.9 4L3.89952 4.91831C3.51834 4.95008 3.25518 5.02645 2.98441 5.17126C2.6354 5.35791 2.35791 5.6354 2.17126 5.98441C1.96748 6.36545 1.9 6.73058 1.9 7.42291V10.5771C1.9 11.2694 1.96748 11.6346 2.17126 12.0156C2.35791 12.3646 2.6354 12.6421 2.98441 12.8287C3.36545 13.0325 3.73058 13.1 4.42291 13.1H9.57709C10.2694 13.1 10.6346 13.0325 11.0156 12.8287C11.3646 12.6421 11.6421 12.3646 11.8287 12.0156C12.0325 11.6346 12.1 11.2694 12.1 10.5771V7.42291C12.1 6.73058 12.0325 6.36545 11.8287 5.98441C11.6421 5.6354 11.3646 5.35791 11.0156 5.17126C10.7449 5.02651 10.4819 4.95015 10.1009 4.91835L10.1 4ZM3.55033 6.22944C3.72261 6.1373 3.8913 6.1 4.42291 6.1H9.57709C10.1087 6.1 10.2774 6.1373 10.4497 6.22944C10.5896 6.30425 10.6958 6.41044 10.7706 6.55032C10.8627 6.72261 10.9 6.8913 10.9 7.42291V10.5771C10.9 11.1087 10.8627 11.2774 10.7706 11.4497C10.6958 11.5896 10.5896 11.6958 10.4497 11.7706C10.2774 11.8627 10.1087 11.9 9.57709 11.9H4.42291C3.8913 11.9 3.72261 11.8627 3.55033 11.7706C3.41044 11.6958 3.30425 11.5896 3.22944 11.4497C3.1373 11.2774 3.1 11.1087 3.1 10.5771V7.42291C3.1 6.8913 3.1373 6.72261 3.22944 6.55033C3.30425 6.41044 3.41044 6.30425 3.55033 6.22944ZM7.6 8C7.6 7.66863 7.33137 7.4 7 7.4C6.66863 7.4 6.4 7.66863 6.4 8V9.5C6.4 9.83137 6.66863 10.1 7 10.1C7.33137 10.1 7.6 9.83137 7.6 9.5V8ZM5.1 4C5.1 2.95066 5.95066 2.1 7 2.1C8.04934 2.1 8.9 2.95066 8.9 4V4.9H5.1V4Z"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="0.2"
    />
  </svg>
);

export const AnonymousHintIcon = (props: ComponentProps<"svg">) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#clip0_1864_10136)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9005 2.04883H16.0995C17.5128 2.04881 18.6602 2.04879 19.5833 2.1583C20.5458 2.27248 21.3723 2.5155 22.0946 3.07499C22.8169 3.63448 23.255 4.37102 23.6 5.26964C23.931 6.13155 24.2093 7.23594 24.552 8.59615L25.1812 11.093H27.0233C27.5627 11.093 28 11.5268 28 12.062C28 12.5972 27.5627 13.031 27.0233 13.031H24.439C24.4249 13.0313 24.4108 13.0313 24.3967 13.031H3.60329C3.58923 13.0313 3.57512 13.0313 3.56097 13.031H0.976744C0.437303 13.031 0 12.5972 0 12.062C0 11.5268 0.437303 11.093 0.976744 11.093H2.81878L3.44796 8.59615C3.79071 7.23594 4.06899 6.13155 4.39996 5.26964C4.74504 4.37102 5.18314 3.63448 5.90544 3.07499C6.62774 2.5155 7.45424 2.27248 8.41667 2.1583C9.33978 2.04879 10.4872 2.04881 11.9005 2.04883ZM4.83239 11.093H23.1676L22.6717 9.12484C22.3106 7.69191 22.0591 6.70061 21.7745 5.9596C21.4993 5.24295 21.2299 4.864 20.8924 4.60256C20.5548 4.34112 20.1189 4.17368 19.3514 4.08263C18.5578 3.98848 17.5274 3.98686 16.0386 3.98686H11.9614C10.4726 3.98686 9.44224 3.98848 8.64861 4.08263C7.88107 4.17368 7.44515 4.34112 7.10764 4.60256C6.77013 4.864 6.50066 5.24295 6.22546 5.9596C5.94091 6.70061 5.68944 7.69191 5.32835 9.12484L4.83239 11.093ZM6.83721 16.9071C4.85926 16.9071 3.25581 18.4979 3.25581 20.4602C3.25581 22.4225 4.85926 24.0132 6.83721 24.0132C8.81516 24.0132 10.4186 22.4225 10.4186 20.4602C10.4186 18.4979 8.81516 16.9071 6.83721 16.9071ZM1.30233 20.4602C1.30233 17.4275 3.78038 14.9691 6.83721 14.9691C9.38702 14.9691 11.5341 16.6796 12.1762 19.0071C13.3461 18.5398 14.6539 18.5398 15.8238 19.0071C16.4659 16.6796 18.613 14.9691 21.1628 14.9691C24.2196 14.9691 26.6977 17.4275 26.6977 20.4602C26.6977 23.4928 24.2196 25.9513 21.1628 25.9513C18.3159 25.9513 15.9709 23.8188 15.6623 21.0761L15.3104 20.9016C14.4855 20.4924 13.5145 20.4924 12.6896 20.9016L12.3377 21.0761C12.0291 23.8188 9.68415 25.9513 6.83721 25.9513C3.78038 25.9513 1.30233 23.4928 1.30233 20.4602ZM21.1628 16.9071C19.1848 16.9071 17.5814 18.4979 17.5814 20.4602C17.5814 22.4225 19.1848 24.0132 21.1628 24.0132C23.1407 24.0132 24.7442 22.4225 24.7442 20.4602C24.7442 18.4979 23.1407 16.9071 21.1628 16.9071Z"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="0.273171"
        stroke-linecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1864_10136">
        <rect width="28" height="28" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const PublicHintIcon = (props: ComponentProps<"svg">) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26.1707 14C26.1707 7.27829 20.7217 1.82927 14 1.82927C7.27829 1.82927 1.82927 7.27829 1.82927 14C1.82927 20.7217 7.27829 26.1707 14 26.1707C20.7217 26.1707 26.1707 20.7217 26.1707 14ZM3.67073 14C3.67073 8.2953 8.2953 3.67073 14 3.67073C19.7047 3.67073 24.3293 8.2953 24.3293 14C24.3293 19.7047 19.7047 24.3293 14 24.3293C8.2953 24.3293 3.67073 19.7047 3.67073 14ZM14.9207 9C14.9207 8.49149 14.5085 8.07927 14 8.07927C13.4915 8.07927 13.0793 8.49149 13.0793 9V13.0793H9C8.49149 13.0793 8.07927 13.4915 8.07927 14C8.07927 14.5085 8.49149 14.9207 9 14.9207H13.0793V19C13.0793 19.5085 13.4915 19.9207 14 19.9207C14.5085 19.9207 14.9207 19.5085 14.9207 19V14.9207H19C19.5085 14.9207 19.9207 14.5085 19.9207 14C19.9207 13.4915 19.5085 13.0793 19 13.0793H14.9207V9Z"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="0.341463"
    />
  </svg>
);

export const PrivateHintIcon = (props: ComponentProps<"svg">) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.9999 0C17.847 0 20.9657 3.13401 20.9657 7L20.9681 9.35986C21.9466 9.42079 22.5709 9.59285 23.2144 9.9387C23.9843 10.3525 24.5955 10.9666 25.0072 11.7403C25.4545 12.5807 25.6097 13.3882 25.6097 14.9868V22.3465C25.6097 23.9451 25.4545 24.7527 25.0072 25.593C24.5955 26.3667 23.9843 26.9809 23.2144 27.3946C22.3782 27.844 21.5745 28 19.9838 28H8.01603C6.42527 28 5.62161 27.844 4.78538 27.3946C4.01547 26.9809 3.4043 26.3667 2.99255 25.593C2.54533 24.7527 2.39014 23.9451 2.39014 22.3465V14.9868C2.39014 13.3882 2.54533 12.5807 2.99255 11.7403C3.4043 10.9666 4.01547 10.3525 4.78538 9.9387C5.42917 9.59271 6.05364 9.42066 7.03282 9.35979L7.03404 7C7.03404 3.13401 10.1528 0 13.9999 0ZM19.9838 11.6667H8.01603C6.7758 11.6667 6.33427 11.7523 5.88041 11.9963C5.51515 12.1926 5.23542 12.4737 5.04008 12.8407C4.79735 13.2968 4.71209 13.7405 4.71209 14.9868V22.3465C4.71209 23.5928 4.79735 24.0365 5.04008 24.4926C5.23542 24.8597 5.51515 25.1408 5.88041 25.3371C6.33427 25.581 6.7758 25.6667 8.01603 25.6667H19.9838C21.224 25.6667 21.6655 25.581 22.1194 25.3371C22.4846 25.1408 22.7644 24.8597 22.9597 24.4926C23.2024 24.0365 23.2877 23.5928 23.2877 22.3465V14.9868C23.2877 13.7405 23.2024 13.2968 22.9597 12.8407C22.7644 12.4737 22.4846 12.1926 22.1194 11.9963C21.6655 11.7523 21.224 11.6667 19.9838 11.6667ZM13.9999 15.1667C14.6411 15.1667 15.1609 15.689 15.1609 16.3333V19.8333C15.1609 20.4777 14.6411 21 13.9999 21C13.3587 21 12.8389 20.4777 12.8389 19.8333V16.3333C12.8389 15.689 13.3587 15.1667 13.9999 15.1667ZM13.9999 2.33333C11.4351 2.33333 9.35599 4.42267 9.35599 7V9.33333H18.6438V7C18.6438 4.42267 16.5647 2.33333 13.9999 2.33333Z"
      fill="currentColor"
    />
  </svg>
);
