// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.


function memo() {
 const submit = document.getElementById("submit");
 submit.addEventListener("click", (e) => {
  const formData = new FormData(document.getElementById("form"));
  const XHR = new XMLHttpRequest();
  XHR.open("POST", "/posts", true);
  XHR.responseType = "json";
  XHR.send(formData);
  XHR.onload = () => {
    if (XHR.status != 200) {
      alert(`Error ${XHR.status}: ${XHR.statusText}`);
      return null;
    }
    const item = XHR.response.post;
    const list = document.getElementById("list");
    const formText = document.getElementById("content");
    const HTML = `
      <div class="post" data-id=${item.id}>
        <div class="post-date">
          投稿日時：${item.created_at}
        </div>
        <div class="post-content">
        ${item.content}
        </div>
      </div>`;
    list.insertAdjacentHTML("afterend", HTML);
    formText.value = "";
  };
  e.preventDefault();
 });
}
window.addEventListener("load", memo);

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
