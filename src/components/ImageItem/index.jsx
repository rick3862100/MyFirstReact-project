import styles from './imageItem.module.css'

export default function ImageItem({imagedata}) {
    return (
        <div>
            <a href="" className={styles.image__link}>
                <img src={imagedata.image__src} alt="" className={styles.image__style} />
            </a>
            <p className={styles.image__title}>{imagedata.image__title}</p>
        </div>
    );
}