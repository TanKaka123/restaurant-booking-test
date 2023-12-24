import { CarouselMultiple, Text } from "../../components";
import { fontsize } from "../../constants/style";
import colors from "../../constants/theme";
import { useState } from "react";

const ContentBody6 = () => {
  const [indexTabSelected, setIndexTabSelected] = useState(0);
  return (
    <div className="flex flex-col gap-5">
      <Text bold size={fontsize.LARGE}>
        <span className="text-red-600 underline"> Bình luận</span>
      </Text>
      <ul className="flex justify-start gap-10 ">
        {["Có thể bạn quan tâm", "Nhà hàng uy tín"].map((textItem, index) => {
          return (
            <li key={index} className="cursor-pointer">
              <div
                style={{
                  color:
                    indexTabSelected === index ? colors.BLACK : colors.GRAY,
                }}
                onClick={() => setIndexTabSelected(index)}
              >
                {textItem}
              </div>
            </li>
          );
        })}
      </ul>
      <CarouselMultiple />
    </div>
  );
};
export default ContentBody6;
