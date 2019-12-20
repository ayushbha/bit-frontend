import React from 'react';
import styled from 'styled-components';

const Check = styled.div`
    margin: 1rem;
    height: 16px;
`

export default ({ color }) => (
    <Check>
        <svg viewBox="0 0 16 16" width="32" height="32">
            <g fill={color || '#111111'}>
                <path
                    fill={color || '#111111'}
                    d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M7,11.4L3.6,8L5,6.6l2,2l4-4L12.4,6L7,11.4z"
                />
            </g>
        </svg>
    </Check>
);