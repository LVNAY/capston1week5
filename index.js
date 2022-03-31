const url =
  "https://raw.githubusercontent.com/LVNAY/capston1week5/main/ajou.json";

async function getData() {
  const response = await axios.get(url);
  return response.data;
}

async function makeItem() {
  //1. 데이터 가져오기
  const data = await getData();
  console.log(data);
  // 2. 이름 넣기

  const nameElement = document.querySelector("#name");
  const korean = data["이름"]["한글"];
  const english = data["이름"]["영문"];
  const chinese = data["이름"]["한문"];
  nameElement.innerHTML = korean + "<br>" + chinese + "<br>" + english;

  // 3. 로고
  const logoElement = document.querySelector("img");
  const logo = data["로고"];
  logoElement.src = logo;

  const lessonElement = document.querySelector("#lesson");
  const lesson = data["교훈"];
  lessonElement.innerHTML = lesson;

  const symbolElement = document.querySelector("#symbol");
  const symbol = data["상징"];
  symbolElement.innerHTML = symbol;

  const sloganElement = document.querySelector("#slogan");
  const slogan = data["슬로건"];
  sloganElement.innerHTML = slogan;

  const nationElement = document.querySelector("#nation");
  const nation =
    '<img src="https://w.namu.la/s/43a07e65f573eb41fffe67ac0d1008fa73b5c7a04a004ff9004ddf0680524c5c5bd8a30c724fd7966bd7d3a2f60d0bd17c3cc159dd41f704f9b6dc188a21346d005feadc2c0a7491ff290cc690353158c3486a96eeabf9e6f0743732dbe94bc7">';
  nationElement.innerHTML = nation + data["국가"];

  const typeElement = document.querySelector("#type");
  const type =
    '<img src="https://w.namu.la/s/4d691bc7805d409beb3223c96233b387d31aff8234eae323c5b3eea423b2614d387f0fe529fbf2c94b588ea2a1c961a63f562d19bc5f55193e859f771816f392c79598cebf21c7267fdefe22b5caf1bd1c3838c7d0eca473a8ad5bebddb4f266">';
  typeElement.innerHTML = type + data["분류"];

  const openElement = document.querySelector("#open");
  openElement.innerHTML = data["개교"];

  const founderElement = document.querySelector("#founder");
  const korea =
    '<img src = "https://w.namu.la/s/66ddcaa4fd4bd8f08c4c6cdbaeb623369a65e4280ba3aac5395cbf8507d5fc64892f63b6426348a375123d8a74912b57a27e9e62bf05b7e00e3d6173dbe08ac445769c6a15439fddbf41c9b740bffa52d132f91347cb6875661093b45eebdec1">' +
    data["설립주체"][0];
  const france =
    '<img src = "https://w.namu.la/s/72b199b7a46164a8212cca27275b74666c1512f572192f752309984a1790b9fe1cc0ac20691105663f9839720a10a21b40ecd65d10f710371c4c18d518a6db58c1b7e9948211ddb1456a2e14ad7d7ee17270a9ab12126ca937d55baa26568ffc">' +
    data["설립주체"][1];
  founderElement.innerHTML = korea + france;

  const addressElement = document.querySelector("#address");
  addressElement.innerHTML = data["주소"];

  const studentsElement = document.querySelector("#students");
  const college = data["재학생"]["학부"];
  studentsElement.innerHTML = college + "명";

  const gradStudElement = document.querySelector("#grad-students");
  const gradStud = data["재학생"]["대학원"];
  gradStudElement.innerHTML = gradStud + "명";

  const staffElement = document.querySelector("#staff");
  staffElement.innerHTML = data["교직원"] + "명";

  const areaElement = document.querySelector("#area");
  const area = data["면적"]["값"];
  areaElement.innerHTML = area + "&#13217";
}

makeItem();
