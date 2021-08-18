import { useState, useEffect, Fragment } from 'react';
import styles from './Chat.module.scss';

// import Socket from '../../assets/sockets/mainSocket';
// Socket.initSocket()

type Props = {
  // isOpenChat: boolean,
  openChat: (value: boolean) => void
}

function Chat({ /* isOpenChat, */ openChat }: Props) {

  const [modalStyle, changeStyle] = useState({})


  function modalMoveProcessing(event:any):void {
    let modal:any = document.querySelector('#modal')
    console.dir(modal);
    console.log(event.movementX);
    console.log(event.movementY);
    
  
    // 640*480
    // offsetTop: 255
    // offsetLeft: 720
    changeStyle({top: `${modal.offsetTop+event.movementY}px`, left: `${modal.offsetLeft+event.movementX}px`})
  }

  function modalMoveStart(): void {
    document.addEventListener('mousemove', modalMoveProcessing)
    document.addEventListener('mouseup', modalMoveStop)
    console.log('CLIC');
  }
  function modalMoveStop(): void {
    document.removeEventListener('mousemove', modalMoveProcessing)
    document.removeEventListener('mouseup', modalMoveStop)
    console.log('UNCLIC');
  }

  // useEffect(() => {
  //   console.log('ЗАМОНТОВАНО');
  //   document.addEventListener('mousemove', modalMousMove)
  //   return () => {
  //     console.log("РОЗМОНТОВАНО");
  //     document.removeEventListener('mousemove', modalMousMove)
  //   }
  // })


  return (
        <div className={styles.chatWrapper}>
          <div className={styles.chatModal} id="modal" style={modalStyle}>

            <div className={styles.chatModal__title} onMouseDown={modalMoveStart}>
              modal window
              <span className={styles.chatModal__title__close} onClick={() => {
                openChat(false)
                console.log('tets');
              }}></span>
            </div>



            <div className={styles.chatModal_field}>



            </div>
          </div>
        </div>
  )
}

export default Chat