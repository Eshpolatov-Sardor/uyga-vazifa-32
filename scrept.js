let kam = document.querySelector(".kam")
let img = document.querySelector(".img")
let button = document.querySelector(".button")
let body =document.body;
button.addEventListener("click",()=>{
    body.classList.toggle('dark');
})
button.style.color="red"
button.style.width="300px"
button.style.height="50px"
fetch("https://jsonplaceholder.typicode.com/users").then((item)=>{
    return item.json();
}).then((data)=>{
    console.log(data);
    return(
        data.map(item => {
            kam.innerHTML +=`
            <h1>${item.name}</h1>
            <h1>${item.username}</h1>
            <h1>${item.email}</h1>
            <h1>${item.address.street}</h1>
            `
        })
    )
})