import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Projects() {

    const cardContents =[
        {imgSrc: "https://img.freepik.com/free-photo/metal-shopping-cart-filled-with-groceries-night-generated-by-ai_188544-53746.jpg?t=st=1715094277~exp=1715097877~hmac=45989d871d7b14a860906b7770a5a20fba66086233f52eabe3f97f3c613c86a2&w=1380",
        imgAlt: "e-commerce store",
        title: "Sasa Nguo Clothing Store",
        description:"Elevate your style with Sasa Nguo, your premier destination for fashion-forward finds.Discover curated collections blending sophistication and comfort, ensuring you always look and feel your best.Shop now and redefine your wardrobe effortlessly",},

        {
            imgSrc:"https://img.freepik.com/premium-photo/tablet-computer-sitting-top-table-cup-coffee_1101924-2055.jpg?w=826",
            imgAlt:"E-learning",
            title:"Elimu Mkononi",
            description:"Dive into a world of limitless learning possibilities with Elimu Mkononi,your gateway to knowledge empowerment.Discover expert-led courses spanning every topic imaginable, from business essentials to creative arts, all accessible at your fingertips. Join a vibrant community of learners, unlock your potential, and embark on a journey of lifelong learning with us."  
        },

        {
            imgSrc:"https://img.freepik.com/premium-photo/ad-fusion-fiesta_1029469-169391.jpg?w=1380",
            imgAlt:"Fast food",
            title:"Yum Rush",
            description:"Satisfy your cravings effortlessly with Yum Rush, the ultimate food delivery solution. From sizzling burgers to exotic cuisines, explore a world of flavors delivered straight to your doorstep. With seamless ordering, real-time tracking, and a diverse selection of restaurants, your next delicious meal is just a tap away. Download now and elevate your dining experience",  
        },

        {
            imgAlt:"Splash",
            imgSrc:"https://img.freepik.com/premium-photo/game-element-design-assets_939196-96.jpg?w=826",
            title:"Splash",
            description:"Splash is an online game.Splash:Embark on a delightful journey through a world of sugary challenges.Match candies, unleash sweet combos, and conquer each level for a deliciously satisfying experience", 
        },

        {
            imgAlt:"Cinema Max",
            imgSrc:"https://img.freepik.com/free-photo/reel-that-has-red-tin-that-says-word-it_1340-23312.jpg?t=st=1715217613~exp=1715221213~hmac=c9a950499c0599613fd7498a8f21d6404ba2fc716f8dbb9f67e84054839143b1&w=1380",
            title:"Cinema Max",
            description:"Cinema Max is more than just a movie app; it's a vibrant community of film enthusiasts like yourself. Connect with fellow cinephiles, share reviews, and join discussions about your favorite films and directors.With convenient features like offline viewing, watchlists, and synchronized viewing across devices, Cinema Max ensures that the magic of cinema is always within reach, whenever and wherever you are.",
          },
    ]

          const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
    
  return (
    <>
    <div className="app">
    <Header />
    <h2 className="text-3xl font-bold text-center">Projects</h2>
        <Slider {...settings}>
        {
            cardContents.map((card,index) => (
                <ProjectCard key={index}
                imgAlt={card.imgAlt}
                imgSrc={card.imgSrc}
                title={card.title}
                description={card.description}
                />
            ))
        }
        </Slider>
        <Footer />
    </div>
    </>
  )
}

function ProjectCard({
    imgSrc,
    imgAlt,
    title,
    description,
}) {
  return (
    <div>
          
         <section id="projects" className="py-10">
<div className="container mx-auto px-6" id='slider-container'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
{Array.from({ length: 1 }, (_, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={imgSrc} alt={imgAlt} />
<div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title} {index + 1}</div>
                <p className="text-gray-700 text-base">
                  Details about Project {index + 1}. {description}
                </p>
              </div>
            </div>
))}
        </div>
      </div>
    </section>
           
        </div>
    );
};
