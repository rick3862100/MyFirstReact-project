import styles from './header.css'

export default function Header() {
    return (
        <header className={styles.header}>

            <img className={styles.headerAvatar} src="./images/avatar.png" alt="avatar" />
            <h1 className={styles.header__title}>Name</h1>
            <hr className="divider--light" />
            <p className={styles.header__slogan}>Slogan</p>

        </header>
    );
}