fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    data.forEach(product => {
        document.getElementById("product").innerHTML += `
        <img src="${product.image}"> 
        <h2>${product.price}</h2>
        <h3>${product.description}</h3>

     ` });
});