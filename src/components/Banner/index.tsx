import React from 'react';
import styled from 'styled-components';
import Tags from '../Tags';
import Title from '../Title';
import Description from '../Description';

export type BannerPropstype = {
    title?: string,
    tags?: string[],
    description?: string,
    image?: string,
    children?: any
}

const Container = styled.div<{ image: string }>`
    background-image: linear-gradient(90deg, rgba(0, 0, 0, 1) 60%, transparent), url(${(props: Pick<BannerPropstype, "image">) => props.image});
    width: 100%;
    height: 400px;
    display: flex;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        padding-left: 10px;
    }
`;

const Banner = ({ image, children }: any) => {
    return (
        <Container image={image}>
            <div>{children}</div>
        </Container>
    );
}

Banner.Title = Title;
Banner.Tags = Tags;
Banner.Description = Description;

export default Banner;