import { FC } from "react";
import Search from "../../features/search";
import "./index.css";
import { corner, spacing } from "../../constants/style";
import CarouselBody from "./carouselBody";
import ContentBody1 from "./contentBody1";
import ContentBody2 from "./contentBody2";
import ContentBody3 from "./contentBody3";
import ContentBody4 from "./contentBody4";
import ContentBody5 from "./contentBody5";
import ContentBody6 from "./contentBody6";
import ContentBodyOrder from "./contentBodyOrder";
import BannerList from "./bannerList";
import { useNavigate } from "react-router-dom";

const DetailRestaurant: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      
      <div className="grid grid-cols-5 gap-2 ">
        <div className="col-start-2 col-end-5">
        <Search />
        </div>
        <div className="col-start-2 col-end-4  ">
          <CarouselBody />
        </div>
        <div className="col-start-4 col-end-5  grid grid-cols-2  gap-2 ">
          <BannerList />
        </div>
        <div
          className="body "
          style={{ borderRadius: corner.corner_08, padding: spacing.U5 }}
        >
          <ContentBody1 />
        </div>
        <div
          className="body-order-container"
          style={{ borderRadius: corner.corner_08, padding: spacing.U4 }}
        >
          <ContentBodyOrder />
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
  );
};

export default DetailRestaurant;
