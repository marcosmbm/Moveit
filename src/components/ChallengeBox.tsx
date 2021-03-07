import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengContext';
import { CountDownContext } from '../context/CountDownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){       

    const {activeChallenge,resetChallenge,completeChallenge} = useContext(ChallengesContext);
    const {stopCountDown} = useContext(CountDownContext);


    function handleChallengeSucceeded(){
        completeChallenge();
        stopCountDown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        stopCountDown();
    }
    
    return(
        <div className={styles.challengeBoxContainer}>
            {
                activeChallenge ? (
                    <div className={styles.challengeActive}>
                        <header>Ganhe {activeChallenge.amount} xp</header>

                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`}/>
                            <strong>Novo Desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>

                        <footer>
                            <button
                                type="button"
                                className={styles.failedButton}
                                onClick={handleChallengeFailed}
                            >
                                Falhei
                            </button>

                            <button
                                type="button"
                                className={styles.succeedButton}
                                onClick={handleChallengeSucceeded}
                            >
                                Completei
                            </button>
                        </footer>
                    </div>
                )
                :
                (
                        <div className={styles.challengeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
    
                        <p>
                            <img src="icons/level-up.svg" alt="Level-Up"/>
                            Avance de level completando desafios
                        </p>
                    </div>
                )
            }
        </div>
    );
}