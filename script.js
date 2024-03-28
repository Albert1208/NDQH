// const next = document.querySelector('.next')
// const prev = document.querySelector('.prev')
// const comment = document.querySelector('#list-comment')
// const commentItem = document.querySelectorAll('#list-comment .item')
// var translateY = 0
// var count = commentItem.length

// next.addEventListener('click', function (event) {
//   event.preventDefault()
//   if (count == 1) {
//     // Xem hết bình luận
//     return false
//   }
//   translateY += -400
//   comment.style.transform = `translateY(${translateY}px)`
//   count--
// })

// prev.addEventListener('click', function (event) {
//   event.preventDefault()
//   if (count == 3) {
//     // Xem hết bình luận
//     return false
//   }
//   translateY += 400
//   comment.style.transform = `translateY(${translateY}px)`
//   count++
// })

document.addEventListener("DOMContentLoaded", function() {
  var initialItemCount = 6;
  var itemsToAdd = 6;
  var productList = document.getElementById("list-products");
  var viewMoreLink = document.getElementById("view-more-link");

  hideExcessItems();

  viewMoreLink.addEventListener("click", function(event) {
      event.preventDefault();
      showMoreItems();
  });

  function hideExcessItems() {
      var items = productList.querySelectorAll(".item");
      for (var i = initialItemCount; i < items.length; i++) {
          items[i].style.display = "none";
      }
      // Ẩn nút "Xem thêm" nếu không còn sản phẩm để hiển thị
      if (items.length <= initialItemCount) {
          viewMoreLink.style.display = "none";
      }
  }

  function showMoreItems() {
      var items = productList.querySelectorAll(".item");
      var lastIndexToShow = initialItemCount + itemsToAdd;
      for (var i = initialItemCount; i < lastIndexToShow && i < items.length; i++) {
          items[i].style.display = "block";
      }
      if (lastIndexToShow >= items.length) {
          viewMoreLink.style.display = "none";
      }
      initialItemCount += itemsToAdd;
  }
});



