import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import BannerTile from '../BannerTile';
import { BannerPropstype } from 'components/Banner';
const source = require('../../service/data.json');

type SampleData = Pick<BannerPropstype, 'title' | 'description'> & {
    genres: string[];
    cover_url: string;
}

const HeroBanner = () => {
    return <>
    <Swiper navigation modules={[Navigation]} slidesPerView={1}>
        {source.data.map((item: SampleData, index: number) => (
            <SwiperSlide key={`key-${item.title}-${index}`}>
                <BannerTile title={item.title} tags={item.genres} image={item.cover_url} description={item.description} />
            </SwiperSlide>
        ))}
    </Swiper>
    </>
}

export default HeroBanner;