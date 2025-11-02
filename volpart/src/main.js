import './styles/global.css'
import './styles/style.css'
import './styles/root.css'
import './styles/animated.css'
import './image/background_main.jpg'
import { lazy_loading_down } from './lazy-loading'
import { lazy_loading_up } from './lazy-loading'
import { data_main } from './data/data_card'
import { template_card } from "./template_card"
import { data_second } from './data/data_card'

document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.header_logo-image');
    const header_title = document.querySelectorAll('.about h2, .about p');
    const apartment_title = document.querySelector('.apartment_title')
    const apartment_list = document.querySelectorAll('.apartment_list article')
    const apartment = document.querySelectorAll('.apartment')
    const apartment_arrow_button = document.querySelector('.apartment_arrow_button')
    const apartment_add_sect = document.querySelector('.apartment_add-sect');
    const section_main = document.querySelector(".apartment_list");
    const section_second = document.querySelector(".apartment_list-second");

    lazy_loading_down().observe(logo);
    const tar = lazy_loading_up()
    lazy_loading_up().observe(apartment_title);
    header_title.forEach(element => {
        tar.observe(element)
    });

    

    
    
	console.log(data_main[0].imageUrls_flat_01)
    data_main.slice(0, 4).forEach((item, index) => {
        setTimeout(() => {
            template_card(
            item.title_flat, 
            item.description_flat, 
            item.imageUrls_flat,
            section_main
            )
        }, index * 100)
    })
    
    apartment_arrow_button.addEventListener('click', (e) => {
        const el = apartment_add_sect;
        if (el.classList.contains('apartment_add')) {
            el.classList.remove('apartment_add');
            el.classList.add('apartment_remove');
        } else {
            el.classList.remove('apartment_remove');
            el.classList.add('apartment_add');
        }
        apartment_arrow_button.classList.toggle('apartment_arrow_button-rotate');
        if(el.classList.contains('apartment_add')) {
            setTimeout(() => {
                data_second.forEach((item, index) => {
                    setTimeout(() => {
                        template_card(
                        item.title_flat, 
                        item.description_flat, 
                        item.imageUrls_flat,
                        section_second
                        )
                    }, index * 100)
                })
            }) 
        }
        if(el.classList.contains('apartment_remove')) {
            const section_down = document.querySelector('.apartment_list-second');
            section_down.replaceChildren();
            
        }
    })
    
});