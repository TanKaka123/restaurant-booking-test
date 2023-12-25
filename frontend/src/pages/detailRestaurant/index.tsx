import { FC } from "react";
import Search from "../../features/search";
import "./index.css";
import { corner, fontsize, spacing } from "../../constants/style";
import CarouselBody from "./carouselBody";
import ContentBody1 from "./contentBody1";
import ContentBody2 from "./contentBody2";
import ContentBody3 from "./contentBody3";
import ContentBody4 from "./contentBody4";
import ContentBody5 from "./contentBody5";
import ContentBody6 from "./contentBody6";
import ContentBodyConversation from "./contentBodyConversation";
import BannerList from "./bannerList";
import useFetch from "../../hooks/useFetch";
import { READ_RESTAURANT_BY_ID } from "../../constants/action";
import { actionUrlAPI } from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import { InitialFormConversation } from "../../types/form";
import { Text } from "../../components";
import colors from "../../constants/theme";
import { PiPhoneCallFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const DetailRestaurant: FC = () => {
  const navigate = useNavigate();
  const idCurrentPost = "658872fe582188be79c712c3";
  const { data, error, loading } = useFetch(
    actionUrlAPI({ action: READ_RESTAURANT_BY_ID, id: idCurrentPost })
  );

  const { formData, handleInputChange } = useForm(InitialFormConversation);

  const goToTransactionPage = () => {
    navigate("/transaction-information", {
      state: { restaurant: data, reservation: formData },
    });
  };

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : data ? (
        <div>
          <div className="grid grid-cols-12 gap-2">
            <div className=" lg:col-start-2 lg:col-span-8 sm:col-start-2 sm:col-span-10 col-start-2 col-span-11">
              <Search />
            </div>
            <div className="lg:col-start-10 lg:col-span-2 flex flex-col justify-center items-end sm:col-start-2 sm:col-span-10 col-start-2 col-span-4">
              <Text bold color={colors.PRIMARY} size={fontsize.LARGE}>
                {" "}
                <PiPhoneCallFill
                  color={colors.PRIMARY}
                  className="inline mr-3"
                />
                1900 6005
              </Text>
            </div>
            <div className="lg:col-start-2 lg:col-span-7 sm:col-start-2 sm:col-span-10 col-start-2 col-span-11">
              <CarouselBody listImage={data.thumbnail} />
            </div>
            <div className="lg:col-start-9 lg:col-span-3 sm:col-start-2 sm:col-span-10 grid lg:grid-cols-2  gap-2 col-start-2 col-span-11 grid-cols-3 ">
              <BannerList listImage={data.thumbnail}/>
            </div>
            <div
              className="body"
              style={{ borderRadius: corner.corner_08, padding: spacing.U5 }}
            >
              <ContentBody1 restaurantItem={data} />
            </div>
            <div
              className="body-order-container"
              style={{ borderRadius: corner.corner_08, padding: spacing.U4 }}
            >
              <ContentBodyConversation
                handleInputChange={handleInputChange}
                onSubmit={goToTransactionPage}
              />
            </div>
            <div
              className="body"
              style={{ borderRadius: corner.corner_08, padding: spacing.U5 }}
            >
              <ContentBody2 />
            </div>
            <div className="body" style={{ padding: spacing.U5 }}>
              <ContentBody3 />
            </div>
            <div className="body" style={{ padding: spacing.U5 }}>
              <ContentBody4 />
            </div>
            <div className="body" style={{ padding: spacing.U5 }}>
              <ContentBody5 />
            </div>
            <div className="body" style={{ padding: spacing.U5 }}>
              <ContentBody6 />
            </div>
          </div>
        </div>
      ) : (
        <div>Error</div>
      )}
    </>
  );
};

export default DetailRestaurant;
