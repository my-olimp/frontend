import { Slider } from "./../../features/slider/slider";
import { SliderTitle } from "./../../features/sliderTitle/sliderTitle";
import { FC, useState } from "react";
import { sliderData, sliderDataType } from "./lib/index";
import styles from "./team.module.scss";

export const Team: FC = () => {
  const [data, setData] = useState<sliderDataType[]>(sliderData);

  const handleCardClick = (id: number) => {
    const updatedData = data.map((element: sliderDataType, index: number) => {
      return {
        ...element,
        isActive: index === id,
      };
    });
    setData(updatedData);
  };

  const handleArrowClick = (type: "left" | "right") => {
    const activeElementId = data.findIndex(
      (element: sliderDataType) => element.isActive
    );
    const updatedData = data.map((element: sliderDataType, index: number) => {
      const isActive =
        (type === "left" && index === activeElementId - 1) ||
        (type === "right" && index === activeElementId + 1) ||
        (type === "left" &&
          index === data.length - 1 &&
          activeElementId === 0) ||
        (type === "right" &&
          index === 0 &&
          activeElementId === data.length - 1);
      return {
        ...element,
        isActive,
      };
    });
    setData(updatedData);
  };
  return (
    <div className={styles.screen}>
      <div className={styles.wrap}>
        <SliderTitle handleClick={handleArrowClick} />
        <Slider data={data} handleClick={handleCardClick} />
      </div>
    </div>
  );
};
