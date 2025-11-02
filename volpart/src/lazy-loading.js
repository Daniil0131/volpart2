import { template_card } from "./template_card"

export function lazy_loading_down() {
    return new IntersectionObserver((entries, obs) => {
        entries.forEach(item => {
            if(item.isIntersecting) {
                item.target.classList.add("lazy_animation-down");
                obs.unobserve(item.target);
            }
        })
    }, {
        threshold: 0.2
    });
    
}
export function lazy_loading_up() {
    return new IntersectionObserver((entries, obs) => {
        entries.forEach(item => {
            if(item.isIntersecting) {
                item.target.classList.remove("for_lazy-loading-off");
                item.target.classList.add("for_lazy-loading-on");

                item.target.classList.add("lazy_animation-up");

                obs.unobserve(item.target);
            }
        })
    }, {
        threshold: 0.2
    });
    
}
export function tempLazy() {
    return new IntersectionObserver((entries, obs) => {
        entries.forEach(item => {
            if(item.isIntersecting) {
                item.target.classList.add("lazy_animation-up");
                obs.unobserve(item.target);
            }
        })
    }, {
        threshold: 0.2
    });
    
}