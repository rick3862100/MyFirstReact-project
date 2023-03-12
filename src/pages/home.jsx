import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";

function Home() {
    return(
        <div className="container">
            <Header className="layout-header" />
            <Main className="layout-main"/>
            <Footer className="layout-footer"/>
        </div>
    );
}