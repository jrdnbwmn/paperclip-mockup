// InscrybMDE
var inscrybmde = new InscrybMDE({
    spellChecker: false,
    autofocus: true,
    toolbar: false,
    status: false,
    initialValue: "We were fifteen by then, already into our last year at the school. We'd been in the pavilion getting ready for a game of **rounders**. The boys were going *through* a phase of enjoying rounders in order to flirt with us, so there were over thirty of us that afternoon. The ~downpour~ had started while we were ~~changing~~, and we found ourselves gathering on the veranda – which was sheltered by the [pavilion](jrdnbwmn.com) roof – while we waited for it to `stop`.",
});


  feather.replace()


// some stuff for toolbar and statusbar
// hideIcons: ["guide", "fullscreen", "side-by-side", "preview"],
//     showIcons: ["strikethrough", "code"],
//     status: ["autosave", {
//               className: "characters",
//               defaultValue: function(el) {
//                 el.innerHTML = "0";
//               },
//               onUpdate: function(el) {
//                 el.innerHTML = simplemde.value().length;
//               }
//             }, "words"]






// Caret
// https://codepen.io/MContagious/pen/RLMJXR
// function makeCustomCaretInput(inputBlock) {
//   var blockElement = document.getElementById(inputBlock)
//   var label = null;
//   var falseInput = null;
//   var hiddenInput = null;
  
//   for(var i=0; i<blockElement.children.length; i++) {
//     var elem = blockElement.children[i]
//     if (elem.tagName === "LABEL") label = elem
//     else if (elem.tagName === "SPAN") falseInput = elem
//     else if (elem.tagName === "INPUT") hiddenInput = elem
//   }
  
//   if (!label || !falseInput || !hiddenInput) {
//     throw new Error("Given element is not having all mandatory child elements.")
//   }
  
//   // show the same text as input
//   addListenerMulti(falseInput, "click", function() {
//     hiddenInput.focus()
//   })
//   addListenerMulti(hiddenInput, 'keyup mouseup mouseleave', function() {
//     var value = hiddenInput.value;
//     hiddenInput.focus()
//     var caretPos = getCaretPos(hiddenInput)
//     var vals = (value + " ").split("")
    
//     while (falseInput.firstChild) {
//         falseInput.removeChild(falseInput.firstChild);
//     }
//     for (var i=0; i<vals.length; i++) {
//         var el = document.createElement("span");
//         el.innerText = vals[i];
//         if (i === caretPos) {
//           el.className = 'caret-position'
//         }
//         falseInput.append(el)
//         el.addEventListener('click', (function(i) {
            
//            return function(event) {
//              event.stopPropagation();
//              var sides = event.target.getBoundingClientRect();
//              var x = (event.clientX - sides.left) + window.pageXOffset;
//              console.log(x + " " + (x<1.5 ? i : i+1))
//              setCaretPos(hiddenInput, (x<1.5 ? i : i+1));
//              hiddenInput.dispatchEvent(new Event('keyup'))
//            }
//         })(i))
//     }
    
//   });
// }

// function addListenerMulti(element, eventNames, listener) {
//   var events = eventNames.split(' ');
//   for (var i=0, iLen=events.length; i<iLen; i++) {
//     element.addEventListener(events[i], listener, false);
//   }
// }

// function getCaretPos(input) {  
//     var caret_pos = input.selectionStart;
//     return caret_pos;
// }
// function setCaretPos(elem, caretPos) {
  
//     if(elem != null) {
//         if(elem.createTextRange) {
//             var range = elem.createTextRange();
//             range.move('character', caretPos);
//             range.select();
//         }
//         else {
//             if(elem.selectionStart) {
//                 elem.focus();
//                 elem.setSelectionRange(caretPos, caretPos);
//             }
//             else
//                 elem.focus();
//         }
//     }
// }
// document.addEventListener("DOMContentLoaded", function(){
//   makeCustomCaretInput("input1-block")
// });
