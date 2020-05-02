let carts = document.querySelectorAll('.add-cart');


let products = [
    {
        name:'Sandal Brown Shoe',
        tag:'hot sell(men shoes)',
        price: 150,
        inCart: 0 
    },
    {
        name:'Navy Casual Shoe',
        tag:'hot sell(women shoes)',
        price: 120,
        inCart: 0 
    },
    {
        name:'Black Heels',
        tag:'hot sell(women shoes 2)',
        price: 200,
        inCart: 0 
    },
    {
        name:'Comit Men Dress Shoes',
        tag:'new(men shoes)',
        price: 300,
        inCart: 0 
    },
    {
        name:'Cognac Ankle Boots',
        tag:'new(men shoes 2)',
        price: 350,
        inCart: 0 
    },
    {
        name:'Blackpink Hells',
        tag:'new(women shoes)',
        price: 320,
        inCart: 0 
    },
    {
        name:'Black Casual Shoes',
        tag:'discount(women shoes)',
        price: 150,
        inCart: 0 
    },
    {
        name:'Beige Heels',
        tag:'discount(women shoes 2)',
        price: 200,
        inCart: 0 
    },
    {
        name:'Taupe Casual shoes',
        tag:'discount(men shoes)',
        price: 175,
        inCart: 0 
    },
    {
        name:'Vapor Max shoes',
        tag:'vapor max shoes',
        price: 80,
        inCart: 0 
    },
    {
        name:'React Phantom Shoes',
        tag:'react phantom shoes',
        price: 120,
        inCart: 0 
    },
    {
        name:'Metcoon Shoes',
        tag:'metcoon shoes',
        price: 110,
        inCart: 0 
    },
    {
        name:'Air WillWood Shoes',
        tag:'air willWood shoes',
        price: 100,
        inCart: 0 
    },
    {
        name:'Lebron Shoes',
        tag:'lebron shoes',
        price: 70,
        inCart: 0 
    },
    {
        name:'Mar shoes',
        tag:'mar shoes',
        price: 90,
        inCart: 0 
    },
    {
        name:'Mx-720 Shoes',
        tag:'mx-720 Shoes',
        price: 130,
        inCart: 0 
    },
    {
        name:'Air Max Shoes',
        tag:'air max shoes',
        price: 140,
        inCart: 0 
    },
    {
        name:'Air Force Shoes',
        tag:'air force shoe',
        price: 100,
        inCart: 0 
    },
    {
        name:'Aphina Shoes',
        tag:'aphina shoe',
        price: 110,
        inCart: 0 
    },
    {
        name:'Court Blanc Shoes',
        tag:'court blanc shoe',
        price: 90,
        inCart: 0 
    },
    {
        name:'Free Shoes',
        tag:'free shoe',
        price: 120,
        inCart: 0 
    },
    {
        name:'Legend Shoes',
        tag:'legend shoe',
        price: 130,
        inCart: 0 
    },
    {
        name:'Max 2090 shoes',
        tag:'max 2090',
        price: 80,
        inCart: 0 
    },
    {
        name:'Verona Shoes',
        tag:'verona shoe',
        price: 140,
        inCart: 0 
    },
    {
        name:'Zoom Shoes',
        tag:'zoom Shoe',
        price: 150,
        inCart: 0 
    },
    {
        name:'Academy Shoes',
        tag:'academy shoe',
        price: 200,
        inCart: 0 
    },
    {
        name:'Freak Shoes',
        tag:'freak shoe',
        price: 190,
        inCart: 0 
    },
    {
        name:'Max 90 Shoes',
        tag:'max 90 shoe',
        price: 210,
        inCart: 0 
    },
    {
        name:'Mg 8 Shoes',
        tag:'mg 8 shoe',
        price: 250,
        inCart: 0 
    },
    {
        name:'Revolution Shoes',
        tag:'revolution shoes',
        price: 240,
        inCart: 0 
    },
    {
        name:'Vapor shoes',
        tag:'vapor shoe',
        price: 150,
        inCart: 0 
    },
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
    },
    {
        name:'React Shoes',
        tag:'react shoe',
        price: 180,
        inCart: 0 
    },
    {
        name:'Renew Shoes',
        tag:'renew shoes',
        price: 200,
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
               <ion-icon name="close-circle"></ion-icon>
              <img src="./men Shoes/${item.tag}.jpg">
              <span>${item.name}</span>
            </div>  
            <div class="price">$${item.price},00</div>
            <div class="quantity">
                <ion-icon name="chevron-back-circle-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="chevron-forward-circle-outline"></ion-icon>
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


