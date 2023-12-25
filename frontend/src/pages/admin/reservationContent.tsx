import { Table } from "../../components";
import { READ_RESERVATION } from "../../constants/action";
import useFetch, { actionUrlAPI } from "../../hooks/useFetch";
import { Text } from "../../components";
import { fontsize } from "../../constants/style";
import { Reservation } from "../../types/reservation";

const ReservationContent = () => {
  const { data, error, loading } = useFetch(
    actionUrlAPI({ action: READ_RESERVATION })
  );

  const getHead = (): string[] => {
    return [
      'Tên nhà hàng',
      'Tên người đặt',
      'Số điện thoại',
      'Email',
      'Người lớn',
      'Trẻ em',
      'Ngày đến',
      'Giờ đến',
      'Note',
    ];
  };
  const getBody = (): string[][] => {
    var bodyTable: string[][] = [];
    if (data) {
      data.forEach((item: Reservation) => {
        bodyTable.push([
          item.restaurant.title,
          item.nameContact,
          item.numberContact,
          item.EmailContact,
          item.numberAdult.toString(),
          item.numberChildren.toString(),
          item.dateArrival,
          item.hourArrival,
          item.note ?? ' ',
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

export default ReservationContent;
