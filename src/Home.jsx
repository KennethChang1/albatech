import PackageCard from "./components/PackageCard";
import { useState } from "react";
import PortfolioCard from "./components/PortfolioCard";
import ReviewCard from "./components/ReviewCard";
import { Carousel } from "react-responsive-carousel";
import Footer from "./components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const Home = () => {
    const logoArray = ["1902", "1903", "1904", "1905", "1906", "1907", "1908", "1909", "1910", "1911", "1912", "1925", "1926", "1930"]
  return (
    <>
        <div className="header">
            <img className="header__img" src="/Header-img.png" alt="" />
            <div className="header__copy-container">
                <h1 className="header__title">Build or scale up</h1>
                <p className="header__subtitle">your development team</p>
                <div className="header__wrapper">
                    <img src="/yellow-line.png" alt="" />
                    <p className="header__copy">in weeks, not months</p>
                </div>
                <Link to={"/login"}><button className="btn">Book now</button></Link>
            </div>
        </div>
        <div>
            <div className="container package">
                <div className="container__header-wrapper">
                    <p className="container__subtitle">Complete Package</p>
                    <h2 className="container__title container__title--shadow">From product design to software continous delivery</h2>
                </div>
                <div className="package__wrapper">
                    <PackageCard title="Website development" copy="High-performance website to reach out more your potential customers" img="Group 6"></PackageCard>
                    <PackageCard title="Mobile apps development" copy="To accelerate your business process" img="Mobile apps development"></PackageCard>
                    <PackageCard title="Digital product design" copy="Complete digital product creations from UX prototyping to final UI designs" img="Digital product design"></PackageCard>
                    <PackageCard title="Maintenance" copy="Make sure your digital environment keep online and updated" img="Maintenance"></PackageCard>
                    <PackageCard title="CMS development" copy="You can update your website content yourself" img="CMS development"></PackageCard>
                    <PackageCard title="Integrated payment gateway" copy="Simplify the payment system with just one step" img="Payment"></PackageCard>
                </div>
            </div>
        </div>

        <section className="container tech">
            {logoArray.map((item, index)=>(
                <img key={index} className="tech__img" src={`/Rectangle ${item}.svg`}></img>
            ))}
        </section>

        <section className="container stats">
            <h2 className="stats__title">Our Progress Comes with a Collaboration Between</h2>
            <h2 className="stats__title">Creativity, Ideas, and Technology</h2>
            <div className="stats__wrapper">
                <div>
                    <p className="stats__number">1000+</p>
                    <p className="stats__text">Designs</p>
                </div>
                <div>
                    <p className="stats__number">30+</p>
                    <p className="stats__text">Products</p>
                </div>
                <div>
                    <p className="stats__number">58+</p>
                    <p className="stats__text">Website Developments</p>
                </div>
            </div>
        </section>

        <section className="container portfolio">
            <div className="container__header-wrapper">
                <p className="container__subtitle">Portfolio</p>
                <h2 className="container__title">The software that we build</h2>
                <h2 className="container__title container__title--margin">takes our client to the next level</h2>
            </div>
            <div className="portfolio-wrapper">
                <PortfolioCard subtitle="Mobile apps" title="ILIOS app (B2B E-commerce)" copy="Has a unique selling point where not all companies offer applications for sales, data collection and management."></PortfolioCard>
                <PortfolioCard subtitle="Website development" title="Home and Living" copy="Albatech helps in creating a website catalog to show brand identity and information in accordance with vision and mission of Home and Living."></PortfolioCard>
                <PortfolioCard subtitle="Website development" title="HIPPO" copy="Albatech help to create e-commerce and company profile for Hippo’s Website with realtime transaction and integration with Payment Gateway to accept multi payment."></PortfolioCard>
            </div>
            <div className="btn-container">
                <button className="btn">Learn now</button>
            </div>
        </section>

        <section className="container review-section">
            <div className="container__header-wrapper">
                <p className="container__subtitle">Testimonials</p>
                <h2 className="container__title">What clients love in working</h2>
                <h2 className="container__title container__title--review-margin">with Albatech team</h2>
            </div>
            <div className="review-container">
                <img className="review-square" src="/Group 25.svg" alt="" />
                <img className="quote-logo" src="/Petik.svg" alt="" />
                <div>
                    <ReviewCard size="large"></ReviewCard>
                    <ReviewCard size="small"></ReviewCard>
                </div>
                <img className="review__decor" src="/Group 24.svg" alt="" />
                <div>
                    <ReviewCard size="small"></ReviewCard>
                    <ReviewCard size="large"></ReviewCard>
                </div>
                <img className="quote-logo-reverse" src="/Petik (1).svg" alt="" />
                <ReviewCard size="small" absolute="true"></ReviewCard>
            </div>
        </section>

        <section className="container">
            <Carousel showThumbs={false} showStatus={false}>
                <div className="carousel__wrapper" >
                    <img className="carousel__img" src="/Rectangle 1922.svg" alt="" />
                    <img className="carousel__img" src="/Rectangle 1920.svg" alt="" />
                    <img className="carousel__img" src="/Rectangle 1923.svg" alt="" />
                    <img className="carousel__img" src="/Rectangle 1919.svg" alt="" />
                    <img className="carousel__img" src="/Rectangle 1921.svg" alt="" />
                </div>
                <div className="carousel__wrapper" >
                    <img className="carousel__img" src="/Rectangle 1922.svg" alt="" />
                    <img className="carousel__img" src="/Rectangle 1920.svg" alt="" />
                    <img className="carousel__img" src="/Rectangle 1923.svg" alt="" />
                    <img className="carousel__img" src="/Rectangle 1919.svg" alt="" />
                    <img className="carousel__img" src="/Rectangle 1921.svg" alt="" />
                </div>
                <div className="carousel__wrapper" >
                    <img className="carousel__img" src="/Rectangle 1922.svg" alt="" />
                    <img className="carousel__img" src="/Rectangle 1920.svg" alt="" />
                    <img className="carousel__img" src="/Rectangle 1923.svg" alt="" />
                    <img className="carousel__img" src="/Rectangle 1919.svg" alt="" />
                    <img className="carousel__img" src="/Rectangle 1921.svg" alt="" />
                </div>
            </Carousel>
        </section>

        <section className="container consultation">
            <div className="consultation-container">
                <p className="consultation__subtitle">Is software important for your business?</p>
                <p className="consultation__title">Build it with Albatech</p>
                <button className="btn btn-secondary">Consultation now</button>
            </div>
        </section>

        <Footer></Footer>
    </>

  );
};

export default Home;
