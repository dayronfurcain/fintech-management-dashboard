import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

import { persons } from '../constants';

const Contact = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <h2>Contact</h2>
        <span>8</span>
      </div>
      <Swiper
        slidesPerView={5}
        //modules={[Pagination]}
        //pagination={{ clickable: true }}
      >
        {persons.map((person) => (
          <SwiperSlide key={person.id}>
            <img
              src={person.image}
              alt={person.description}
              className="w-8 h-8 object-cover rounded-[50%]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Contact;
