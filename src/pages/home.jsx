import Header from "../components/Header";
import Main from "../components/Main";
import Description from "../components/Description";
import Footer from "../components/Footer";

function Home() {
    return(
        <div className="container">
            <Header className="layout-header" />
            <Main className="layout-main"/>
            <Description className="layout-descriptions" />
            <Footer className="layout-footer"/>
        </div>
    );
}

export default Home;