import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 15px;
   
    h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 25px;
        font-weight: 700;
    }
    
`