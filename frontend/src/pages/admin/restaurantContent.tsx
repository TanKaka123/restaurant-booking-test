import { Table } from "../../components";
import { READ_RESTAURANT } from "../../constants/action";
import useFetch, { actionUrlAPI } from "../../hooks/useFetch";
import { Text } from "../../components";
import { fontsize } from "../../constants/style"; 
import { Restaurant } from "../../types/restaurant";

const RestaurantContent = () => {
  const { data, error, loading } = useFetch(
    actionUrlAPI({ action: READ_RESTAURANT })
  );

  const getHead = (): string[] => {
    return [
      "Tên nhà hàng",
      "Địa chỉ",
      "Giá thấp nhất",
      "Giá cao nhất",
    ];
  };
  const getBody = (): string[][] => {
    var bodyTable: string[][] = [];
    if (data) {
      data.forEach((item: Restaurant) => {
        bodyTable.push([
          item.title,
          item.address,
          item.priceStart.toString(),
          item.priceEnd.toString(),
        ]);
      });
    }
    return bodyTable;
  };
  return (
    <>
      {loading ? (
        <Text size={fontsize.LARGE} bold>
          Loadingggggg
        </Text>
      ) : (
        <Table head={getHead()} body={getBody()} />
      )}
    </>
  );
};

export default RestaurantContent;
