/*
https://www.blackbox.ai/share/6a22a281-3a6e-44b9-adf9-50322747f5d1

https://www.w3schools.com/jsref/dom_obj_all.asp


*/

fetch(
  "https://cdn.jsdelivr.net/gh/davserv/d-framework@cdn/api/bootstrap.icons.json"
)
  .then((response) => response.json())
  .then((data) => {
    const icons = data;
    const icobootstrap = document.getElementById("bootstrap-icons");

    icons.forEach((icon) => {
      const listItem = document.createElement("div");
      listItem.innerHTML = `<li class="col mb-4" data-name="${icon.title}" data-tags="${icon.tags}" data-categories="${icon.categories}"> <a role="button" onclick="javascript:alert(title);" class="d-block text-body-emphasis text-decoration-none" title='&lt;i class="${icon.ligatura}"&gt;&lt;/i&gt;'> <div class="px-3 py-4 mb-2 bg-body-secondary text-center rounded"> <i class="${icon.ligatura}"></i>  </div> <div class="name text-muted text-decoration-none text-center pt-1">${icon.title}</div> </a> </li>`;

      icobootstrap.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.log("ERROR", error);
  });

/*

fetch(
  "https://cdn.jsdelivr.net/gh/davserv/d-framework@cdn/api/bootstrap.icons.json"
)
  .then((response) => response.json())
  .then((data) => {
    const icons = data;
    const icoMoon = document.getElementById("bootstrap-icons");

    icons.forEach((icon) => {
      const listItem = document.createElement("li");
      listItem.className = `col mb-4`;
      listItem.tagsName = `${icon.title}`;
      

      const linkElement = document.createElement("a");
      linkElement.role = `button`;
      linkElement.title = `${icon.ligatura}`;
      linkElement.id = `inco-${icon.id}`;
      linkElement.className = `d-block text-body-emphasis text-decoration-none`;

      const divItem = document.createElement("div");
      divItem.className = `px-3 py-4 mb-2 bg-body-secondary text-center rounded`;

      const iconItem = document.createElement("i");
      iconItem.className = `${icon.ligatura}`;

      const divnomesItem = document.createElement("div");
      divnomesItem.className = `name text-muted text-decoration-none text-center pt-1`;
      divnomesItem.textContent = `${icon.title}`;

      listItem.appendChild(linkElement);

      linkElement.appendChild(divItem);

      divItem.appendChild(iconItem);

      linkElement.appendChild(divnomesItem);

      icoMoon.appendChild(listItem);
      

      var openButton = document.getElementById(`inco-${icon.id}`);
      openButton.addEventListener("click", function () {
        alert(`<i class="${icon.ligatura}"></i>`);
      });
      
    });
  })
  .catch((error) => {
    console.log("ERROR", error);
  });

*/