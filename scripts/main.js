let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test-meme.png') {
      myImage.setAttribute ('src','images/ben.jpg');
    } else {
      myImage.setAttribute ('src','images/ben.jpg');
    }
}