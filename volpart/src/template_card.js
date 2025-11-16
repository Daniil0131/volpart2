
const card_tpl = document.querySelector("#article_temp");
const apartment_arrow_button_down_tpl = document.querySelector('.apartment_arrow_button-down-tpl');


import { lazy_loading_up } from "./lazy-loading"
const observer = lazy_loading_up();
export function template_card(title, description, imageArr, where) {
    const node = card_tpl.content.cloneNode(true);
    
    const imageArrNode = Array.from(node.querySelectorAll(".article_list .article_list-item"));
    const article_title = node.querySelector(".article_title");
    const article_text = node.querySelector(".article_text");
    const articleRoot = node.querySelector('.article')
    for(let i = 0; i < imageArrNode.length; i++) {    
        imageArrNode[i].src = imageArr[i];
        imageArrNode[i].loading = "lazy";
    }
    article_title.textContent = title;
    article_text.textContent = description;
    const apartment_button = node.querySelector('.article_button');
    const dialog = node.querySelector('.flatCost');
    console.log(apartment_button)
    apartment_button.addEventListener("click", () => {
        dialog.showModal()
    })
    node.querySelector(".article")
    where.appendChild(node)
    if (articleRoot) {
    observer.observe(articleRoot);
    } else {
        console.warn("template_card: элемент .article не найден внутри шаблона");
    }
    
}
export function button_temp() {
    
    
}