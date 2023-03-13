import { Row, Col } from 'antd'
import styles from './main.module.css'
import images from "../../json/images.json"
import ImageItem from '../ImageItem'

export default function Main() {
    return (

        <article className={styles.image__layout}>
            <div className="container">
                <h1>IMAGES</h1>
                <hr className="divider--dark" />
                <Row gutter={[24, 0]}>
                    {images.map(imagedata => (
                        <Col key={imagedata.id} className={styles.image} sm={{ span: 12 }} lg={{ span: 6 }}>
                            <ImageItem imagedata={imagedata} />
                        </Col>
                    ))}
                </Row>
            </div>
        </article>

    );

}