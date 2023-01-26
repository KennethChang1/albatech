const PortfolioCard = ({title, subtitle, copy}) => {
    return ( 
        <div className="portfolio-card">
            <img src="/Rectangle 1914.png" alt="" />
            <div className="card">
                <p className="card__subtitle">{subtitle}</p>
                <p className="card__title">{title}</p>
                <p className="card__copy">{copy}</p>
            </div>
        </div>
    );
}
 
export default PortfolioCard;