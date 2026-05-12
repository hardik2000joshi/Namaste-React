// named import: instead of importing component like import component_Name from "path" we write component_name in curly bracket {} in named import: import {Header} from "./components/Header";
import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import Body from "./components/Body";
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