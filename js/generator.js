let level;
let userName;
let tagsCount;
let soldTags;
let boughtTags;
let color;
const levels = {
	1: "دحيح",
	2: "****",
	3: "صايع",
	4: "هه",
	5: "نرم",
};
function renderUsers(locationId, userList, imgPath) {
	let container = document.getElementById(locationId);

	for (i in userList) {
		level = userList[i]["level"];
		if (level === levels["1"]) {
			color = "red";
		} else if (level === levels["2"]) {
			color = "purple";
		} else if (level === levels["3"]) {
			color = "orange";
		} else if (level === levels["4"]) {
			color = "yellow";
		} else if (level === levels["5"]) {
			color = "green";
		} else {
			color = "white";
		}
		userName = userList[i]["name"];
		tagsCount = userList[i]["tagsCount"];
		soldTags = userList[i]["soldTags"];
		boughtTags = userList[i]["boughtTags"];

		let userBox = `
<div class="user" style="box-shadow: 0px 0px 4px 4px ${color}">
    <div class="description">
        <p class="level ${color}">${level}</p>
        ${userName}
    </div>
    <img src="${imgPath}" class="profile-picture" style="box-shadow: 0 0 2px 2px ${color}">
    <div class="status" style="box-shadow: 0 0 5px 1px ${color}">
        <div class="status-box">
            <p class="status-in">تغفيلات</p>
            <p class="status-in en-font">${tagsCount}</p>
        </div>
        <div class="status-box">
            <p class="status-in">بيع</p>
            <p class="status-in en-font">${soldTags}</p>
        </div>
        <div class="status-box">
            <p class="status-in">شراء</p>
            <p class="status-in en-font">${boughtTags}</p>
        </div>
    </div>
</div>`;

		container.innerHTML += userBox;
	}
}

function sortUsers(locationId, userList, condition, value, imgPath) {
	let container = document.getElementById(locationId);
	container.innerHTML = "";
	for (i in userList) {
		if (userList[i][condition].includes(value)) {
			renderUsers(locationId, [userList[i]], imgPath);
		}
	}
	if (container.innerHTML === "") {
		renderUsers(locationId, userList, imgPath);
	}
}

function renderTags(locationId, tagList) {
	let tagsContainer = document.getElementById(locationId);
	let tagImageURL;
	let uploaderName;
	let taggedName;
	let descreption;
	let id;
	let tag;
	for (i in tagList) {
		let dataBlock = tagList[i];
		tagImageURL = dataBlock["tagImageURL"];
		uploaderName = dataBlock["uploader"];
		taggedName = dataBlock["tagged"];
		descreption = dataBlock["descreption"];
		id = dataBlock["id"];
		tag = `<div class="tagtag">
		<div class="${id} settings" id="settings" onclick="view(this)">?</div>
		<div class="image">
		<img class="tag-image" src="${tagImageURL}" />
		<div class="blur"></div>
		</div>
		<div class="descreption">
		<p class="info">
		<span class="title">المصدر </span id="uploader"><span>${uploaderName}</span>
		</p>
		<p class="info">
		<span class="title">المغفل </span><span id="tagged">${taggedName}</span>
		</p>
		<textarea name="descreption" id="descreption" disabled>${descreption}</textarea>
		</div>
		</div>`;
		tagsContainer.innerHTML += tag;
	}
}

function randint(number) {
	return Math.floor(Math.random() * number);
}

let ascii_letters = "abcdefghijklmnopqrstuvwxyz";

let data = {
	ا: "a",
	ب: "b",
	ت: "t",
	ث: "th",
	ج: "j",
	ح: "h",
	خ: "kh",
	د: "d",
	ذ: "th",
	ر: "r",
	ز: "z",
	س: "s",
	ش: "sh",
	ص: "s",
	ض: "d",
	ط: "t",
	ظ: "th",
	ع: "a",
	غ: "gh",
	ف: "f",
	ق: "q",
	ك: "k",
	ل: "l",
	م: "m",
	ن: "n",
	ه: "h",
	و: "o",
	ي: "y",
	ء: "a",
	ة: "a",
	" ": "",
	ى: "y",
	ؤ: "ao",
};

function createUsername(name) {
	const arname = name;
	name = name.split().join("");
	let new_name = "";
	for (i in name) {
		new_name += data[name[i]];
	}
	name = new_name;
	if (name.length > 10) {
		while (name.length > 10) {
			name = name.replace(name[randint(name.length - 1)], "");
		}
	} else if (name.length < 10) {
		while (name.length < 10) {
			name += ascii_letters[randint(25)];
		}
	}
	return name;
}
// names = [
// 	"عبدالرحمن عزمي",
// 	"علاء الدين حاتم",
// 	"سلامة محمود سلامه",
// 	"عبدالله محمود سلامة",
// 	"يوسف خالد",
// 	"يحيي خالد",
// 	"محمود محمد ابو الدهب",
// 	"احمد شعبان",
// 	"كريم سامي",
// 	"لطفي اشرف لطفي",
// ];

// counter = 0
// for i in names:
//     create_username(i, counter)
//     counter += 1
// print(users)
