const ReviewCard = ({size, absolute}) => {
    return ( 
        <div className={`review ${size==="small" ? "review--small" : "review--large"} ${absolute ? "review--absolute" : ""}`}>
            <p className={`review__title ${size==="small" ? "review__title--small" : ""}`}>Amazing people</p>
            <p className={`review__quote ${size==="small" ? "review__quote--small" : ""}`}>"They are people who are not only following the tasks, but can work as a team. Together."</p>
            <div className="review__wrapper">
                {size === "small" ? <></> : <img src="Ellipse 49.png" alt="" />}
                <div>
                    <p className="review__name">Matthis Piëst</p>
                    <p className="review__position">COO at WieBetaaltWat</p>
                </div>
            </div>
        </div>
     );
}
 
export default ReviewCard;