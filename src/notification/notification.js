import './notification.css'
import { useState, createContext, useContext } from 'react'

const Notification = ({ message, severity, otherClass}) => {

    const notificationStyles = {

        width: '400px',
        height: 'auto',
        padding: '30px',
        backgroundColor: 'white',
        position: 'absolute',
        top: '10%',
        left: 'calc(50% - 200px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
  
    if(message === '') {
        return null
    }

    const config = true ?
    {
        style: notificationStyles,
        className: `${severity === 'success' ? 'success' : 'Error'} ${otherClass || ''}`
    } : {}

return(
     <div className='notificationModal'>
   <div {...config}
>
           
{message}
 </div>
 </div>
)
}

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')
    const [otherClass, setOtherClass] = useState()

    const setNotification = (sev, msg, cls) => {
        setMessage(msg)
        setSeverity(sev)
        setOtherClass(cls)
        setTimeout(() => {
            setMessage('')
        }, 4000)
    }

    return (
        <NotificationContext.Provider value={{setNotification}}>
            <Notification message={message} severity={severity} otherClass={otherClass}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}