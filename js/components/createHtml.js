import { theKey } from "../settings/theKey.js";
import { getFromStorage, saveToStorage } from "./storage.js";

export function createHtml(json) {
  const articleContainer = document.querySelector(".article-container");

  articleContainer.innerHTML = "";

  json.forEach((data) => {
    articleContainer.innerHTML += `<div class="articles">
                                      <i class="far fa-heart"data-id="${data.id}" data-title="${data.title}"data-summary="${data.summary}"></i>
                                      <h3>${data.title}</h3>
                                      <p>${data.summary}</p>
                                      <p >#${data.id}</p>
                                  </div>`;
  });

  const favIcon = document.querySelectorAll(".articles i");

  favIcon.forEach((icon) => {
    icon.addEventListener("click", handleClick);
  });

  function handleClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const dataId = this.dataset.id;
    const dataTitle = this.dataset.title;
    const dataSummary = this.dataset.summary;

    const currentFavs = getFromStorage(theKey);

    // This is to check if the article exist in the array
    const articleExist = currentFavs.find(function (favorite) {
      return favorite.id === dataId;
    });

    //add the object to the array.
    if (!articleExist) {
      const articles = {
        id: dataId,
        title: dataTitle,
        summary: dataSummary,
      };

      currentFavs.push(articles);

      saveToStorage(theKey, currentFavs);
    } else {
      //remove the object from the array.
      const newFavorite = currentFavs.filter((favorite) => {
        return favorite.id !== dataId;
      });
      saveToStorage(theKey, newFavorite);
    }
  }
}
