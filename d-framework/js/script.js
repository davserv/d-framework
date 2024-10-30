fetch("https://dav7.pages.dev/api/serve.json")
  .then((response) => response.json())
  .then((data) => {
    const sites = data.sites;
    const mySelects = document.getElementById("mySelects");

    sites.forEach((sites) => {
      const preElement = document.createElement("option");
      preElement.value = `${sites.properties.links}`;
      preElement.textContent = `${sites.properties.title}`;
      mySelects.appendChild(preElement);
    });
  })
  .catch((error) => {
    console.log("ERROR", error);
  });

const select = document.getElementById("mySelects");
select.addEventListener("change", function () {
  const url = this.value;
  if (url) {
    window.location = url;
    //window.open(''+url+'');
  }
});

/*shared*/
function sharesbutton() {
  navigator.share({
    title: document.title,
    text: "Compartilhar" + document.title,
    url: window.location.href
  });
}