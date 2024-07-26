function Details(id, name, price, image,qty) {
    let details = JSON.parse(localStorage.getItem('details')) || [];
    // let productExists = buying.some(product => product.id === id);

    details.push({ id, name, price, image,qty });
    localStorage.setItem('details', JSON.stringify(details));
}

function clearDetails(){
    localStorage.removeItem('details');
}

