import React from 'react';
import styled from 'styled-components';
import { BannerPropstype } from '../Banner';

const TitleComponent = styled.div`
    font-size: 28px;
    font-weight: 600;
    color: white;
`;

const Title: React.FC = ({ title }: Pick<BannerPropstype, 'title'>) => {
    return <TitleComponent>{ title }</TitleComponent>;
}

export default Title;