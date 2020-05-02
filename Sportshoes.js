let carts = document.querySelectorAll('.add-cart');


let products = [
    {
        name:'Epic Shoes',
        tag:'epic shoe',
        price: 100,
        inCart: 0 
    },
    {
        name:'Fly Shoes',
        tag:'fly shoe',
        price: 110,
        inCart: 0 
    },
    {
        name:'Gravity Shoes',
        tag:'gravity shoe',
        price: 120,
        inCart: 0 
    },
    {
        name:'Infinity Shoes',
        tag:'infinity shoe',
        price: 130,
        inCart: 0 
    },
    {
        name:'Joyride Shoes',
        tag:'joyride shoe',
        price: 140,
        inCart: 0 
    },
    {
        name:'Pegasus shoes',
        tag:'pegasus shoe',
        price: 150,
        inCart: 0 
    }
];
for(let i = 0;i < carts.length;i++){
    carts[i].addEventListener('click',()=>{
       cartNumbers(products[i]);
       totalCost(products[i])
    })

}
 
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


function cartNumbers(product) {
    
     let productNumbers = localStorage.getItem('cartNumbers');

     productNumbers = parseInt(productNumbers);

     if(productNumbers){
         localStorage.setItem('cartNumbers',productNumbers + 1);
         document.querySelector('.cart span').textContent = productNumbers +1;
     }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
     }
    
    setItem(product);
}

function setItem(product){
    
   let cartItems = localStorage.getItem('productsInCart');
   cartItems = JSON.parse(cartItems);
    
   if(cartItems != null){
       if(cartItems[product.tag] == undefined){
           cartItems = {
               ...cartItems,
               [product.tag]: product
           }
       }
       cartItems[product.tag].inCart += 1;
   }else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
   }
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}
function totalCost(product){

    let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is",cartCost);
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost + product.price);
    }else{
        localStorage.setItem("totalCost",product.price);
    }
}


function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products");
    let cartCost = localStorage.getItem('totalCost');
    console.log(cartItems);
    if( cartItems && productContainer){
        
      productContainer.innerHTML ='';
      Object.values(cartItems).map(item =>{
        productContainer.innerHTML += `
       
           <div class="product">
              <ion-icon name="checkmark-circle"></ion-icon>
              <img src="./sport Shoes/${item.tag}.jpg">
              <span>${item.name}</span>
            </div>  
            <div class="price">$${item.price},00</div>
            <div class="quantity">
                <ion-icon name="cart-outline"></ion-icon>
                <span>${item.inCart}</span>
               
            </div>
            <div class="total">
                $${item.inCart * item.price},00
            </div>
           
           `;
      });
     
      productContainer.innerHTML += `
         <div class="basketTotalContainer">
             <h4 class="basketTotalTitle">
            Basket Total 
            </h4>
           <h4 class="basketTotal">
                $${cartCost},00 
                </h4>
         

        
                  
       `;     
     }
}

onLoadCartNumbers();
displayCart();


