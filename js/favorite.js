import { getFromStorage } from "./components/storage.js";

const favorites = getFromStorage();

const articleContainer = document.querySelector(".article-container");

favorites.forEach((favorites) => {
  articleContainer.innerHTML += `<div class="articles">
                                    <i class="fas fa-heart"></i>
                                    <h3>${favorites.title}</h3>
                                    <p>${favorites.summary}</p>
                                    <p >#${favorites.id}</p>    
                                </div>`;
});
