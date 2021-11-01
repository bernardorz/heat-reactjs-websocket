import { useContext, useEffect } from 'react'
import styles from './App.module.scss'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { SendMessageForm } from './components/SendMessageForm'
import { AuthContext } from './hook/auth'

function App() {
  
  const { user } = useContext(AuthContext);

  useEffect(() => {

      

  },[])

  return (
    <div className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
         <MessageList />
          { !!user ? <SendMessageForm /> :  <LoginBox />}

    </div>
  )
}

export  { App }
