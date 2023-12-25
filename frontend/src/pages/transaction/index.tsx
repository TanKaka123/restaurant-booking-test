import { FC, useEffect, useState } from "react";
import Text from "../../components/text";
import { corner, fontsize, spacing } from "../../constants/style";
import FormContact from "./formContact";
import { Button } from "../../components";
import ReservationView from "./reservationView";
import { useLocation, useNavigate } from "react-router-dom";
import { InitialFormContact, InitialFormConversation } from "../../types/form";
import useForm from "../../hooks/useForm";
import useFetch, { actionUrlAPI } from "../../hooks/useFetch";
import { CREATE_RESERVATION } from "../../constants/action";
import ModalComponent from "../../components/modal";

const Transaction: FC = () => {
  const [submitIsDisabled, setSubmitIsDisabled] = useState(false);
  const location = useLocation();
  const state = location.state;
  const navigation = useNavigate();
  var formConversation = useForm(InitialFormConversation);

  const formContact = useForm(InitialFormContact);
  
  useEffect(() => {
    if (state === null) {
      navigation("/");
    } else {
      formContact.setNewState(state.conversation);
    }
  }, []);

  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

 
 const { data, error, loading } = useFetch(
    actionUrlAPI({ action: CREATE_RESERVATION}), {restaurant:state.restaurant._id,...formContact.formData, ...formConversation.formData},
    shouldFetch
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
   
    event.preventDefault();
    setShouldFetch(true);
  }
  return (
    <>
    {data && <ModalComponent />}
      {state ? (
        <div className="grid grid-cols-10">
          <div className="col-start-2 col-span-8 bg-white p-6 ">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <Text size={fontsize.LARGE}>XÁC NHẬN ĐƠN HÀNG</Text>
              </div>
              <div className="grid grid-cols-10 gap-5 ">
                <div className="lg:col-start-1 lg:col-span-7 col-start-1 col-span-10  ">
                  <FormContact
                    handleInputChange={formContact.handleInputChange}
                  />
                </div>
                <div className="lg:col-span-3 col-start-1 col-span-10">
                  <ReservationView
                    handleInputChange={formConversation.handleInputChange}
                    restaurantItem={state.restaurant}
                    formReservationItem={state.reservation}
                  />
                </div>
              </div>

              <Button
              content={loading ? "Đang xác nhận giao dịch" : "Xác nhận giao dịch"}
              paddings={spacing.U2}
                round={corner.corner_04}
                isGray={submitIsDisabled}
                type="submit"
              />
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Transaction;
