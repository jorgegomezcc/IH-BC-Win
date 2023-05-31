/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */

//Get the url
let getUrl = new URL(window.location.href);

//Get the ID value from url
let getId = getUrl.searchParams.get('p');

//Function with DOM manipulation to show the post from index page

const postFromId = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(data => {
        document.querySelector('#post-title').innerHTML += `<h2>${data.title}</h2>
</div>
<div id="project-subtitle">
<h2>${data.title}</h2>
<h3>Completed on </h3>
</div>
<div id="api-cards-container">
    <div class="api-cards" >
        <div class="api-post" >
            <img class="api-img" src="./images/projects-section/${data.id}.jpg" alt="Project ${data.id} img">
            <p>${data.body}</p>
        </div>
    </div>`;
})
    // .catch (error => console.log(error));
}

postFromId(getId);

// function getPosts(){
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//         if(response.ok)    
//             return response.json()
//         else
//             throw Error("Failed to get Posts data");
//     })
//     .catch((error) => {
//         console.log(error.message);
//     })
// }

// function newRandomChild(parent, data){
//     let newChild = document.createElement("div");
//     newChild.className = "post";
//     newChild = document.createElement("div");
//     let i = Math.floor(Math.random() * 100);
//     newChild.innerHTML = `
//     <div class="article" id="${data[i].id}">    
//         <h2>${data[i].title}</h2>
//         <p>${data[i].body}</p>
//         <a rel="stylesheet" href="http://127.0.0.1:5500/Projects/Project1/project.html?id=${data[i].id}">Read More</a>
//     </div> 
//     `;
//     parent.appendChild(newChild);
// }

// function newChildById(parent, data){
//     // Obtener la URL actual
//     var url = new URL(window.location.href);
//     // Obtener el valor de un parámetro específico
//     var id = url.searchParams.get('id');
//     let newChild = document.createElement("div");
//     newChild.className = "post";
//     newChild = document.createElement("div");
//     newChild.innerHTML = `
//     <div class="main-article" id="${data[id-1].id}">    
//         <h2>${data[id-1].title}</h2>
//         <p>${data[id-1].body}</p>
//         <p>Author: ${data[id-1].userId}</p>
//     </div> 
//     `;
//     parent.appendChild(newChild);
// }

// getPosts().then((data) => {
//     let projectsTabsParent = document.querySelector("#projectsTabs");
//     let mainProjectParent = document.querySelector("#mainProject");
//     newChildById(mainProjectParent,data);
//     newRandomChild(projectsTabsParent,data);
//     newRandomChild(projectsTabsParent,data);
//     newRandomChild(projectsTabsParent,data);
// })