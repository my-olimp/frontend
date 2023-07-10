import { FC } from "react";
import styles from "./arrows.module.scss";

interface props {
  handleClick: (type: "left" | "right") => void;
}

export const Arrows: FC<props> = ({ handleClick }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.left} onClick={() => handleClick("left")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.9998 44C35.0458 44 43.9998 35.046 43.9998 24C43.9998 12.954 35.0458 3.99997 23.9998 3.99997C12.9538 3.99997 3.99976 12.954 3.99976 24C3.99976 35.046 12.9538 44 23.9998 44ZM28.0598 16.94C28.3407 17.2212 28.4984 17.6025 28.4984 18C28.4984 18.3975 28.3407 18.7787 28.0598 19.06L23.1198 24L28.0598 28.94C28.2071 29.0773 28.3253 29.2429 28.4073 29.4269C28.4893 29.6109 28.5334 29.8095 28.5369 30.0109C28.5405 30.2123 28.5034 30.4124 28.428 30.5992C28.3526 30.7859 28.2403 30.9556 28.0978 31.098C27.9554 31.2405 27.7857 31.3528 27.5989 31.4282C27.4122 31.5037 27.2121 31.5407 27.0107 31.5372C26.8093 31.5336 26.6107 31.4895 26.4267 31.4075C26.2427 31.3255 26.0771 31.2073 25.9398 31.06L19.9398 25.06C19.6589 24.7787 19.5011 24.3975 19.5011 24C19.5011 23.6025 19.6589 23.2212 19.9398 22.94L25.9398 16.94C26.221 16.6591 26.6023 16.5013 26.9998 16.5013C27.3973 16.5013 27.7785 16.6591 28.0598 16.94Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className={styles.right} onClick={() => handleClick("right")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.0002 4.00006C12.9542 4.00006 4.00024 12.9541 4.00024 24.0001C4.00024 35.0461 12.9542 44.0001 24.0002 44.0001C35.0462 44.0001 44.0002 35.0461 44.0002 24.0001C44.0002 12.9541 35.0462 4.00006 24.0002 4.00006ZM19.9402 31.0601C19.6593 30.7788 19.5016 30.3976 19.5016 30.0001C19.5016 29.6026 19.6593 29.2213 19.9402 28.9401L24.8802 24.0001L19.9402 19.0601C19.7929 18.9227 19.6747 18.7571 19.5927 18.5731C19.5107 18.3891 19.4666 18.1905 19.4631 17.9891C19.4595 17.7877 19.4966 17.5876 19.572 17.4009C19.6474 17.2141 19.7597 17.0444 19.9022 16.902C20.0446 16.7596 20.2143 16.6473 20.401 16.5718C20.5878 16.4964 20.7879 16.4593 20.9893 16.4629C21.1907 16.4664 21.3893 16.5105 21.5733 16.5925C21.7573 16.6745 21.9229 16.7927 22.0602 16.9401L28.0602 22.9401C28.3411 23.2213 28.4989 23.6026 28.4989 24.0001C28.4989 24.3976 28.3411 24.7788 28.0602 25.0601L22.0602 31.0601C21.779 31.341 21.3977 31.4987 21.0002 31.4987C20.6027 31.4987 20.2215 31.341 19.9402 31.0601Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};
