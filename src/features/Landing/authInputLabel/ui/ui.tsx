import { AuthInput } from "@/entities/Landing/authInput"
import { FC, useEffect, useState } from "react"
import styles from './ui.module.scss'

interface props {
  inputName: string
  eye?: boolean
  password?: boolean
  mail?:boolean
  number?:boolean
  passwordSignInMode?: boolean
}

export const AuthInputLabel:FC<props> = ({inputName, eye=false, password=false, passwordSignInMode=false, mail=false, number=false}) => {
  const [error, setError] = useState<boolean>(false)
  const [secure, setSecure] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('error')
  const [color, setColor] = useState<string>('#DA4242')
  const style = {
    label: {
      'color': error ? '#F54135' : 'black'
    },
    secure: {
      'color': color,
      'opacity': secure !== '' ? 1 : 0
    },
    secureBar: {
      'backgroundColor': color,
      'opacity': secure !== '' ? 1 : 0
    }
  }
  useEffect(() => {
    if (secure === 'Слабый пароль') setColor('#DA4242')
    if (secure === 'Средний пароль') setColor('#EDB16A')
    if (secure === 'Надежный пароль') setColor('#58904F')
  }, [secure])
  return (
    <div className={styles.wrap}>
      <label style={style.label} htmlFor={inputName} className={styles.label}>{inputName}</label>
      <AuthInput 
        eye={eye} 
        inputName={inputName} 
        setError={setError} 
        error={error} 
        setErrorMessage={setErrorMessage} 
        setSecure={setSecure}
        password={password}
        mail={mail}
        number={number}
      />
      {!password &&
        <h4 style={{opacity: error ? 1 : 0}} className={styles.error}>{errorMessage}</h4>
      }
      {passwordSignInMode 
        ? <h4 style={{opacity: error ? 1 : 0}} className={styles.error}>{errorMessage}</h4>
        : password 
          && 
          <div className={styles.securityWrap}>
            <span style={style.secureBar} className={styles.securityBar}/> 
            <h4 style={style.secure} className={styles.security}>{secure}</h4>
          </div>  
      }
    </div>
  )
}
