const getProducts =async ()=>{
    const {data}=await axios.get('https://dummyjson.com/products');
    const result =data.products.map((product)=>
     `<div class="product">
    <h2>${product.title}</h2>
    <img src='${product.thumbnail}'>
    <a href="details.html?id=${product.id}">datails</a>
    </div>
       `
    ).join(' ');
    document.querySelector(".products").innerHTML=result;
}
getProducts();
