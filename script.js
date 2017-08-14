function showSeal() {
    document.getElementById("sealimage");
    var images = document.querySelectorAll("#sealimage img");
    for(var i = 0; i < images.length; i++)
    {
      images[i].src = images[i].getAttribute('data-src');
    }
}