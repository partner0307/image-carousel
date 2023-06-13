import React from 'react';
import styled from 'styled-components';
import { BannerPropstype } from '../Banner';

const TagComponent = styled.div`
    padding: 0.5rem 0;
    $ span {
        margin-right: 0.5rem;
        font-size: 1rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.6);
    }
`;

const Tags = ({ tags }: Pick<BannerPropstype, 'tags'>) => {
    return (
        <TagComponent>
            {tags.map((tag: string, index: number) => (
                <span key={`tag-${tag}-index`}>{tag}</span>
            ))}
        </TagComponent>
    )
}

export default Tags;