const div1 = document.createElement("div");
div1.innerHTML = "1";
const div2 = document.createElement("div");
div2.innerHTML = "2";
const div3 = document.createElement("div");
div3.innerHTML = "3";
const div4 = document.createElement("div");
div4.innerHTML = "4";
const hashTable = {
    1: div1,
    2: div2,
    3: div3,
    4: div4,
};

function route() {
    let number = window.location.hash.substr(1);
    let app = document.querySelector("#app");
    // 默认路由
    number = number || 1;

    // 获取界面
    let div = hashTable[number.toString()];
    if (!div) {
        div = document.querySelector("#div404");
    }
    div.style.display = "block";

    // 展示页面
    app.innerHTML = "";
    app.appendChild(div);
}

route();

window.addEventListener("hashchange", () => {
    route();
});
