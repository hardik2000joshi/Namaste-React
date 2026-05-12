import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const listOfRestaurants = [
        {
            id: 1234,
            resName: "Meghna Foods",
            resCuisine: "Chocolate Ice Cream",
            starRating: "4",
            deliveryTime: "15 minutes",
        },
        {
            id: 568,
             resName: "KFC",
             resCuisine: "Burger",
                starRating: "5",
                deliveryTime: "25 minutes",
        },
        {
            id: 760,
            resName: "Dominos",
                resCuisine: "Hot Cheese Pizza",
                starRating: "4.5",
                deliveryTime: "30 minutes",
        },
    ]
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div>
                <button className="starRating" onClick={() => {
                    console.log("Top Restaurant Button Clicked");
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {/* props - passing argument to a function means passing properties to a component */}
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard
                    key = {restaurant.id}
                    resName = {restaurant.resName}
                    resCuisine = {restaurant.resCuisine}
                    starRating = {restaurant.starRating}
                    deliveryTime = {restaurant.deliveryTime}
                     />
                ))}
                {/*
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
*/}
                {/* Important Note: Never use index as the key it is considered as bad practise in programming field if there is no unique id we can use index as id but its not recommended its a bad practise 
                best practise to use unique id(best practise)
                */}
            </div>
        </div>
    )
}

export default Body;