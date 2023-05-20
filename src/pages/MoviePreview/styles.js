import styled from 'styled-components'
import ratingStar from '../../assets/rating-star.svg'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > main {
        max-width: 1100px;
        margin: 40px auto;
        overflow-y: auto;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
   

    > header {

        #user-img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
        }

        div {
            display: flex;
            align-items: center;
            gap: 20px;

            margin-top: 24px;

            p {
                display: flex;
                align-items: center;
                gap: 5px;
            }
        }
    }
    
    > .tags {
        margin: 40px 0;
    }

    > p {
        text-align: justify;
    }

`