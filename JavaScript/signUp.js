const scriptURL = 'https://script.google.com/macros/s/AKfycbxkgWotCMyvIKoT9aGtPCndZdHtHrq8i972t9CKAVjO6xC7T0I/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault ()
    fetch (scriptURL, { method: 'POST', body: new FormData (form)})
        .then (response => alert ("Account Created Successfully..."))
        .catch (error => console.error ('Error!', error.message))
})