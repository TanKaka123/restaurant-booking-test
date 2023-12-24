import { fontsize } from "../../constants/style";
import Text from "../../components/text"; 
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const ContentBody3 = () => {
  return (
    <div className="flex flex-col gap-3">
      <Text bold size={fontsize.LARGE}>
        {" "}
        Tiện ích:
      </Text>
      <div className="grid grid-cols-2 px-2 flex flex-col gap-5">
        <Text>
          <FaCheckCircle className="inline mr-2 text-green-600" /> Máy chiếu
        </Text>
        <Text>
          <FaCheckCircle className="inline mr-2 text-green-600" /> Karaoke
        </Text>
        <Text>
          <FaCheckCircle className="inline mr-2 text-green-600" /> Âm thanh -
          ánh sáng
        </Text>
        <Text>
          <FaCheckCircle className="inline mr-2 text-green-600" /> Điều hòa
        </Text>
        <Text>
          <FaCheckCircle className="inline mr-2 text-green-600" /> HĐ trực tiếp
        </Text>
        <Text>
          <FaCheckCircle className="inline mr-2 text-green-600" /> Trang trí sự
          kiện
        </Text>
        <Text>
          <FaCheckCircle className="inline mr-2 text-green-600" /> Ghế trẻ em
        </Text>
        <Text>
          <FaCheckCircle className="inline mr-2 text-green-600" /> Visa / Master
          card
        </Text>
        <Text>
          <FaCheckCircle className="inline mr-2 text-green-600" /> Chỗ hút thuốc
        </Text>
        <Text>
          <FaCheckCircle className="inline mr-2 text-green-600" /> Hóa đơn VAT
        </Text>
        <Text>
          <FaCheckCircle className="inline mr-2 text-green-600" /> Chỗ để ô tô
          (miễn phí)
        </Text>
        <Text>
          <FaCheckCircle className="inline mr-2 text-green-600" /> Wifi
        </Text>
        <Text>
          <FaCheckCircle className="inline mr-2 text-green-600" /> Bàn ngoài
          trời
        </Text>
        <Text>
          <FaCheckCircle className="inline mr-2 text-green-600" />
          Chỗ chơi trẻ em
        </Text>

        <Text>
          <FaCheckCircle className="inline mr-2 text-green-600" /> Bóng đá K+
        </Text>
        <Text>
          <IoMdCloseCircle className="inline mr-2 text-red-600" /> Đặt ship
          PasGo
        </Text>
        <Text>
          <FaCheckCircle className="inline mr-2 text-green-600" /> Set lunch
        </Text>
        <Text>
          <IoMdCloseCircle className="inline mr-2 text-red-600" />
          MC dẫn chương trình
        </Text>
        <Text></Text>
        <Text>
          <IoMdCloseCircle className="inline mr-2 text-red-600" />
          Phòng riêng
        </Text>
      </div>
    </div>
  );
};
export default ContentBody3;
