import React from 'react';
import styled from 'styled-components';
import { BannerPropstype } from '../Banner';

const StyledDescriptionComponent = styled.div`
    text-align: center;
    color: rgba(255, 255, 255, .8);
    display: -webkit-box;
    max-width: 50%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const DescriptionComponent = ({ description }: Pick<BannerPropstype, 'description'>) => {
    return (
        <StyledDescriptionComponent>{description}</StyledDescriptionComponent>
    )
}

export default DescriptionComponent;