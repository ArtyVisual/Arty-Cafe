document.addEventListener('DOMContentLoaded', () => {
    
    // Clear the 'buyings' data when the page is unloaded or closed
    
    
    

    let details = JSON.parse(localStorage.getItem('details')) || [];
    let cartElement = document.getElementById('details');
   
    
     
    details.forEach((detail, index) => {
        let productDiv = cartElement;
        let productImage = document.querySelector('.product-image');
        let productName = document.querySelector('.product-name');
        let productPrice = document.querySelector('.product-price');
        let productQuantity = document.querySelector('.product-quantity');

        productImage.src = detail.image;
        productImage.alt = detail.name;
        productName.textContent = detail.name;
        productPrice.textContent = `₹${detail.price}`;
        productQuantity.value = detail.quantity || 1;

        productQuantity.addEventListener('keydown', (e) => {
            e.preventDefault();
        });
// 
        // Ensure quantity cannot go below 1
        // productQuantity.addEventListener('input', () => {
        //     if (productQuantity.value < 1) {
        //         productQuantity.value = 1;
        //     }
        //     buyings[index].quantity = parseInt(productQuantity.value); // Update quantity in buying array
        //     localStorage.setItem('buying', JSON.stringify(buyings)); // Save updated buying array
        //     updateTotal();
           
       

        });


  

        // updateTotal(); // Calculate the initial total
    });


