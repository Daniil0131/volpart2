import './styles/global.css'
import './styles/style.css'
import './styles/root.css'
import './styles/animated.css'
import './image/background_main.jpg'
import { lazy_loading_down } from './lazy-loading'
import { lazy_loading_up } from './lazy-loading'

document.addEventListener('DOMContentLoaded', () => {
const logo = document.querySelector('.header_logo-image');
const header_title = document.querySelectorAll('.about h2, .about p');
const apartment_title = document.querySelector('.apartment_title')
const apartment_list = document.querySelectorAll('.apartment_list article')
const apartment = document.querySelectorAll('.apartment')

lazy_loading_down().observe(logo);
const tar = lazy_loading_up()

header_title.forEach(element => {
    tar.observe(element)
});

lazy_loading_up().observe(apartment_title);


apartment_list.forEach(element => {
    tar.observe(element)
});

});