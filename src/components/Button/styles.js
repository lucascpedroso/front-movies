import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme, isNew }) => isNew ? theme.COLORS.BACKGROUND_900 : theme.COLORS.RED};
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.RED : theme.COLORS.BACKGROUND_800};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    height: 52px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
`