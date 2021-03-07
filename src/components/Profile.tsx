import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){

    const {level} = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/63175026?s=400&u=06b3f5e246a8e8195373a94a22653fa5ee098b02&v=4" alt="Marcos Barbosa"/>

            <div>
                <strong>Marcos Barbosa Miranda</strong>

                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}