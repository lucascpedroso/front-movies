import { Container, Content } from './styles'

import { FiPlus } from 'react-icons/fi'

import ratingStar from '../../assets/rating-star.svg'

import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

export function Home() {
    return (
        <Container>
            <Header />
            
            <div>
                <h1>My movies</h1>
                <Link to="/new"><Button icon={FiPlus} title="Add a movie"/></Link>
            </div>

            <main>
                <Content>
                    <Link to="moviepreview">
                        <Section title="Interestellar">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quis quae qui minus rem ad reiciendis pariatur incidunt aperiam dolore, cupiditate nam distinctio porro harum similique recusandae. Beatae, ullam magnam.</p>
                            <div id='tags'>
                                <Tag title="Science fiction"/>
                                <Tag title="Drama" />
                                <Tag title="Family" />
                            </div>
                        </Section>
                    </Link> 
                </Content>

                
            </main>

            
        </Container>
    )
}
