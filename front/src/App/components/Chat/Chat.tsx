import { useState, useEffect, Fragment } from 'react';
import styles from './Chat.module.scss';

import Socket from '../../assets/sockets/mainSocket';
Socket.initSocket()

type Props = {
  isOpenChat: boolean,
  closeChat: (value: boolean) => void
}

function Chat({ isOpenChat, closeChat }: Props) {
  const [outMessages, handleOutMessage] = useState([{ type: 'server', value: 'Hello!' }])
  const [messageFromClient, handleMessageFromClient] = useState(String)
  const [messageFromServer, handleMessageFromServer] = useState(String)
  const [FormValue, handleForm] = useState('')

  function send(e: any) {
    e.preventDefault()
    const newMessage = e.target['text-message'].value
    Socket.emit('message', newMessage)
    handleMessageFromClient(newMessage)
    handleForm('')
  }
  function formControl(e: any) {
    handleForm(e.target.value)
  }

  useEffect(() => {
    if (isOpenChat) {
      Socket.connect((value: any) => handleMessageFromServer(value))
    }
    if (!isOpenChat) {
      Socket.disconnect()
    }
  }, [isOpenChat])

  useEffect(() => {
    if(messageFromServer){
      handleOutMessage((prevOutMessages) => {
        return [...prevOutMessages, { type: 'server', value: messageFromServer }]
      })
    }
  }, [messageFromServer])
  useEffect(() => {
    if(messageFromClient){
      handleOutMessage((prevOutMessages) => {
        return [...prevOutMessages, { type: 'client', value: messageFromClient }]
      })
    }
  }, [messageFromClient])


  return (
    <Fragment>
      {isOpenChat ? (<div className={styles.chatWindow}>
        <span className={styles.close} onClick={() => closeChat(false)}></span>
        
        <div className={styles.body}>



          <div className={styles.output} >
            {/* <p className={styles.server}>like message from server</p> */}
            {outMessages?.map((el: any, idx: number) => {
              return (
                <p key={idx} className={styles[el.type]}>{el.value}</p>
              )
            })
            }
          </div>



          <form className={styles.input} onSubmit={send}>
            <input type="text" name='text-message' value={FormValue} autoComplete="off" onChange={formControl} />
            <input type="submit" name='' value=''/>
          </form>
        </div>

      </div>) : ''}
    </Fragment>
  )
}

export default Chat