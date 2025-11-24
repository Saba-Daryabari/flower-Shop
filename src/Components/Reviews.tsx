import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import reviewer1 from "../assets/reviewer1.jpg"
import reviewer2 from "../assets/reviewer2.jpg"
import reviewer3 from "../assets/reviewer3.jpg"

import "../styles/reviews.scss";
import 'swiper/css';
import 'swiper/css/navigation';

type Review = {
  id: number;
  text: string;
  author: string;
  image: string ;
};

const reviews: Review[] =  [
  {
    id: 1,
    text: "The bouquet I ordered was absolutely stunning. The flowers were incredibly fresh and beautifully arranged. It looked even better in person than in the photos. Definitely my new go-to flower shop!",
    author: "Sara M.",
    image: reviewer1,
  },
  {
    id: 2,
    text: "I placed a last-minute order for a birthday gift, and the delivery was surprisingly fast. The packaging was elegant, and the scent of the flowers filled the whole room. Truly impressed with the service.",
    author: "John D.",
    image: reviewer2,
  },
  {
    id: 3,
    text: "Every time I buy flowers from here, the quality is perfect. The staff clearly knows what they’re doing, and the attention to detail in each arrangement is amazing. Highly recommended for any occasion.",
    author: "Laleh K.",
    image: reviewer3,
  },
];

const ReviewSwiper: FC = () => {
  return (
    <div className="review-swiper-container">
      <Swiper
        modules={[Navigation]}
        loop
        rewind={true}
        slidesPerView={1}
        navigation
        className="mySwiper"
      >
        {reviews.map((r, i) => (
          <SwiperSlide key={i}>
            <div className="review-card">
              <img src={r.image} alt="" className="review-img" />
              <p className="review-text">{r.text}</p>
              <h4 className="review-author">{r.author}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSwiper;
