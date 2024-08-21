import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Reviews.css";
const Reviews = () => {
  return (
    <div className="review-banner min-h-[800px] flex justify-center items-center font-[Inter]">
      <div>
        <div className="text-3xl font-bold bg-gradient-to-r from-[#013762] via-[#0080E5] bg-clip-text text-transparent">
          <h1 className="flex justify-center">Client&apos;s Testimonial</h1>
        </div>
        <p className="text-5xl text-center font-semibold mt-2">
          What our Client&apos;s Tell About Us
        </p>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=" container mx-auto pt-10"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className="">
            <div className="">
              <img
                className="mx-auto w-40 rounded-full border-black border-4 "
                src="https://i.postimg.cc/BvX1P83r/Ellipse-12.png"
              />

              <h1 className="px-[400px] font-light text-center mt-2">
                &quot;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestias alias nulla optio earum error voluptate.&quot;
              </h1>

              <p className="text-center font-bold text-3xl">
                Muhammad Asaduzzaman
              </p>
              <p className="text-center font-semibold text-xl">
                Head of IT, Mosco Group
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
