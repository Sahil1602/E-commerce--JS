{/* <div class="cart-card">
         <img class="cart-card-image" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg">
         <div class="cart-item-details">
             <h4 class="cart-card-title">Men Navy Blue Solid Sweatshirt</h4>
             <p class="cart-item-count">x1</p>
             <p class="cart-item-price">Amount Rs 2599</p>
         </div>        
    </div> */}

console.log('loaded')

// var myCart = document.getElementById('kart')
// myCart.onclick(
//     location.assign('checkout_page.htm')
// )


function createItemCard(obj){
    var cartCard = document.createElement('div');
    cartCard.className = 'cart-card'


    var cartCardImage = document.createElement('img');
    cartCardImage.className = 'cart-card-image';
    cartCardImage.src = obj.preview;
    cartCard.appendChild(cartCardImage);


    var cartItemDetails = document.createElement('div');
    cartItemDetails.className = 'cart-item-details';
    cartCard.appendChild(cartItemDetails)
    
    var cartCardTitle = document.createElement('h4');
    cartCardTitle.className = 'cart-card-title';
    cartCardTitle.innerHTML = obj.name;
    cartItemDetails.appendChild(cartCardTitle);

    var cartItemCount = document.createElement('p');
    cartItemCount.className = 'cart-item-count';
    cartItemCount.innerHTML = 'x1';
    cartItemDetails.appendChild(cartItemCount);

    var cartItemPrice = document.createElement('p');
    cartItemPrice.className = 'cart-item-price';
    cartItemPrice.innerHTML = 'Amount Rs' + obj.price;
    cartItemDetails.appendChild(cartItemPrice);

    var itemCount = document.getElementById('item-count');
    itemCount.innerHTML = localStorage.getItem('count');
    console.log(localStorage.getItem('count'))
    
    return cartCard;

}

var cartItems = document.getElementById('cart-items');



var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/product/', true);


                      
xhttp.onreadystatechange = function(){
    console.log('hello')
    if(this.readyState === 4){
        var ecomData = JSON.parse(this.responseText);
        
        for(var i=0; i<ecomData.length; i++){
            if(ecomData[i].id === localStorage.getItem('cardId')){
                // console.log(ecomData[i])
                cartItems.appendChild(createItemCard(ecomData[i]));
            }
        }
    }
}

xhttp.send();