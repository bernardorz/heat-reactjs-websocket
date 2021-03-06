import { useEffect, useState } from 'react'
import io from "socket.io-client";

import { api } from '../../services/api'

import styles from "./styles.module.scss"

import logoImg from "../../assets/logo.svg"


type Message =  { 
    id : string;
    text : string;
    user : { 
        name : string;
        avatar_url : string;
    }
} 


const messagesQueue : Message[] = []

const socket = io('http://localhost:4000');


socket.on('new_message', newMessage => {
    messagesQueue.push(newMessage);
})

export function MessageList() : JSX.Element {

    const [messages, setMessages] = useState<Message[]>([]);



    useEffect(() => {
        const timer = setInterval(() => {
            if(messagesQueue.length > 0){
                setMessages(message => [
                    messagesQueue[0],
                    message[0],
                    message[1]
                ])
            }


            messagesQueue.shift()
        }, 3000)

    }, [])

    useEffect(() => {

            api.get<Message[]>('/messages/last3').then(response => {
                setMessages(response.data)
            })

    }, [])
    return (
        <div className={styles.messaListWrapper}> 

            <img src={logoImg} alt="DoWhile 2021" />


            <ul className={styles.messageList}>

            {messages.map(message => {
                return (
                    <li key={message.id} className={styles.message}>
                    <p className={styles.messageCount}>{message.text}</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src={message.user.avatar_url} alt={message.user.name} />    
                        </div>
                        <span>Bernardo Rizzatti</span>
                    </div>
                </li>
                );
            })}

            </ul>
        
         </div>
    )
}