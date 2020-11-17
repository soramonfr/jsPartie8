let p_elts = document.getElementsByTagName("p");
let last_known_scroll_position = 0;
let ticking = false;
let p_elts_index = 0;

function showParagraph(scroll_pos) {
    for (p_elt of p_elts) {
        if (p_elt.offsetTop - window.innerHeight / 2  < scroll_pos) {
            p_elt.style.opacity = "1";
            p_elt.style.transition = "all 1.5s ease";                
        } else if (p_elt.offsetTop - window.innerHeight / 2 > scroll_pos) {
            p_elt.style.opacity = "0";
            p_elt.style.transition = "all 1.5s ease";     
        }
    }

    // incrément de l'index trop rapide, ne fonctionne pas
    // if (scroll_pos <= window.scrollY) { // Si on descend dans la page
    //     p_elts[p_elts_index].style.opacity = "1";
    //     p_elts[p_elts_index].style.transition = "all 2s ease";
    //     if (p_elts_index < p_elts.length) p_elts_index++;
    //     console.log(p_elts_index);
    // } else { // Si on monte
    //     p_elts[p_elts_index].style.opacity = "0";
    //     p_elts[p_elts_index].style.transition = "all 2s ease";
    //     if (p_elts_index > 0) p_elts_index--;
    // }
}

window.addEventListener('scroll', function (e) { 
    last_known_scroll_position = window.scrollY;
    
    if (!ticking) {
        window.requestAnimationFrame(function () {
            showParagraph(last_known_scroll_position);
            ticking = false;
        });

        ticking = true;
    }
});

