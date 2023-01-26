const Footer = () => {
    return ( 
        <footer className="container">
            <div className="footer">
                <div className="footer__left">
                    <img className="footer__title" src="/alba-logo.svg" alt="" />
                    <p className="footer__text footer__text--copy">Albatech acts as a corporate partner to help digitize their business to accelerate trends in remote work.</p>
                    <div className="footer__logo">
                        <img src="/Fb.svg" alt="" />
                        <img src="/Ig.svg" alt="" />
                        <img src="/Linked.svg" alt="" />
                    </div>
                </div>
                <div>
                    <p className="footer__title">Website</p>
                    <div className="footer__links">
                        <a href="/" className="footer__text">About</a>
                        <a href="/" className="footer__text">Service</a>
                        <a href="/" className="footer__text">Portfolio</a>
                        <a href="/" className="footer__text">Blog</a>
                        <a href="/" className="footer__text">Career</a>
                    </div>
                </div>
                <div className="footer__contact">
                    <p className="footer__title">Contact</p>
                    <p className="footer__text footer__text--address">The Prominence Blok 38D No.25 Jl. Jalur Sutera Barat, Alam Sutera, Kota Tangerang, Banten 15143</p>
                    <p className="footer__text"><span className="text-dark">P: </span>+62 81 1889 3383</p>
                    <p className="footer__text"><span className="text-dark">E: </span>info@albatech.id</p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;