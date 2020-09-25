if ('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker
        .register('../sw_cached_site.js')
        .then(reg => console.log('Service Worker Registered'))
        .catch(err => console.log(`Service Worker: Error: ${err}`))
    })
}

// function formProcessor() {
//     var fullName = document.getElementById("fullName")
//     alert(fullName)
// }

var app = document.getElementById('typewriter');

    var typewriter = new Typewriter(app, {
      loop: true
    });

    typewriter.typeString("Hello there!<br>I am Hasan")
      .pauseFor(2500)
      .deleteAll()
      .typeString('New to Python')
      .pauseFor(2500)
      .deleteChars(6)
      .typeString('HTML')
      .pauseFor(2500)
      .deleteChars(4)
      .typeString('Javascript')
      .pauseFor(2500)
      .deleteChars(10)
      .typeString('CSS')
      .pauseFor(2500)
      .start();
