import { createHtml } from "./createHtml.js";

export function filterArticle(data) {
  const filter = document.querySelector("#filter");

  filter.addEventListener("keyup", function () {
    const filterValue = this.value.trim().toLowerCase();

    const filteredArticle = data.filter(function (data) {
      if (data.title.toLowerCase().startsWith(filterValue)) {
        return true;
      }
    });
    createHtml(filteredArticle);
  });
}
