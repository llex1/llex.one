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

  function modalChangePosition(event:any):void {
    let modal:any = document.querySelector('#modal')
    
    console.log(event.clientX, 'Client X');
    console.log(event.offsetX, 'Offset X');
    console.dir(modal);

    // changeStyle({top: `${event.clientY - event.offsetY}px`, left: `${event.clientX - event.offsetX}px`, transform: 'translate(0, 0)'})
  }

  function modalMove(): void {
    document.addEventListener('mousemove', modalChangePosition)
    document.addEventListener('mouseup', modalMoveStop)
    console.log('CLIC');
  }
  function modalMoveStop(): void {
    document.removeEventListener('mousemove', modalChangePosition)
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

            <div className={styles.chatModal__title} onMouseDown={modalMove}>
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