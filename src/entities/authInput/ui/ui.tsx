import eyeCloseIcon from '../../../../public/auth/eyeClose.svg';
import eyeOpenIcon from '../../../../public/auth/eyeOpen.svg';
import { FC, FormEvent, useState } from "react";
import formatPhoneNumber from '../lib/formatPhoneNumber';
import validateEmail from '../lib/validateEmail';
import validatePassword from '../lib/validatePassword'
import styles from './ui.module.scss';

interface props {
  eye?: boolean
  maxLength?: number
  inputName: string
  password: boolean
  mail:boolean
  number:boolean
  errorMessage: string
  text: string,
  setText: (text: string) => void
  setErrorMessage: (message: string) => void
  setSecure?: (secure: string) => void
}

export const AuthInput:FC<props> = ({
      eye=false,
      maxLength=26,
      inputName,
      password,
      errorMessage,
      mail,
      number,
      setErrorMessage,
      setSecure,
      text,
      setText
}) => {
  const [isEyeOpen, setEyeOpen] = useState<boolean>(false)
  const [inputType, setInputType] = useState<'text'| 'password'>(password ? 'password' : 'text')
  const style: any = {
    input: {
      'borderLeft': errorMessage !== 'notError' ? `1px solid #F54135` : `1px solid lightgray`,
      'borderTop': errorMessage !== 'notError' ? `1px solid #F54135` : `1px solid lightgray`,
      'borderBottom': errorMessage !== 'notError' ? `1px solid #F54135` : `1px solid lightgray`,
      'borderRight': eye ? 'none' : `1px solid ${errorMessage !== 'notError' ? '#F54135' : 'lightgray'}`,
      'borderTopRightRadius': eye ? '0' : '8px',
      'borderBottomRightRadius': eye ? '0' : '8px',
    },
    icon: {
      'backgroundImage': !isEyeOpen ? `url(${eyeOpenIcon.src})` : `url(${eyeCloseIcon.src})`,
    },
    iconWrap: {
      'display': eye ? 'flex' : 'none',
      'borderRight': eye ? `1px solid ${errorMessage !== 'notError' ? '#F54135' : 'lightgray'}` : 'none',
      'borderTop': eye ? `1px solid ${errorMessage !== 'notError' ? '#F54135' : 'lightgray'}` : 'none',
      'borderBottom': eye ? `1px solid ${errorMessage !== 'notError' ? '#F54135' : 'lightgray'}` : 'none',
    }
  }
  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const text = (event.target as HTMLInputElement).value
    const textLength = text.length
    if (!number && !mail) {
      if (textLength <= maxLength) {
        setText(text)
        setErrorMessage('notError')
      } else if (textLength > maxLength) {
        setErrorMessage('Максимальная длина - ' + maxLength)
      }
    }
    if (password && setSecure) {
      setSecure(validatePassword(text))
    }
    if (number) {
      if (textLength <= maxLength) {
        setText(formatPhoneNumber(text))
        setErrorMessage('notError')
      } else if (textLength > maxLength) {
        setErrorMessage('Максимальная длина - ' + maxLength)
      }
    }
    if (mail) {
      const validated = validateEmail(text)
      if (textLength <= maxLength) {
        if (validated) {
          setText(text)
          setErrorMessage('notError')
        }else {
          setText(text)
          setErrorMessage('Неверный формат почты! Пример: test@example.com')
        }
      } else if (textLength > maxLength) {
        if (validated) {
          setText(text)
          setErrorMessage('notError')
        }else {
          setText(text)
          setErrorMessage('Неверный формат почты! Пример: test@example.com')
        }
      }
    }
    if (textLength === 0 && setSecure) {
      setSecure('')
    }
    if (textLength === 0) {
      setErrorMessage('notError')
    }
  }
  return (
    <div className={styles.wrap}>
      <input 
        style={style.input} 
        className={styles.input}
        name={inputName}
        value={text}
        type={inputType}
        onInput={event => handleInput(event)}
      />
      <div 
        style={style.iconWrap} 
        className={styles.iconWrap} 
        onClick={() => {
          setInputType(inputType === 'text' ? 'password' : 'text')
          setEyeOpen(!isEyeOpen)
        }}
      >
        <i style={style.icon} className={styles.icon} draggable='false'/>
      </div>
    </div>
  )
}
