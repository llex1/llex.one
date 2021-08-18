import { useState, useEffect, Fragment } from 'react';
import styles from './Chat.module.scss';

// import Socket from '../../assets/sockets/mainSocket';
// Socket.initSocket()

type Props = {
  isOpenChat: boolean,
  closeChat: (value: boolean) => void
}

function Chat({ isOpenChat, closeChat }: Props) {



  return (
    <Fragment>
      {isOpenChat && (
        <div className={styles.chatWrapper}>
          <div className={styles.chatModal}>

            <div className={styles.chatModal__title}>
              modal window
              <span className={styles.chatModal__title__close}></span>
            </div>



            <div className={styles.chatModal_field}>



            </div>
          </div>
        </div>)}
    </Fragment>
  )
}

export default Chat