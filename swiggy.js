import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 * - RestaurantCard
 *    - Img
 *    - Name of Restaurant, star rating, cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

// Functional Component - javascript function that renders JSX(JavaScript XML) that returns react elements

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <img
                className="swiggyLogo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/burlgr826rdbqr4lrtjm"
                />
            </div>
            <div className="items">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Cart
                    </li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    return (
        <div className="res-card" style={{backgroundColor: "greenyellow", padding: "5px", margin: "5px", border: "1px solid black"}}>
            <img 
            className="res-logo" style={{width: "190px", padding: "5px"}}
            alt="logo of refreshment-iceCream"
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1200,h_630/NI_CATALOG/IMAGES/ciw/2026/5/4/a038051a-14ef-42d0-9597-5c9822fab800_1_MN_b826ce05-65c0-41d0-b747-94b46d89179d.jpg"
            />
            <h3>
                {props.resName}
            </h3>
            {/* cuisine */}
            <h4>
                {props.resCuisine}
            </h4>
            <h4>
                {props.starRating}
            </h4>
            <h4>
                {props.deliveryTime}
            </h4>

        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {/* props - passing argument to a function means passing properties to a component */}
                <RestaurantCard 
                resName="Meghna Foods"
                resCuisine = "Chocolate Ice Cream"
                starRating = "4"
                deliveryTime = "15 minutes"
                />
                <RestaurantCard 
                resName="KFC"
                resCuisine = "Burger"
                starRating = "5"
                deliveryTime = "25 minutes"
                />
                <RestaurantCard  
                resName = "Dominos"
                resCuisine = "Hot Cheese Pizza"
                starRating = "4.5"
                deliveryTime = "30 minutes"
                />
                <RestaurantCard 
                resName = "Dhaba Delight"
                resCuisine = "Paneer Tikka"
                starRating = "2.5"
                deliveryTime = "35 minutes"
                />
                <RestaurantCard 
                resName="Crusto" 
                resCuisine = "Pasta"
                starRating = "3"
                deliveryTime = "36 minutes"
                />
                <RestaurantCard 
                resName="Pizza Hut"
                resCuisine="Garlic Pizza"
                starRating = "5.5"
                deliveryTime = "45 minutes"
                />
                <RestaurantCard 
                resName = "Messy Door"
                resCuisine="Veg Hakka Rice"
                starRating = "5"
                deliveryTime = "52 Minutes"
                />
                <RestaurantCard 
                resName = "Narayana Restaurant"
                resCuisine=""
                starRating = "3.5"
                deliveryTime = "42 Minutes"
                />
                <RestaurantCard 
                resName = "Surya Restaurant"
                resCuisine="Pao Bhaji"
                starRating = "4"
                deliveryTime = "25 Minutes"
                />
                <RestaurantCard 
                resName = "Hariveda"
                resCuisine="Paneer Biryani"
                starRating = "4.5"
                deliveryTime = "20 Minutes"
                />
                <RestaurantCard 
                resName = "Burger King"
                resCuisine= "Burger, American, Snacks"
                starRating = "5"
                deliveryTime = "28 Minutes"
                />
                <RestaurantCard 
                resName = "Subway"
                resCuisine="Healthy Food, Sandwich, Salads"
                starRating = "4.0"
                deliveryTime = "22 Minutes"
                />
                <RestaurantCard 
                resName = "Bikarnerwala"
                resCuisine= "Chaat, North Indian, Sweets"
                starRating = "4.1"
                deliveryTime = "30 Minutes"
                />
                <RestaurantCard 
                resName = "Wow! Momo"
                resCuisine="Momos, Chinese, Fast Food"
                starRating = "4.2"
                deliveryTime = "32 Minutes"
                />

                {/* Important Note: Never use index as the key it is considered as bad practise in programming field if there is no unique id we can use index as id but its not recommended its a bad practise 
                best practise to use unique id(best practise)
                */}
            </div>
        </div>
    )
}
const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const MenuCard = () => {
    return <h1>Welcome to swiggy app. Place your order and please enjoy the food.</h1>
}
console.log(MenuCard);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);