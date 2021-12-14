// import { theKey } from "../settings/theKey.js";
import { getFromStorage, saveToStorage } from "./storage.js";

export function createHtml(json) {
  const articleContainer = document.querySelector(".article-container");

  articleContainer.innerHTML = "";

  //   console.log(json);

  for (let i = 0; i < json.length; i++) {
    const title = json[i].title;
    const id = json[i].id;
    const summary = json[i].summary;

    articleContainer.innerHTML += `<div class="articles">
                                        <i class="fas fa-heart"data-id="${id}" data-title="${title}"data-summary="${summary}"></i>
                                        <h3>${title}</h3>
                                        <p>${summary}</p>
                                        <p >#${id}</p>    
                                   </div>`;
  }

  const favIcon = document.querySelectorAll(".articles i");

  favIcon.forEach((icon) => {
    icon.addEventListener("click", handleClick);
  });

  function handleClick() {
    const clicked = this.classList.toggle("clicked");

    const dataId = this.dataset.id;
    const dataTitle = this.dataset.title;
    const dataSummary = this.dataset.summary;

    const currentFavs = getFromStorage();

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

      saveToStorage(currentFavs);
    } else {
      //remove the object from the array.
      const newFavorite = currentFavs.filter((favorite) => {
        return favorite.id !== dataId;
      });
      saveToStorage(newFavorite);
    }
  }
}
