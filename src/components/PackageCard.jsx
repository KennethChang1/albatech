const PackageCard = ({title, copy, img}) => {
    return (
        <div className="card card--package">
            <img className="card__img" src={`/${img}.svg`} alt="" />
            <p className="card__title">{title}</p>
            <p>{copy}</p>
        </div>
    );
}
 
export default PackageCard;