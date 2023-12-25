import { useState } from "react";
import { Text } from "../../components";
import { corner, fontsize, spacing } from "../../constants/style";
import ContentBodyConversation from "../detailRestaurant/contentBodyConversation";
import { Restaurant } from "../../types/restaurant";
import { FormConversation } from "../../types/form";
import DateFormatter from "../../utils/dateFormatter";

interface ReservationViewProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formReservationItem: FormConversation;
  restaurantItem: Restaurant;
}

const ReservationView: React.FC<ReservationViewProps> = ({
  handleInputChange,
  formReservationItem,
  restaurantItem,
}) => {
  const [isEditable, setIsEditable] = useState(false);
  const toggleEditable = () => {
    // setIsEditable(!isEditable);
    console.log("toggleEditable");
  };

  return (
    <>
      {isEditable ? (
        <ContentBodyConversation
          handleInputChange={handleInputChange}
          onSubmit={toggleEditable}
        />
      ) : (
        <div className="border " style={{ borderRadius: corner.corner_08 }}>
          <div
            className="flex justify-between border-solid border-0  border-b-2 "
            style={{ padding: spacing.U5 }}
          >
            <Text size={fontsize.LARGE}>Đặt chỗ</Text>
            {/* <Button
              content="Chỉnh sửa"
              round={corner.corner_04}
              paddings={spacing.U}
              onAction={toggleEditable}
            /> */}
          </div>
          <div style={{ padding: spacing.U5 }} className="flex flex-col gap-5">
            <div className="border-solid border-0  border-b-2  pb-5">
              <Text size={fontsize.MEDIUM}>{restaurantItem.title}</Text>
            </div>

            <div className="border-solid border-0  border-b-2  pb-5">
              <Text size={fontsize.MEDIUM}>
                {" "}
                {formReservationItem.numberAdult} người lớn,{" "}
                {formReservationItem.numberChildren} trẻ em
              </Text>
            </div>

            <div className="border-solid border-0  border-b-2  pb-5">
              <Text size={fontsize.MEDIUM}>
                {formReservationItem.dateArrival &&
                  DateFormatter(
                    formReservationItem.dateArrival.toString()
                  )}{" "}
                {formReservationItem.hourArrival}
              </Text>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationView;
