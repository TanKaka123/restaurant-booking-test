import { Link } from "react-router-dom";
import { fontsize } from "../../constants/style";
import { Text } from "../../components";
import { IoLocationOutline } from "react-icons/io5";
import { Restaurant } from "../../types/restaurant";

const ContentBody1 = ({ restaurantItem }: { restaurantItem: Restaurant }) => {
  return (
    <div className="flex flex-col gap-5">
      <Text bold size={fontsize.XLARGE}>
        {restaurantItem.title}
      </Text>
      <Text size={fontsize.SMALL}>
        <IoLocationOutline className="inline" /> {restaurantItem.address}
      </Text>
      <Text size={fontsize.SMALL}>
        Loại hình: <span className="text-red-600">Gọi món Á - Âu</span> | Khoảng
        giá : {restaurantItem.priceStart} - {restaurantItem.priceEnd} đ/người
      </Text>
      <Text size={fontsize.SMALL}>Thẻ tag:</Text>
      <Text size={fontsize.SMALL}>
        <span className="text-blue-600 mr-5">Đang mở cửa: </span> 07:00 - 23:00
      </Text>
      <ul className="flex justify-around">
        <li>
          <Link to="/">Ưu đãi </Link>
        </li>
        <li>
          <Link to="/">Giới thiệu</Link>
        </li>
        <li>
          <Link to="/">Bảng giá</Link>
        </li>
        <li>
          <Link to="/">Địa chỉ</Link>
        </li>

        <li>
          <Link to="/">Bình luận</Link>
        </li>
      </ul>
    </div>
  );
};
export default ContentBody1;
