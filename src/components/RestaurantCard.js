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

export default RestaurantCard;