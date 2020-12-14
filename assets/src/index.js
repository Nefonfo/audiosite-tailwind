import './main.scss';
import './js/components/navbar';
import './js/components/toggle_up';
import './js/components/wav';
import AOS from 'aos';

document.addEventListener('DOMContentLoaded', () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    }); 
    AOS.init();
})
