import eyeCloseIcon from '../../../../public/auth/eyeClose.svg';
import eyeOpenIcon from '../../../../public/auth/eyeOpen.svg';
import { FC, FormEvent, useState } from "react";
import formatPhoneNumber from '../lib/formatPhoneNumber';
import validateEmail from '../lib/validateEmail';
import styles from './ui.module.scss';

interface props {
  eye?: boolean
  maxLength?: number
  inputName: string
  error: boolean
  password: boolean
  mail:boolean
  number:boolean
  setError: (value: boolean) => void
  setErrorMessage: (message: string) => void
  setSecure?: (secure: string) => void
}

export const AuthInput:FC<props> = ({eye=false, maxLength=26, inputName, setError, error, password, mail, number, setErrorMessage, setSecure}) => {
  const [text, setText] = useState<string>('')
  const [isEyeOpen, setEyeOpen] = useState<boolean>(false)
  const [inputType, setInputType] = useState<'text'| 'password'>(password ? 'password' : 'text')
  const style: any = {
    input: {
      'borderLeft': error ? `1px solid #F54135` : `1px solid lightgray`,
      'borderTop': error ? `1px solid #F54135` : `1px solid lightgray`,
      'borderBottom': error ? `1px solid #F54135` : `1px solid lightgray`,
      'borderRight': eye ? 'none' : `1px solid ${error ? '#F54135' : 'lightgray'}`,
      'borderTopRightRadius': eye ? '0' : '8px',
      'borderBottomRightRadius': eye ? '0' : '8px',
    },
    icon: {
      'backgroundImage': isEyeOpen ? `url(${eyeOpenIcon.src})` : `url(${eyeCloseIcon.src})`,
    },
    iconWrap: {
      'display': eye ? 'flex' : 'none',
      'borderRight': eye ? `1px solid ${error ? '#F54135' : 'lightgray'}` : 'none',
      'borderTop': eye ? `1px solid ${error ? '#F54135' : 'lightgray'}` : 'none',
      'borderBottom': eye ? `1px solid ${error ? '#F54135' : 'lightgray'}` : 'none',
    }
  }
  const handleInput = (event: FormEvent<HTMLInputElement>) => { 
    const text = (event.target as HTMLInputElement).value
    const textLength = text.length
    if (!number && !mail) {
      if (textLength <= maxLength) {
        setText(text)
        setError(false)
      } else if (textLength > maxLength) {
        setError(true)
        setErrorMessage('Максимальная длина - ' + maxLength)
      }
    }
    if (password && setSecure) {
      if (textLength > 4 && textLength <=8 ) {
        setSecure('Средний пароль')
      } else if (textLength < 4) {
        setSecure('Слабый пароль')
      } else if (textLength > 8) {
        setSecure('Надежный пароль')
      }
    }
    if (number) {
      if (textLength <= maxLength) {
        setText(formatPhoneNumber(text))
        setError(false)
      } else if (textLength > maxLength) {
        setErrorMessage('Максимальная длина - ' + maxLength)
        setError(true)
      }
    }
    if (mail) {
      const validated = validateEmail(text)
      if (textLength <= maxLength) {
        if (validated) {
          setText(text)
          setError(false)
        }else {
          setText(text)
          setErrorMessage('Неверный формат почты! Пример: test@example.com')
          setError(true)
        }
      } else if (textLength > maxLength) {
        if (validated) {
          setText(text)
          setError(false)
        }else {
          setText(text)
          setErrorMessage('Неверный формат почты! Пример: test@example.com')
          setError(true)
        }
      }
    }
    if (textLength === 0 && setSecure) {
      setSecure('')
    }
    if (textLength === 0) {
      setError(false)
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
