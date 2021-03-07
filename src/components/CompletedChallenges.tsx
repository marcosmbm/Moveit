import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges(){

    const {challengesCompleted} = useContext(ChallengesContext);

   return(
    <div className={styles.CompletedContainer}>
        <span>Desafios completos</span>
        <span>{challengesCompleted}</span>
    </div>
   );
}