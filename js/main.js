var ProdukImg = document.getElementById('ProdukImg');
var SmallImg = document.getElementsByClassName('small-img');

SmallImg[0].onclick = function () {
  ProdukImg.src = SmallImg[0].src;
};
SmallImg[1].onclick = function () {
  ProdukImg.src = SmallImg[1].src;
};
SmallImg[2].onclick = function () {
  ProdukImg.src = SmallImg[2].src;
};
SmallImg[3].onclick = function () {
  ProdukImg.src = SmallImg[3].src;
};
