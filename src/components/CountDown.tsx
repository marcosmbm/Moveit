import {useState, useEffect, useContext} from 'react';
import { CountDownContext } from '../context/CountDownContext';
import styles from '../styles/components/CountDown.module.css';



export function CountDown(){

    const {minutos,
           seconds,
           hasFinished,
           isActive,
           startCountDown,
           stopCountDown} = useContext(CountDownContext);
    
    /*
        supondo que seja 25, ela vai retornar '2' e '5'
        caso seja só 5, então com o padStart ela vai preencher com 0, entao vai retornar '0' e '5'
    */
    const [minuteLeft, minuteRight] = String(minutos).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');



    return(
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>

                <span>:</span>

                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {
                hasFinished ? 
                (
                    <button 
                        disabled
                        className={styles.countDownButton} 
                    >
                        Ciclo encerrado
                    </button>
                )
                :
                (
                    <>
                    {
                        isActive === false ?
                        (
                            <button 
                                type="button" 
                                className={styles.countDownButton} 
                                onClick={startCountDown}
                            >
                                Iniciar um ciclo
                            </button>
                        )
                        :
                        (
                            <button 
                                type="button" 
                                className={`${styles.countDownButton} ${styles.countDownButtonActive}`} 
                                onClick={stopCountDown}
                            >
                                Abandonar ciclo
                            </button>
                        )
                    }
                    </>
                )
            }
        </div>
    );
}