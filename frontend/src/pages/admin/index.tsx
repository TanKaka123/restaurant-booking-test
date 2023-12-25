import { ReactNode, useState } from "react";
import { Table } from "../../components";
import RestaurantContent from "./restaurantContent";
import ReservationContent from "./reservationContent";
import { RiLogoutBoxLine, RiReservedFill } from "react-icons/ri";
import { IoRestaurant } from "react-icons/io5";
import { Navigate, useNavigate } from "react-router-dom";

const CategoryDashboard: React.FC<{ title: string }> = ({ title }) => {
  return (
    <li className="px-5 hidden md:block">
      <div className="flex flex-row items-center mt-5 h-8">
        <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
          {title}
        </div>
      </div>
    </li>
  );
};

const ItemDashboard: React.FC<{
  title: string;
  icon: ReactNode;
  action?: () => void;
}> = ({ title, icon, action }) => {
  return (
    <li>
      <a
        onClick={action}
        href="#"
        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
      >
        <span className="inline-flex justify-center items-center ml-4">
          {icon}
        </span>
        <span className="ml-2 text-sm tracking-wide truncate">{title}</span>
      </a>
    </li>
  );
};

const Admin = () => {
  const navigation = useNavigate();
  const [indexItemDashboard, setIndexItemDashboard] = useState(0);
  const listItemDashBoard = [
    {
      title: "Nhà hàng",
      icon: <IoRestaurant />,
      content: <RestaurantContent />,
    },
    {
      title: "Đơn đặt chỗ",
      icon: <RiReservedFill />,
      content: <ReservationContent />,
    },
  ];

  const backToHome = () =>{
    navigation("/")
  }
  return (
    <>
      <div className="fixed flex flex-col top-0 left-0 w-14 hover:w-64 md:w-64 bg-black dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <CategoryDashboard title="main" />
            {listItemDashBoard &&
              listItemDashBoard.map((itemDashboard, indexItem) => {
                const changeIndexDashboard = () => {
                  setIndexItemDashboard(indexItem);
                };
                return (
                  <ItemDashboard
                    key={indexItem}
                    title={itemDashboard.title}
                    icon={itemDashboard.icon}
                    action={changeIndexDashboard}
                  />
                );
              })}
            <CategoryDashboard title="log out" />
            <ItemDashboard title="Log out" icon={<RiLogoutBoxLine />} action={backToHome} />
          </ul>
        </div>
      </div>

      <div className="h-full ml-14 mt-10 mb-10 md:ml-64">
        {listItemDashBoard[indexItemDashboard].content}
      </div>
    </>
  );
};

export default Admin;
