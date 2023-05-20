import { Container, Form, Background } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'

import { Link } from 'react-router-dom'

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>An app for you to keep track of what you watch.</p>

                <h2>Log in</h2>

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />
                <Input 
                    placeholder="password"
                    type="password"
                    icon={FiLock}
                />
                
                <Button title="Sign In"/>

                <Link to="register"> Create account</Link>
            </Form>

            <Background />
        </Container>
    )
}