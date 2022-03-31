const url = "";

async function getData() {
  const response = await axios.get(url);
  console.log(response);
}

getData();
