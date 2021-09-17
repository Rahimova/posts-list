document.getElementById("create-post").addEventListener("click", () => {
  document.getElementById("service-modal").style.visibility = "initial";
  document.getElementById("input-title").focus();
});

const modal = document.getElementById("list");
const inputTitle = document.getElementById("input-title");
const inputSubtitle = document.getElementById("input-subtitle");
let index = 1;

document.getElementById("create-post-item").addEventListener("click", () => {
  const title = document.getElementById("input-title").value;
  const subtitle = document.getElementById("input-subtitle").value;
  document.getElementById("service-modal").style.visibility = "hidden";

  if (title === "" || subtitle === "") {
    return;
  }
  createPostItem();

  document.getElementById("input-title").value = "";
  document.getElementById("input-subtitle").value = "";
});

function deletePostItem(id) {
  document.getElementById(id).remove();
  checkList();
}

function createPostItem() {
  const item = document.createElement("li");
  item.setAttribute("class", "item__post");
  item.setAttribute("id", index);
  modal.append(item);

  const div = document.createElement("div");
  div.setAttribute("class", "header__post");
  item.append(div);

  const deleteEl = document.createElement("div");
  deleteEl.setAttribute("class", "delete");
  deleteEl.setAttribute("id", "delete");
  item.appendChild(deleteEl);

  const button = document.createElement("button");
  button.setAttribute("class", "delete__post");
  button.setAttribute("id", index);
  button.setAttribute("onclick", "deletePostItem(this.id)");
  button.innerHTML = "Удалить";
  deleteEl.append(button);

  const title = document.createElement("p");
  title.setAttribute("class", "title__post");
  title.innerHTML = "Название: " + inputTitle.value;

  const description = document.createElement("p");
  description.setAttribute("class", "description__post");
  description.innerHTML = "Описание: " + inputSubtitle.value;
  div.append(title);
  div.append(description);

  index++;
  checkList();
}

function checkList() {
  const message = document.querySelector(".message");
  const titlePost = document.querySelector(".title__posts");
  if (document.getElementById("list").getElementsByTagName("li").length === 0) {
    message.innerHTML = "Список постов пуст!";
    titlePost.innerHTML = "";
  } else {
    message.innerHTML = "";
    titlePost.innerHTML = "Список постов";
  }
}

function myFunction() {
  var input, filter, ul, li, p, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("list");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    p = li[i].getElementsByTagName("p")[0];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
