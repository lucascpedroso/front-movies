import styled from 'styled-components'

export const Container = styled.button`
    background: none;
    border: none;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.RED};

    display: flex;
    align-items: center;
    gap: 8px;
`