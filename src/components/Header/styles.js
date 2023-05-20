import styled from 'styled-components'

import { Link } from 'react-router-dom'


export const Container = styled.header`
    width: 100%;
    height: 116px;

    grid-area: header;

    border-bottom: 1px solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 64px;

    padding: 24px 123px;

    > h1 {
        color: ${({ theme }) => theme.COLORS.RED};
    }
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        line-height: 24px; 
        margin-right: 16px;

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        a {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

`