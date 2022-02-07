from random import randint, choice
from string import ascii_letters

data = {
    "ا": "a",
    "ب": "b",
    "ت": "t",
    "ث": "th",
    "ج": "j",
    "ح": "h",
    "خ": "kh",
    "د": "d",
    "ذ": "th",
    "ر": "r",
    "ز": "z",
    "س": "s",
    "ش": "sh",
    "ص": "s",
    "ض": "d",
    "ط": "t",
    "ظ": "th",
    "ع": "a",
    "غ": "gh",
    "ف": "f",
    "ق": "q",
    "ك": "k",
    "ل": "l",
    "م": "m",
    "ن": "n",
    "ه": "h",
    "و": "o",
    "ي": "y",
    "ء": "a",
    "ة": "a",
}

users = {}

def create_username(name, id):
    arname = name
    name = "".join(name.split())
    new_name = ""
    for i in range(len(name)):
        new_name += data[name[i]]
    name = new_name
    if len(name) > 10:
        while len(name) > 10:
            name = name.replace(name[randint(0, len(name)-1)], "")
    elif len(name) < 10:
        while len(name) < 10:
            name += ascii_letters[randint(0, 25)]
    users[f"U-{''.join(str(id).split())}"] = {
        "id": id,
		"level": choice(levels),
		"name": arname,
		"usrnm": name,
        "password": f"{name}{''.join([str(randint(1, 9)) for i in range(5)])}",
		"tagsCount": "__",
		"soldTags": "__",
		"boughtTags": "__",
    }


levels = [
    "دحيح",
    "****",
    "صايع",
    "هه",
    "نرم",
]
names = [
    "عبدالرحمن عزمي",
    "علاء الدين حاتم",
    "سلامة محمود سلامه",
    "عبدالله محمود سلامة",
    "يوسف خالد",
    "يحيي خالد",
    "محمود محمد ابو الدهب",
    "احمد شعبان",
    "كريم سامي",
    "لطفي اشرف لطفي",
]


counter = 0
for i in names:
    create_username(i, counter)
    counter += 1
print(users)