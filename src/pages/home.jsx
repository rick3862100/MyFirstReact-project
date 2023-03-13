import Header from "../components/Header";
import Main from "../components/Main";
import Description from "../components/Description";
import Footer from "../components/Footer";

export default function Home() {
    return(
        <div className="container main-layout">
            <Header className="layout__header" />
            <Main className="layout__main"/>
            <Description className="layout__descriptions" />
            <Footer className="layout__footer"/>
        </div>
    );
}

