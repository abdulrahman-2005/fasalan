function savePrice(tagId) {
    localStorage.setItem("CurrentTag", tagId)
}

let tag;
function getPrice() {
    let tag = tags[localStorage.getItem("CurrentTag")]
    return tag["price"] === "0" ? "مجاني" : tag["price"]
}
