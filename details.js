const getProduct=async ()=>{
     const params=new URLSearchParams(window.location.search);
     const id=params.get('id');
     const {data}=await axios.get(`https://dummyjson.com/products/${id}`);
     return data
}
const displayProduct=async()=>{
    const data=await getProduct();
    const img=data.images.map((image)=>{
        return `
        <img src='${image}' width=200px>
        `;
    }).join(''); 
    const result=`<h2>${data.title}</h2>
    <p>${data.description}</p>
    <span>${data.price}</span>
    `
   
    document.querySelector(".details").innerHTML=result;
    document.querySelector(".details-image").innerHTML=img;
}
displayProduct();