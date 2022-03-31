const url =
  "https://raw.githubusercontent.com/LVNAY/capston1week5/main/ajou.json";

async function getData() {
  const response = await axios.get(url);
  return response.data;
}

async function makeItem() {
  //1. 데이터 가져오기
  const data = await getData();

  // 2. 이름 넣기

  const nameElement = document.querySelector("#name");
  const korean = data["이름"]["한글"];
  const english = data["이름"]["영문"];
  const chinese = data["이름"]["한문"];
  nameElement.innerHTML = korean + "<br>" + chinese + "<br>" + english;
}
