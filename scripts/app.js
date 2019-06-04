const topNavbarHeight = $('.top-navbar').outerHeight(true);
const sidebarHeight = $('.sidebar').height();
const bottom = $('#main-content-wrapper').offset().top + $('#main-content-wrapper').height();

$().ready(() => {
    console.log(bottom, window.pageXOffset);
    if (sidebarHeight < bottom) {
        if (window.pageYOffset > bottom - sidebarHeight) {
            $('.sidebar').css({ position: 'absolute', bottom: 0, top: 'auto' });
        } else if (window.pageYOffset > topNavbarHeight) {
            $('.sidebar').css({ position: 'fixed', bottom: 'auto', top: '.75rem' });
        } else {
            $('.sidebar').css({ position: '', bottom: '', top: '' });
        }
    }
});

window.onscroll = () => {
    if (sidebarHeight < bottom) {
        if (window.pageYOffset > bottom - sidebarHeight) {
            $('.sidebar').css({ position: 'absolute', bottom: 0, top: 'auto' });
        } else if (window.pageYOffset > topNavbarHeight) {
            $('.sidebar').css({ position: 'fixed', bottom: 'auto', top: '.75rem' });
        } else {
            $('.sidebar').css({ position: '', bottom: '', top: '' });
        }
    }
}