import { Container, Content} from './styles'

import ratingStar from '../../assets/rating-star.svg'

import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Buttontext } from '../../components/Buttontext'
import { Tag } from '../../components/Tag'

import { FiArrowLeft, FiClock } from 'react-icons/fi'

export function MoviePreview() {
    return (
        <Container>
            <Header />
            <main>
                <Link to="/">
                    <Buttontext icon={FiArrowLeft} title="Return"/>
                </Link>
                <Content>
                    <header>
                        <div id='movie-title'>
                            <h1>Interestellar</h1>
                            <img src={ratingStar} />
                            <img src={ratingStar} />
                            <img src={ratingStar} />
                            <img src={ratingStar} />
                            <img src={ratingStar} />
                        </div>
                        
                        <div id='user'>
                            <img id='user-img' src="https://github.com/lucascpedroso.png" alt="user picture" /> 
                            
                            <p>By Lucas Pedroso</p>
                                
                            <p> <FiClock /> 18/05/2023 at 08:30</p>
                        </div>
                    
                    </header>

                    <div className='tags'>
                        <Tag title="Science fiction"/>
                        <Tag title="Drama"/>
                        <Tag title="Family"/>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ut sapiente delectus dicta asperiores neque consequatur, aut eius eum id et qui, rerum rem in! Ipsa ipsum officia sed nostrum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, rerum deleniti repudiandae impedit quod deserunt earum. Accusamus dolore eos cum odit similique ipsum voluptates iste dignissimos cumque officiis, molestiae recusandae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos exercitationem mollitia autem modi minus maxime quo numquam fuga voluptatem ipsam. Iusto magni adipisci obcaecati voluptate doloribus. Dolore ad ducimus quas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus commodi quas vitae, autem optio sit saepe assumenda, in laborum alias aperiam tempora quaerat soluta expedita ab adipisci inventore quisquam et?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum quam sint cumque molestias perferendis amet facere nulla similique debitis veniam quae minima excepturi provident quis ex, aliquid odio aspernatur.</p>

                    
                </Content>
            </main>
        </Container>
    )
}