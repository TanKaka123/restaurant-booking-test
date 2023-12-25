import { buttonSize, corner, fontsize, spacing } from "../../constants/style";
import Text from "../../components/text";
import { AiFillLike } from "react-icons/ai";
import Button from "../../components/button";
import CarouselBody from "./carouselBody";

const ContentBody4 = () => {
  return (
    <div className="flex flex-col gap-2">
      <Text bold size={fontsize.LARGE}>
        <span className="text-red-600 underline"> Giới thiệu:</span> MK Kitchen
        Bar Bến Vân Đồn
      </Text>
      <Text bold size={fontsize.SMALL}>
        PHÙ HỢP:{" "}
      </Text>
      <Text size={fontsize.SMALL}>
        Hẹn hò cặp đôi, gặp gỡ đối tác/khách hàng, gặp mặt gia đình, tổ chức
        tiệc sinh nhật, liên hoan công ty, tiệc thôi nôi...{" "}
      </Text>
      <Text bold size={fontsize.SMALL}>
        MÓN ĐẶC SẮC:{" "}
      </Text>
      <Text size={fontsize.SMALL}>
        Bò Nhật Okini sốt tiêu đen, Mỳ Ý hoa đậu biếc gà chíp đút lò phô mai, Hủ
        tiếu áp chảo hải sản, Lẩu cá mú nấu soda, Cơm chiên trứng tôm Ebiko...
      </Text>
      <Text bold size={fontsize.SMALL}>
        KHÔNG GIAN:
      </Text>
      <Text size={fontsize.SMALL}>
        - Sang trọng, trang nhã <br />
        - Sức chứa: 200 khách <br />
        - Sảnh trong nhà: 100 khách <br />- Khu vực ngoài trời: 100 khách
      </Text>
      <Text bold size={fontsize.SMALL}>
        CHỖ ĐỂ XE:
      </Text>
      <Text size={fontsize.SMALL}>
        - Xe ô tô: Bãi đậu xe của nhà hàng (Miễn phí)
        <br />- Xe máy: Bãi đậu xe của nhà hàng (Miễn phí)
      </Text>
      <Text bold size={fontsize.SMALL}>
        ĐIỂM ĐẶC TRƯNG:
      </Text>
      <Text size={fontsize.SMALL}>
        - MK Kitchen & Bar sở hữu không gian rộng rãi, sang trọng rất thích hợp
        để tổ chức sự kiện như hội nghị, họp mặt gia đình, tiếp khách, tiệc sinh
        nhật, thôi nôi, hẹn hò...
        <br />- Thực đơn sáng - trưa - tối của nhà hàng là sự kết hợp hài hòa
        giữa ẩm thực Á và Âu, được chế biến bởi đầu bếp hơn 30 năm kinh nghiệm.
      </Text>
      <Text bold size={fontsize.SMALL}>
        &gt;&gt; Thông tin khái quát về nhà hàng
      </Text>
      <Text size={fontsize.SMALL}>
        Không chỉ mang tới không gian sang trọng cho những buổi gặp gỡ đối tác,
        hẹn hò lãng mạn cho cặp đôi... MK Kitchen & Bar còn là địa điểm tổ chức
        tiệc lý tưởng với sức chứa lên tới 200 khách, phục vụ các món Á Âu kết
        hợp.
      </Text>
      <Text bold size={fontsize.SMALL}>
        &gt;&gt; Khám phá ẩm thực thế giới từ Á sang Âu ngay tại MK Kitchen Bar
        Quận 4
      </Text>
      <Text size={fontsize.SMALL}>
        Nhà hàng MK Kitchen Bar Bến Vân Đồn mang tới hơn 60 món ngon thượng hạng
        từ các nướng Nhật, Pháp, Ý... mang phong cách Fusion thời thượng. Cùng
        với đó là thực đơn 3 miền Bắc, Trung, Nam hội tụ trọn vẹn tinh hoa của
        ẩm thực Việt. Những món ăn đặc sắc nhất của nhà hàng phải kể tới: <br />
      </Text>
      <div className="flex flex-col gap-2 px-4">
        <Text size={fontsize.SMALL}>
          Bò Okini Nhật sốt tiêu xanh: là loại bò hảo hạng của Nhật có vân mỡ
          cẩm thạch đan xen nhau, được thái miếng dày bản đem áp chảo lửa lớn và
          dùng với sốt tiêu nồng nàn
        </Text>
        <Text size={fontsize.SMALL}>
          Mỳ Ý hoa đậu biếc gà chíp đút lò phô mai: luôn được thực khách ưa
          chuộng bởi sự hấp dẫn bởi gà chiên giòn hòa quyện hoàn hảo với những
          sợi mỳ dai dai thấm đẫm nước sốt đậm đà, sánh ngậy Mực lá cau nướng
          muối ớt: mực xắt miếng dày, dai giòn sừng sực được tẩm ướp kỹ lưỡng và
          nướng thơm lừng với vị hài hòa chua, cay, mặn, ngọt
        </Text>
        <Text size={fontsize.SMALL}>
          Lẩu cá mú nấu soda: là món ăn độc đáo phải đặt trước 2 tiếng, nước
          dùng chua ngọt thanh dịu từ cá nguyên con được nấu trong nhiều giờ,
          kết hợp cùng rau kinh giới, lá quế, ớt xiêm xanh,... cuối cùng là bí
          quyết khử mùi tanh từ soda.
        </Text>
      </div>
      <Text bold size={fontsize.SMALL}>
        &gt;&gt; MK Kitchen & Bar Bến Vân Đồn sở hữu không gian sang trọng, có
        khu vực ngoài trời và trong nhà phù hợp đặt tiệc, liên hoan
      </Text>
      <Text size={fontsize.SMALL}>
        MK Kitchen & Bar tọa lạc tại vị trí đắc địa ngay giữa trung tâm Sài Gòn,
        có không gian rộng lớn, sang trọng với diện tích mặt bằng lên tới 200m2.
        Nhà hàng có khu vực đậu xe ô tô rộng rãi, miễn phí; có dịch vụ trang trí
        tiệc theo yêu cầu. Không gian chia 2 khu vực, trong nhà và ngoài trời sẽ
        chiều lòng mọi bữa tiệc của thực khách từ đặt tiệc thôi nôi, đặt tiệc
        sinh nhật, đặt tiệc công ty, hẹn hò lãng mạn cho cặp đôi...
      </Text>
      <img
        src="https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/vuvu/gtnh/mkkitchenbar/nha-hang-mk-kitchen-bar-ben-van-don-1.jpg"
        alt="illustration_image"
      />
      <div className="flex gap-5 ">
        <Button
          content="Thích 0"
          width={buttonSize.FITCONENT}
          bgColor="#007fff"
          round={corner.corner_04}
          paddings={spacing.U}
          icon={<AiFillLike className="inline mr-2" />}
        />
        <Button
          content="Chia sẻ"
          width={buttonSize.FITCONENT}
          bgColor="#007fff"
          round={corner.corner_04}
          paddings={spacing.U}
        />{" "}
      </div>{" "}
      <Text>
        Nếu bạn thấy bài viết này hữu ích, hãy chia sẻ và bình luận ngay nhé!
      </Text>
      <Text bold size={fontsize.SMALL}>
        <span className="text-red-600 underline">Bảng giá</span>
      </Text>
      {/* <CarouselBody/> */}
    </div>
  );
};
export default ContentBody4;
