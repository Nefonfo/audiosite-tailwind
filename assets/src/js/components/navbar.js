import {q, all} from '../global/variables';

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
/*
$(document).ready(function(){
    var stoptransparency = 63; // when to stop the transparent menu
    $(this).scrollTop(0);
	$(window).on('scroll load resize', function() {
		var position = $(this).scrollTop();
		if(position > stoptransparency) {
			$('#nf-navbar-box').addClass('nf-active');
		} else {
			$('#nf-navbar-box').removeClass('nf-active');
		}
        lastScrollTop = position;  
	});

});*/

document.addEventListener('DOMContentLoaded', () => {
    let stop_trans = 63;
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    const func = (c) => {
        let position = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const navs = all('#nf-navbar-box');
        navs.forEach((nav) => {
            let {dataset} = nav
            if(dataset.nfNavbar === "waves"){
                if(position > stop_trans) {
                    nav.classList.add('nf-active')
                } else {
                    nav.classList.remove('nf-active')
                }
            } else {
                nav.classList.add('nf-active')
            }
        });
    }
    window.addEventListener('load', func);
    window.addEventListener('scroll', func);
    window.addEventListener('resize', func);
})