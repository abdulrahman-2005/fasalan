let vocab = {
	0: "02",
	1: "12",
	2: "002",
	3: "012",
	4: "102",
	5: "112",
	6: "0002",
	7: "0012",
	8: "0102",
	9: "1002",
	a: "0113",
	b: "1103",
	c: "1013",
	d: "1113",
	e: "00003",
	f: "00013",
	g: "00103",
	h: "01003",
	i: "10003",
	j: "00113",
	k: "01103",
	l: "11003",
	m: "10013",
	n: "01113",
	o: "11103",
	p: "11013",
	q: "10113",
	r: "11113",
	s: "000003",
	t: "000013",
	u: "000103",
	v: "001003",
	w: "010003",
	x: "100003",
	y: "000113",
	z: "001103",
	")": "011005",
	"(": "110005",
	":": "100015",
	" ": "$",
	",": "0000005",
	"\n": "\n",
	"'": "0000015",
	"#": "0000105",
	".": "0010005",
	_: "0100005",
	"+": "1000005",
	"-": "0000115",
	"/": "0001105",
	"*": "0011005",
	"%": "0110005",
	$: "1100005",
	"**": "1000015",
	"=": "0001115",
	"{": "0011105",
	"}": "0111005",
	"[": "1110005",
	"]": "1100015",
	";": "1000115",
	"!": "0011115",
	"@": "0111105",
	"&": "1111005",
	"|": "1110015",
	"?": "1100115",
	">": "1001115",
	"<": "00111155",
	"": "",
	"\\n": "\n",
	A: "0114",
	B: "1104",
	C: "1014",
	D: "1114",
	E: "00004",
	F: "00014",
	G: "00104",
	H: "01004",
	I: "10004",
	J: "00114",
	K: "01104",
	L: "11004",
	M: "10014",
	N: "01114",
	O: "11104",
	P: "11014",
	Q: "10114",
	R: "11114",
	S: "000004",
	T: "000014",
	U: "000104",
	V: "001004",
	W: "010004",
	X: "100004",
	Y: "000114",
	Z: "001104",
	ا: "01199",
	ب: "11099",
	ت: "10199",
	ث: "11199",
	ج: "000099",
	ح: "000199",
	خ: "001099",
	د: "010099",
	ذ: "100099",
	ر: "001199",
	ز: "011099",
	س: "110099",
	ش: "100199",
	ص: "011199",
	ض: "111099",
	ط: "110199",
	ظ: "101199",
	ع: "111199",
	غ: "0000099",
	ف: "0000199",
	ق: "0001099",
	ك: "0010099",
	ل: "0100099",
	م: "1000099",
	ن: "0001199",
	ه: "0011099",
	و: "0110099",
	ي: "1100099",
	ى: "1000199",
	ء: "00000099",
	ئ: "00000199",
	ؤ: "00001099",
};

function reEncrypt(encedCommand) {
	let data = ""
	for (character in encedCommand) {
		i = encedCommand[character]
		if (i === "0") {
			data += "*"
		} else if (i === "1") {
			data += "-"
		} else if (i !== "1" && i !== "0" && i != " ") {
			data += i
		} else {
			data += "="
		}
	}
	return data;
}
function encryptitinsomereallybadway(command) {
	let data = "";
	let i;
	for (character in command) {
		i = command[character];
		try {
			data += vocab[i];
			data += " ";
		} catch (error) {
			data += "```";
		}
	}
	return reEncrypt(data);
}