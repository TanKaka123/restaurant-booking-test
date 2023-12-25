import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import colors from "../constants/theme";

const ModalComponent = () => {
  const [openModal, setOpenModal] = useState(true);
   const navigate = useNavigate()
   const handleCloseModal = () => {
    setOpenModal(false);
    navigate("/");
  };
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            * Đặt chỗ tới nhà hàng đã được tiếp nhận thành công! <br/>
            * PasGo sẽ gọi
            điện tới số ĐT: 0398915721 để Xác nhận trong vòng 10 phút tới. Vui
            lòng giữ liên lạc! <br/>
            * Lưu ý: Quý Khách vui lòng chủ động gọi đến số:
            19006005 để PasGo Xác nhận trong trường hợp PasGo cố gắng liên lạc
            không thành công! Đặt chỗ thành công chỉ khi có sự Xác nhận từ
            PasGo! Cảm ơn Quý Khách đã sử dụng PasGo!
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal} > Đóng</Button> 
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalComponent;
