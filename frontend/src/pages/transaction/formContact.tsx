import { Text, Input } from "../../components";
import { corner, fontsize, spacing } from "../../constants/style";

interface FromContactProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormContact: React.FC<FromContactProps> = ({ handleInputChange }) => {
  return (
    <>
      <div
        className="border"
        style={{ borderRadius: corner.corner_08, padding: spacing.U5 }}
      >
        <div className="mb-5">
          <Text size={fontsize.NORMAL}> Chi tiết liên hệ</Text>
        </div>

        <Input
          name="nameContact"
          label="Tên liên lạc"
          placeholder="Nhập tên liên hệ"
          onAction={handleInputChange}
        />
        <div>
          <Input
            name="numberContact"
            label="Số điện thoại"
            placeholder="Nhập tên liên hệ"
            onAction={handleInputChange}
          />
          <Input
            name="EmailContact"
            label="Email"
            placeholder="Nhập email"
            onAction={handleInputChange}
          />
        </div>
      </div>

      <Input
        name="note"
        label="Ghi chú"
        placeholder="Nhập ghi chú"
        type="textarea"
        onAction={handleInputChange}
      />
    </>
  );
};

export default FormContact;
