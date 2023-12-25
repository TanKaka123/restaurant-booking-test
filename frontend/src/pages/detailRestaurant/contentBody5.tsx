/* eslint-disable jsx-a11y/iframe-has-title */
import { fontsize } from "../../constants/style";
import { Text } from "../../components";

const Table = () => {
  return (
    <table className="border-collapse border border-black">
      <thead>
        <tr>
          <th className="text-center " colSpan={2}>
            Thời gian phục vụ
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className=" text-center p-4">
            <Text size={fontsize.SMALL}>THỨ HAI</Text>
          </td>
          <td className=" text-center p-4">
            <Text size={fontsize.SMALL}>07:00 - 23:00 </Text>
          </td>
        </tr>
        <tr>
          <td className=" text-center p-4">
            <Text size={fontsize.SMALL}>THỨ HAI</Text>
          </td>
          <td className=" text-center p-4">
            <Text size={fontsize.SMALL}>07:00 - 23:00 </Text>
          </td>
        </tr>
        <tr>
          <td className=" text-center p-4">
            <Text size={fontsize.SMALL}>THỨ BA</Text>
          </td>
          <td className=" text-center p-4">
            <Text size={fontsize.SMALL}>07:00 - 23:00 </Text>
          </td>
        </tr>
        <tr>
          <td className=" text-center p-4">
            <Text size={fontsize.SMALL}>THỨ TƯ</Text>
          </td>
          <td className=" text-center p-4">
            <Text size={fontsize.SMALL}>07:00 - 23:00 </Text>
          </td>
        </tr>
        <tr>
          <td className=" text-center p-4">
            <Text size={fontsize.SMALL}>THỨ SÁU</Text>
          </td>
          <td className=" text-center p-4">
            <Text size={fontsize.SMALL}>07:00 - 23:00 </Text>
          </td>
        </tr>
        <tr>
          <td className=" text-center p-4">
            <Text size={fontsize.SMALL}>THỨ BẢY</Text>
          </td>
          <td className=" text-center p-4">
            <Text size={fontsize.SMALL}>07:00 - 23:00 </Text>
          </td>
        </tr>
        <tr>
          <td className=" text-center p-4">
            <Text size={fontsize.SMALL}>CHỦ NHẬT</Text>
          </td>
          <td className=" text-center p-4">
            <Text size={fontsize.SMALL}>07:00 - 23:00 </Text>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const ContentBody1 = () => {
  return (
    <div className="flex flex-col gap-5">
      <Text bold size={fontsize.LARGE}>
        <span className="text-red-600 underline">
          {" "}
          Bản đồ & Thời gian phục vụ
        </span>
      </Text>
      <div className="flex gap-5 flex-wrap	 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6941259552946!2d106.69096300705935!3d10.758040159495572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f0cc03ca4c1%3A0x6eee1d028f94b1a9!2sMK%20Kitchen%20%26%20Bar!5e0!3m2!1svi!2s!4v1703293556301!5m2!1svi!2s"
          style={{ border: "0", width: "60%" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <Table />
      </div>
    </div>
  );
};
export default ContentBody1;
