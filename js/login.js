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
		let userLoad = userData(users[i])
		if (
			FMailInput.split("@")[0] === `${userLoad["usrnm"]}` &&
			userLoad["password"] === pswdInput
		) {
			localStorage.setItem("CurrentUser", [
				true,
				userLoad["id"],
				userLoad["level"],
				userLoad["name"],
				userLoad["usrnm"],
				userLoad["FMail"],
				userLoad["password"],
				userLoad["tagsCount"],
				userLoad["soldTags"],
				userLoad["boughtTags"],
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
