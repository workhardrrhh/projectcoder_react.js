import "./CartWidget.css"

const CartWidget = () => {
    return ( <
        div className = "cart-container" >
        <img className = "cart-img"
        src = "https://res.cloudinary.com/diacrc2sy/image/upload/v1669810847/pinky%20tienda%20online/shopping_cart_PNG38_wcpett.webp"
        alt = "cart" / >
        <p className = "cart-number"> 3 </p> 
        </div>
    );
};

export default CartWidget;