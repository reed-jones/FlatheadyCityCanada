var homeLink = document.querySelector('a.home');
var serviceLink = document.querySelector('a.service');
var contactLink = document.querySelector('a.contact');

var card = document.querySelector("div.card");

//The three cards. "Home, Services, Contact"
var cardOne = '\
<div class="card-block">\
    <h3 class="card-title">Flathead City Canada</h3>\
    <h5 class="card-title">~ Rebuilding Legends ~</h5>\
    <p class="card-text">Specialty Performance<br />\
        Automotive & Motorcycle<br />\
        Aftermarket Parts Manufacturer<br />\
    </p>\
</div>';

var cardTwo = '\
<div class="card-block">\
    <h3 class="card-title">Services</h3>\
    <h5>Repair Welding</h5>\
    <p>Aluminum ~ Stainless Steel ~ Cast Iron</p>\
    <p>***********************</p>\
    <p>Certified<br />\
        All Processes<br />\
        35 Years Experience<br />\
        Metal Polishing\
    </p>\
    <p>***********************</p>\
    <h5>Rates</h5>\
    <p>Shop Rate: $75/Hour<br>\
    Cash and Major Credit Cards Only\
    </p>\
</div>';

var cardThree = '\
<div class="card-block">\
    <h3 class="card-title">\
        Dave Ryckman\
    </h3>\
    <p><a href="https://goo.gl/maps/GqHhntP9HkP2">\
        11730 Highway 16<br />\
        Dunster B.C.<br /></a>\
    </p>\
    <p class="email">\
        <a href="mailto:flatheadcitycanada@gmail.com">\
            flatheadcitycanada@gmail.com\
        </a>\
    </p><br />\
    <p>\
        Phone: 250 968 4340<br />\
        Cell: 250 569 4105\
    </p>\
</div>';

//Show and hide cards (change text of cards)
function cardOneHandler() {
    homeLink.classList.add("active");
    serviceLink.classList.remove("active");
    contactLink.classList.remove("active");
    card.innerHTML = cardOne
}

function cardTwoHandler() {
    homeLink.classList.remove("active");
    serviceLink.classList.add("active");
    contactLink.classList.remove("active");
    card.innerHTML = cardTwo
}

function cardThreeHandler() {
    homeLink.classList.remove("active");
    serviceLink.classList.remove("active");
    contactLink.classList.add("active");
    card.innerHTML = cardThree
}

homeLink.addEventListener('click', cardOneHandler);

serviceLink.addEventListener('click', cardTwoHandler);

contactLink.addEventListener('click', cardThreeHandler);
