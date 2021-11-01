import { useContext, useEffect } from 'react';
import { VscGithubInverted } from 'react-icons/vsc'
import { AuthContext } from '../../hook/auth';
import { api } from '../../services/api';
import styles from './styles.module.scss'



export function LoginBox() : JSX.Element{

    const { signInUrl, user} = useContext(AuthContext)

    console.log(user)

    return (
        <div className={styles.loginBoxWrapper}> 

                <strong> Entre e compartilhe sua mensagem </strong>

                <a href={signInUrl} className={styles.signInWithGithub}>
                    <VscGithubInverted />
                    Entrar com github
                </a>

        </div>
    )
}