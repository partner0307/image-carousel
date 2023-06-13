import React from 'react';
import Banner, { BannerPropstype } from '../Banner';

const BannerTile = (props: BannerPropstype) => {
    const { title, image, tags, description } = props;
    return (
        <Banner image={image}>
            <Banner.Title title={title} />
            <Banner.Tags tags={tags} />
            <Banner.Description description={description} />
        </Banner>
    )
}

export default BannerTile;