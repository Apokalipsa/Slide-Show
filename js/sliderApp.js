var currentIndex = 0,
  items = $('.links'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.links').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);


