function handleScroll(e) 
{
    const scrollTop = document.getElementsByTagName('body')[0].scrollTop;
    if(scrollTop >125) {
        document.getElementsByTagName('header')[0].classList.add('headerAnimation');
        document.getElementsByClassName('logo')[0].classList.add('logo-on-scroll');
    } else {
        document.getElementsByTagName('header')[0].classList.remove('headerAnimation');
        document.getElementsByClassName('logo')[0].classList.remove('logo-on-scroll');
    }
}

function handleShowMore(i) 
{
    const content = document.getElementsByClassName('about-card-content')[i];
    if(content.className.includes('about-card-content-show')) 
    {
        content.classList.remove('about-card-content-show');
    } else {
        content.classList.add('about-card-content-show');
    }
    
}