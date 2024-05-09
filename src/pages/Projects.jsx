import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Projects() {
    const cardContents = [
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
    

   
    return (
        <>
            <Header />
            <main className="mt-20 mb-20"> {/* Margin top and bottom adjustments */}
                <div className="container mx-auto px-6 py-10">
                    <h1 className="text-4xl font-bold text-center mb-6">Our Projects</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cardContents.map((card, index) => (
                            <ProjectCard
                                key={index}
                                imgSrc={card.imgSrc}
                                imgAlt={card.imgAlt}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

function ProjectCard({ imgSrc, imgAlt, title, description }) {
    return (
        <div className="max-w-sm mx-auto mb-6 rounded overflow-hidden shadow-lg">
            <img className="w-full" src={imgSrc} alt={imgAlt} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
}