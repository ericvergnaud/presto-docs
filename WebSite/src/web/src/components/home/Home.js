import Header from './Header';
import Features from './Features';
import Footer from './Footer';

import '../../assets/css/home.scss';

export default function Home(props) {
    const searchParams = new URLSearchParams(window.location.search);
    const section = searchParams.get("section");
    if(section) {
        props.history.push("/" + section);
        return <div/>;
    } else {
        const divStyle = {display: props.visible ? "block" : "none"};
        return (
            <article className="home" style={divStyle}>
                <Header/>
                <Features history={props.history}/>
                <Footer/>
            </article>
        );
    }
}

