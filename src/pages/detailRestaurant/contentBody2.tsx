import { fontsize } from "../../constants/style";
import Text from "../../components/text"; 

const Table = () => {
  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr>
          <th className="border border-black ">Sản phẩm</th>
          <th className="border border-black ">Ưu đãi</th>
          <th className="border border-black ">Áp dụng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-black text-center">Menu đồ ăn</td>
          <td className="border border-black text-center">
            <span className="text-red-600"> -10%</span>
          </td>
          <td className="border border-black text-center">Cả tuần</td>
        </tr>
      </tbody>
    </table>
  );
};
const ContentBody2 = () => {
  return (
    <div className="flex flex-col gap-3">
      <Text bold size={fontsize.LARGE} underline>
        Thông tin đặt chỗ nhà hàng MK Kitchen & Bar - Bến Vân Đồn
      </Text>

      <Text bold size={fontsize.SMALL}>
        I. Đặt chỗ PasGo: Tư vấn - Giữ chỗ{" "}
      </Text>
      <Text>
        - Quý khách vui lòng đặt chỗ trước ít nhất 30 phút để được phục vụ tốt
        nhất
      </Text>
      <Text>- Bàn đặt của Quý khách được giữ tối đa 60 phút</Text>

      <Text bold size={fontsize.SMALL}>
        II. Ưu đãi tặng kèm:
      </Text>
      <Text>
        *Ưu đãi: <span className="text-red-600">Với mọi khách hàng</span> - Áp
        dụng hết 31/12/2023
      </Text>

      <Text bold size={fontsize.SMALL}>
        III. Lưu ý:
      </Text>
      <Text>
        <span className="text-red-600">
          - Giá menu chưa bao gồm VAT. Nhà hàng luôn thu 10% VAT{" "}
        </span>
      </Text>
      <Table />
      <Text>
        - Ưu đãi không áp dụng vào các ngày:
        <span className="text-red-600">Tháng 1</span> (Ngày 1),
        <span className="text-red-600">Tháng 2</span> (Ngày 14),
        <span className="text-red-600">Tháng 3</span> (Ngày 8),
        <span className="text-red-600">Tháng 4</span> (Ngày 30),
        <span className="text-red-600 font-bold">Tháng 5</span> (Ngày 1),
        <span className="text-red-600 font-bold">Tháng 6</span> (Ngày 1),
        <span className="text-red-600">Tháng 9</span> (Ngày 2),
        <span className="text-red-600">Tháng 10</span> (Ngày 20),
        <span className="text-red-600">Tháng 11</span> (Ngày 20),
        <span className="text-red-600">Tháng 12</span> (Ngày 24, 31) &
        <span className="text-red-600">10/3 Âm lịch.</span>
      </Text>

      <Text>- Nhà hàng tính phí khi mang đồ ăn, thức uống từ ngoài vào </Text>
    </div>
  );
};
export default ContentBody2;
