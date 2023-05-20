import { Container, Profile } from './styles'
import { Input } from '../../components/Input'


export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>

            <Input placeholder="Search a title"/>

            <Profile to="/profile" >
                <div>
                    <strong>Lucas Pedroso</strong>
                    <a href="/">Sair</a>
                </div>

                <img src="https://github.com/lucascpedroso.png" alt="User picture" />
            </Profile>
        </Container>
    )
}