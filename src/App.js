import { useState } from 'react';
import Button from 'react-bootstrap/Button';


function App() { 

    const [messages, setMessages] = useState([
        {
            id: 1,
            text: 'Hello',
            author: 'user',
            side: 'outbox'
        },
        {
            id: 2,
            text: 'Hi',
            author: 'admin',
            side: 'inbox'
        },
        {
            id: 3,
            text: 'How are you',
            author: 'user',
            side: 'outbox'
        },
        {
            id: 4,
            text: 'I am fine',
            author: 'admin',
            side: 'inbox'
        },
    ])

    const deleteMessage = (id) => {
        setMessages (
            messages.filter(item => {
                if(item.id === id) {
                    return false
                }
                return item
            })
        )
    }

    return (
        <div className="flex">
            <div className="container">
            {
                messages.map(message => {
                return(
                    <div className={`row ${message.side === 'inbox' ? 'justify-content-end' : ''}`}>
                        <div className="col-5">
                            <div className={message.side}>
                                {message.text}
                                <div>
                                {message.author}
                                </div>
                                <Button variant="outline-danger" onClick={() => deleteMessage(message.id)}>X</Button>{' '}
                            </div>
                        </div>
                    </div>            
                    )
                })
            }
            </div>
        </div>
    )
}

export default App