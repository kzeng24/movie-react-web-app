import React from 'react';
import "./index.css";
import "../index.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
/* import CardFlip from 'react-card-flip'; */

function HomeCarousel() {
    const divStyle = {
        left: '6%',
        padding: '10px',
    };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 3
        },
        mobile: {
            breakpoint: { max: 767, min: 464 },
            items: 2,
            slidesToSlide: 1
        }
    };

    const sliderImageUrl = [
        {
            url:
                "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1"
        },
        {
            url:
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
        },
        {
            url:
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*"
        },
        {
            url:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"
        },
        {
            url:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU"
        }
    ];

    return (
      <div>
        <div className="wd-carousel-title position-relative">
          <div class="wd-text-container">
            <h3 className="wd-purpleText">Latest Releases</h3>
          </div>
        </div>
        <div className="wd-carousel-parent">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            partialVisible={false}
          >
            {sliderImageUrl.map((imageUrl, index) => {
              return (
                // <CardFlip>
                <div className="wd-slider p-0 m-0" key={index}>
                  <img src={imageUrl.url} alt="movie" />
                </div>
                // </CardFlip>
              );
            })}
          </Carousel>
        </div>
        <div className="wd-carousel-title position-relative">
          <div class="wd-text-container">
            <h3 className="wd-purpleText">Top Picks</h3>
          </div>
        </div>
        <div className="wd-carousel-parent">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            partialVisible={false}
          >
            {sliderImageUrl.map((imageUrl, index) => {
              return (
                // <CardFlip>
                <div className="wd-slider p-0 m-0" key={index}>
                  <img src={imageUrl.url} alt="movie" />
                </div>
                // </CardFlip>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
}
export default HomeCarousel;