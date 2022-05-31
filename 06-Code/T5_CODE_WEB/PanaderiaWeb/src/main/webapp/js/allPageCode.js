function uploadContent(url, elemento) {
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(null);
    elemento.innerHTML = request.responseText;
}

uploadContent("jsps/header.jsp", document.querySelector('#header'));
uploadContent("jsps/footer.jsp", document.querySelector('#footer'));
$(".shoppingCart").hide();

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}


