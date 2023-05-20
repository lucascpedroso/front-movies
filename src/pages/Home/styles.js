import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > div {
            max-width: 1000px;
            margin: 50px auto -5px;

            display: flex;
            align-items: center;
            justify-content: space-between;

        button {
            width: 207px;
            height: 48px;
        }}

    > main {
        padding: 64px 0;

        max-width: 1000px;
        margin: 0 auto;

        overflow-y: auto;
    }

`

export const Content = styled.div`
    padding: 32px;
    margin-bottom: 24px;
    border-radius: 16px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600}; 

    > a {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    
`