import Header from './Header';
import Features from './Features';
import Footer from './Footer';

import '../../assets/home.scss';

export default function Home(props) {
    const divStyle = {display: props.visible ? "block" : "none"};
    return (
        <article style={divStyle}>
            <Header />
            <Features />
            <Footer />
        </article>
    );
}

