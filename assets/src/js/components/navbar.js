import {q, all} from '../global/variables';
import {scrollListener} from '../global/utils';

// make responsive menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const togglers = all('.nf-navbar-toggler');
    togglers.forEach((e) => {
        const {dataset, childNodes} = e
        let childs = Object.values(childNodes)
        childs = childs.filter((c) => c.classList.contains('nf-navbar-burger'));

        e.addEventListener('click', (e) => {
            // TODO - REFACTOR JQUERY -> VANILLA JS
            $(dataset.target).animate({
                height: "toggle"
            })

            window.addEventListener('resize', () => {
                q(dataset.target).removeAttribute('style')
                childs.forEach((element) => {
                    element.classList.remove('cross')
                })
            })
        })

        
        childs.forEach((element) => {
            element.addEventListener('click', (e) => {
                element.classList.toggle('cross');
            });
        });
    })
})

//on scroll change color

document.addEventListener('DOMContentLoaded', () => {

    const genericCallback = () => scrollListener(
        window,
        200,
        '#nf-navbar-box',
        'nf-active',
        [{dataset_name: 'nfNavbar', dataset_value: 'waves'}],
        true,
        (query, className) => query.classList.add(className),
        (query, className) => query.classList.remove(className)
    );

    window.addEventListener('load', genericCallback);
    window.addEventListener('scroll', genericCallback);
    window.addEventListener('resize', genericCallback);
})