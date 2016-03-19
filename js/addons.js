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
    <p>\
        Aluminum ~ Stainless Steel ~ Cast Iron\
    </p>\
    <p>***********************</p>\
    <p>\
        Certified<br />\
        All Processes<br />\
        35 Years Experience<br />\
    </p>\
    <p>***********************</p>\
        Metal Polishing\
    </p>\
    <p>***********************</p>\
    <h5>Pickup and Delivery</h5>\
    <p>\
        From Prince George to Valemount<br />\
        24 Hour Turn Around<br />\
        with <a href="http://www.cityfastexpress.com/">CityFast Express</a>\
    </p>\
    <p>***********************</p>\
    <h5>Rates</h5>\
    <p>\
        Shop Rate: $75/Hour<br>\
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
        Dunster B.C. V0J-1J0<br /></a>\
    </p>\
    <p class="email">\
        <a href="mailto:flatheadcitycanada@gmail.com">\
            flatheadcitycanada@gmail.com\
        </a>\
    </p>\
    <p>\
        Phone: (250) 968-4340<br />\
        Cell: (250) 569-4105\
    </p>\
    <p>***********************</p>\
    <h3>CityFast Express</h3>\
    <p>\
        Call to Schedule Pickup and Delivery<br />\
        Phone: (250) 596-9272<br />\
        <a href="http://www.cityfastexpress.com/">\
            www.cityfastexpress.com\
        </a>\
    </p>\
</div>';

/*$(function(){
  
  // Bind an event to window.onhashchange that, when the hash changes, gets the
  // hash and adds the class "selected" to any matching nav link.
  $(window).hashchange( function(){
    var hash = location.hash;
    
    // Set the page title based on the hash.
    document.title = "Flathead City - Aftermarket Parts and Repairs - Home";
    
    // Iterate over all nav links, setting the "selected" class as-appropriate.
    $('nav a').each(function(){
      var that = $(this);
      that[ that.attr( 'href' ) === hash ? 'addClass' : 'removeClass' ]( 'active' );
    });
  })
  
  // Since the event is only triggered when the hash changes, we need to trigger
  // the event now, to handle the hash the page may have loaded with.
  $(window).hashchange();
  
});*/

//Show and hide cards (change text of cards)
function cardOneHandler() {
    //http://benalman.com/code/projects/jquery-hashchange/examples/hashchange/
    //location.hash = "home"; // back button not yet ready for primetime
    document.title = "Flathead City - Aftermarket Parts and Repairs - Home"; // yadda yadda
    homeLink.classList.add("active");
    serviceLink.classList.remove("active");
    contactLink.classList.remove("active");
    card.innerHTML = cardOne;
}

function cardTwoHandler() {
    //location.hash = "services"; // back button not yet ready for primetime
    document.title = "Flathead City - Aftermarket Parts and Repairs - Services"; // yadda yadda
    homeLink.classList.remove("active");
    serviceLink.classList.add("active");
    contactLink.classList.remove("active");
    card.innerHTML = cardTwo;
}

function cardThreeHandler() {
    //location.hash = "contact"; // back button not yet ready for primetime
    document.title = "Flathead City - Aftermarket Parts and Repairs - Contact"; // yadda yadda
    homeLink.classList.remove("active");
    serviceLink.classList.remove("active");
    contactLink.classList.add("active");
    card.innerHTML = cardThree;
}

homeLink.addEventListener('click', cardOneHandler);

serviceLink.addEventListener('click', cardTwoHandler);

contactLink.addEventListener('click', cardThreeHandler);
