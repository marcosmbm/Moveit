import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengContext';
import styles from '../styles/components/ExperenceBar.module.css';


export function ExperienceBar(){

    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>

            <div>
                <div  style={{width: `${percentToNextLevel}%`}}/>

                <span className={styles.currentExperience} style={{left: `${percentToNextLevel} %`}}>
                    {currentExperience} px
                </span>
            </div>
            
            <span>{experienceToNextLevel} px</span>
        </header>
    );
}