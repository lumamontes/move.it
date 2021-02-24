import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/lumamontes.png" alt="Foto de perfil"/>
            <div>
                <strong>Luma Montes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1</p>
            </div>
        </div>
    )
}