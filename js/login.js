let empty = ["false", "--", "--", "--", "--", "--", "--", "--", "--", "--"];

let navContainer;
let tagger;

function isLogged() {
	// after signing up
	if (localStorage.length === 0) {
		localStorage.setItem("CurrentUser", empty);
		return false;
	} else {
		if (localStorage.getItem("CurrentUser").split(",")[0] === "true") {
			return true;
		}
	}
}

isLogged();

let broke = false;
function login(FMailInput, pswdInput) {
	isLogged();
	for (i in users) {
		if (broke) {
			break;
		}
		if (
			FMailInput.split("@")[0] === `${users[i]["usrnm"]}` &&
			users[i]["password"] === pswdInput
		) {
			localStorage.setItem("CurrentUser", [
				true,
				users[i]["id"],
				users[i]["level"],
				users[i]["name"],
				users[i]["usrnm"],
				users[i]["FMail"],
				users[i]["password"],
				users[i]["tagsCount"],
				users[i]["soldTags"],
				users[i]["boughtTags"],
			]);
			return true;
		} else {
			localStorage.setItem("CurrentUser", empty);
		}
	}
	if (localStorage.getItem("CurrentUser") === empty) {
		localStorage.setItem("CurrentUser", empty);
		return false;
	}
}

function logout() {
	localStorage.setItem("CurrentUser", empty);
	alert("تم تسجيل خروجك بنجاح");
}
function check() {
	navContainer = document.getElementById("navContainer");
	if (isLogged()) {
		return true;
	} else {
		navContainer.innerHTML = createLink("../pages/login.html");
		tagger = document.getElementById("navClickableButton");
		tagger.click();
		return false;
	}
}

function goTo(url) {
	navContainer = document.getElementById("navContainer");
	if (check()) {
		navContainer.innerHTML = createLink(url);
		tagger = document.getElementById("navClickableButton");
		tagger.click();
	}
}

function GOTO(url) {
	navContainer = document.getElementById("navContainer");

	navContainer.innerHTML = createLink(url);
	tagger = document.getElementById("navClickableButton");
	tagger.click();
}

function createLink(url) {
	return `<a id="navClickableButton" href="${url}"></a>`;
}
