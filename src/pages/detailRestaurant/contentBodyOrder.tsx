import { useNavigate } from "react-router-dom";
import { corner, fontsize } from "../../constants/style";
import { Text, Button, Input } from "../../components";
import { adult_limit_array, children_limit_array } from "../../constants/data";

const ContentBodyOrder = () => {
  const navigate = useNavigate();
  const goToTransactionPage = () => {
    navigate("/transaction-information");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    goToTransactionPage();
  };

  return (
    <div className="flex flex-col gap-3">
      <Text bold size={fontsize.LARGE}>
        Đặt chỗ
      </Text>
      <Text bold size={fontsize.SMALL}>
        <span className="text-red-600 ">Giảm 10%</span>
      </Text>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex justify-between items-center gap-3">
          <Input
            type="select"
            label="Người lớn: "
            options={adult_limit_array}
          />
          <Input
            type="select"
            label="Trẻ em: "
            options={children_limit_array}
          />
        </div>
        <div className="flex justify-between items-end gap-2">
          <Input type="date" label="Thời gian đến" />
          <Input type="hour" label={"  "} />
        </div>
        <Button type="submit" content="Tạo đơn" round={corner.corner_04} />
      </form>
    </div>
  );
};

export default ContentBodyOrder;
