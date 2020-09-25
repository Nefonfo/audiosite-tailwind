import {all} from '../global/variables';
import {scrollListener} from '../global/utils';

document.addEventListener('DOMContentLoaded', () => {
    const toggles_up = all('#nf-toggle-up');
    toggles_up.forEach((c) => {
        const genericCallback = () => scrollListener(
            window,
            300,
            '#nf-toggle-up',
            'nf-active',
            null,
            false,
            (query, className) => {
                if(!query.classList.contains(className)){
                    query.classList.add('nf-active')
                }
            },
            (query, className) => {
                if(query.classList.contains(className)){
                    query.classList.remove('nf-active')
                }
            }
        );

        window.addEventListener('load', genericCallback);
        window.addEventListener('scroll', genericCallback);
        window.addEventListener('resize', genericCallback);        
        c.addEventListener('click', () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });
        
        
    });
})