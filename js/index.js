"use strict";
/*deze blok code word gebruikt om meteen iets te tonen aan de gebruiker 
zonder dat erop gefilterd wordt */ 
const newsFinder = {

    async findContent() {
        fetch(' https://thecrew.cc/news/read.php')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            let newsArray= Array(10);
            let htmlString = "<section>";
            for (let i = 0; i < newsArray.length; i++) {
            htmlString +=`
                <section class="sectionVerdeling">
                <article class="imageDiv">
                <img src="${data.news[i].imageURI}" style="width: 100%; height: 100%;">
                <div class="likes">
                <button class="far fa-heart" style="float: left;" aria-hidden="true" id="heart" onClick="like()" type="click" id="likes"></button>
                <p class="plikes">${data.news[i].likes} Likes</p>
                </div>
                </article> 
                <article class="textDiv">
                <h1 class="titelArtikel">${data.news[i].title}</h1>
                ${data.news[i].content}
                </article>`     
            htmlString += "</section>";
            }
        document.getElementById('contentResult').innerHTML = htmlString;
        });
    }
}
newsFinder.findContent();




