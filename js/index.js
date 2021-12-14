import { createHtml } from "./components/createHtml.js";
import { filterArticle } from "./components/filterArticles.js";
import { baseUrl } from "./settings/baseUrl.js";

(async function getArticle() {
  const url = baseUrl + "articles";

  const response = await fetch(url);
  const json = await response.json();
  console.log(json);

  createHtml(json);
  filterArticle(json);
})();
