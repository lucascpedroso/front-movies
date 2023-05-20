import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: "header" "content";

    > main {
        grid-area: content;
        overflow-y: auto;
    }

    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`

export const Form = styled.form`
    max-width: 1000px;
    margin: 45px auto;

    > header {
        display: flex;
        flex-direction: column;
        gap: 24px;

        margin-bottom: 36px;

    }

    .input {
        display: flex;
        gap: 40px;
        margin-bottom: 40px;
    }

    > h2 {
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        margin: 40px 0 24px;
    }

    .tags {
        display: flex;
        justify-content: start;
        gap: 24px;

        padding: 16px;
        margin-bottom: 40px;
        border-radius: 8px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    .buttons {
        display: flex;
        gap: 40px;
    }
`