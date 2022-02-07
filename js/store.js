let price;

function view(element) {
    element.classList.toggle('open')
    price = tags[element.classList[0].toString()]["price"]
    if (price === "0") {
        price = "مجاني"
    }
    
    if (element.innerText.includes("?") || element.innerHTML.includes("?")) {
		element.innerText = "";
		element.innerHTML = `<p class="price"><span>السعر : </span>${price}</p>
        <button onclick="download('../pages/services/buy.html', '${element.classList[0]}')">تحميل</button>`;
	} else {
        element.innerHTML = ""
		element.innerText = "?";
	}
}

function download(url, id) {
    savePrice(id)
    goTo(url)
}