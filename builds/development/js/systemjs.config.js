System.config({
  packages: {
    js:  {
    format: "register",
    dafaultExtension: "js"
    }
  }
});
System.import('js/boot')
.then(null, console.error.bind(console));
