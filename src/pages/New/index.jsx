import { Container, Form } from './styles'

import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Buttontext } from '../../components/Buttontext'
import { Button } from '../../components/Button'
import { FiArrowLeft } from 'react-icons/fi'

export function New() {
    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <Link to="/">
                           <Buttontext icon={FiArrowLeft} title="Return" />
                        </Link>
                        <h1>New movie</h1>
                    </header>
                   
                    <div className="input">
                        <Input placeholder="Title"/>
                    
                        <Input placeholder="Your rating (0 to 5)" />
                    </div>

                    <Textarea placeholder="Coments"/>

                    <h2>Tags</h2>
                    <div className="tags">
                        <NoteItem value="React"/>
                        <NoteItem placeholder="New tag" isNew/>
                    </div>

                    <div className="buttons">
                        <Button isNew title="Delete movie"/>
                        <Button title="Save" /> 
                    </div>
                    
                </Form>
            </main>
        </Container>
    )
}