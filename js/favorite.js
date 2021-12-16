// import { createHtml } from "./components/createHtml.js";
import { getFromStorage, clearStorage } from "./components/storage.js";
import { theKey } from "./settings/theKey.js";

const favorites = getFromStorage(theKey);
const articleContainer = document.querySelector(".article-container");
const clearBtn = document.querySelector("#clear");

articleContainer.innerHTML = "";

favorites.forEach((favorites) => {
  articleContainer.innerHTML += `<div class="articles">
                                    <i class="fas fa-heart"></i>
                                    <h3>${favorites.title}</h3>
                                    <p>${favorites.summary}</p>
                                    <p >#${favorites.id}</p>    
                                </div>`;
});

clearBtn.addEventListener("click", function () {
  clearStorage();
  articleContainer.innerHTML = "There is no item";
  window.location = "/";
});

if (articleContainer.innerText === "") {
  articleContainer.innerHTML = "There is no item";
}
