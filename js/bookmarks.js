const input = document.getElementById("bookmarkInput");
const addBtn = document.getElementById("addBookmarkBtn");
const list = document.getElementById("bookmarkList");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

renderBookmarks();

addBtn.addEventListener("click", () => {
    const url = input.value.trim();
    if (!url) return;

    bookmarks.push(url);
    input.value = "";
    saveAndRender();
});

function saveAndRender() {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    renderBookmarks();
}

function renderBookmarks() {
    list.innerHTML = "";
    bookmarks.forEach((url, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <a href="${url}" target="_blank">${url}</a>
            <div>
                <button class="edit">Редагувати</button>
                <button class="delete">X</button>
            </div>
        `;

        li.querySelector(".delete").addEventListener("click", () => {
            bookmarks.splice(index, 1);
            saveAndRender();
        });

        li.querySelector(".edit").addEventListener("click", () => {
            const newUrl = prompt("Нове посилання:", url);
            if (newUrl) {
                bookmarks[index] = newUrl.trim();
                saveAndRender();
            }
        });

        list.appendChild(li);
    });
}
