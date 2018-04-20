// InscrybMDE
// -------------------------------------------------------------------
var inscrybmde = new InscrybMDE({
    spellChecker: false,
    autofocus: true,
    toolbar: false,
    status: false,
    initialValue: "We were fifteen by then, already into our last year at the school. We'd been in the pavilion getting ready for a game of **rounders**. The boys were going *through* a phase of enjoying rounders in order to flirt with us, so there were over thirty of us that afternoon. The ~downpour~ had started while we were ~~changing~~, and we found ourselves gathering on the veranda – which was sheltered by the [pavilion](jrdnbwmn.com) roof – while we waited for it to `stop`.",
    element: document.getElementById("inscrybmde"),
});

// Feather
// -------------------------------------------------------------------
feather.replace()

// Popups
// -------------------------------------------------------------------
// Clicking a toggle opens its sibling dropdown
$('.js-popup-toggle').click( function(event){
    event.stopPropagation();
    if ($('.js-popup').is(":visible")) {
        $('.js-popup').hide();
    } else {
        $(this).siblings('.js-popup').show();
    }
});

// Clicking anywhere closes all popups
$(document).click(function(event) {
    if(!$(event.target).closest('.js-popup').length) {
        if($('.js-popup').is(":visible")) {
            $('.js-popup').hide()
        }
    }
});

// Slidedown
// -------------------------------------------------------------------
$( ".js-slidedown-toggle" ).click(function() {
    $( ".js-slidedown" ).slideToggle( 300, function() {
    });
});

// Modal
// -------------------------------------------------------------------
$( ".js-modal-toggle" ).click(function() {
    $( ".js-modal" ).show();
});
$( ".js-modal-close" ).click(function() {
    $( ".js-modal" ).hide();
});
