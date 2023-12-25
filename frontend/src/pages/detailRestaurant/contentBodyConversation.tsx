import { useNavigate } from "react-router-dom";
import { corner, fontsize } from "../../constants/style";
import { Text, Button, Input } from "../../components";
import { adult_limit_array, children_limit_array } from "../../constants/data"; 

interface ContentBodyConversationProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  onSubmit: ()=>void;
}

const ContentBodyConversation: React.FC<ContentBodyConversationProps> = ({
  handleInputChange, onSubmit 
}) => {


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  const onActionTimePick = (selectedDate: any) => {
    handleInputChange({
      target: { name: "dateArrival", value: selectedDate },
    } as React.ChangeEvent<HTMLInputElement>);
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
            name="numberAdult"
            type="select"
            label="Người lớn: "
            options={adult_limit_array}
            onAction={handleInputChange}
          />
          <Input
            name="numberChildren"
            type="select"
            label="Trẻ em: "
            options={children_limit_array}
            onAction={handleInputChange}
          />
        </div>
        <div className="flex justify-between items-end gap-2">
          <Input
            name="dateArrival"
            type="date"
            label="Thời gian đến"
            onAction={onActionTimePick}
          />
          <Input
            name="hourArrival"
            type="hour"
            label={"  "}
            onAction={handleInputChange}
          />
        </div>
        <Button type="submit" content="Tạo đơn" round={corner.corner_04} />
      </form>
    </div>
  );
};

export default ContentBodyConversation;
