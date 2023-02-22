const insertHTML = (className, tag, arr, flagLinks) => {
  document.querySelector(`.${className}`).innerHTML = arr
    .map((e, i) =>
      flagLinks
        ? `<${tag} href=${
            ["https://www.youtube.com/c/FreelancerLifeStyle?app=desktop"][i] ??
            "."
          } class="link link_${e}" style='background:url("./images/${e}.svg")center/${
            i === 2 ? 3 : 5
          }0% no-repeat,
        url("./images/ellips.svg")center/100% no-repeat'></${tag}>`
        : `<${tag} class="${className}-content ${className}-content_${i}">${e}</${tag}>`
    )
    .join("");
};
insertHTML("top-line__nav", "span", [
  "Доставка",
  "Оплата",
  "Отзывы",
  "Вопрос - ответ",
  "Контакты",
]);
insertHTML("second-line__menu", "span", [
  " Парикмахерская",
  "Барбершоп",
  " Маникюр",
  "Педикюр",
  "Массаж",
  " Мебель",
]);
insertHTML(
  "footer-top__content_links",
  "a",
  ["YouTube", "vk", "facebook", "instagram"],
  true
);
document.querySelector(`.goods`).innerHTML = `<div class="goods__product">
<img
  class="goods__product_image"
  src="./images/product.svg"
  alt="product"
/>
<div class="goods__product_description">
  Парикмахерское кресло «Норм» гидравлическое
</div>
<div class="goods__product_price">9 900 ₽</div>
<button class="goods__product_buy">Купить</button>
</div>`.repeat(4);
