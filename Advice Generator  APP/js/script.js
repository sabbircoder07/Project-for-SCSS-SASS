async function generate() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    document.querySelector(".paragraph").textContent =
      "A D V I S E # " + data.slip.id;
    document.querySelector(".heading-primary").textContent =
      "“" + data.slip.advice + "”";
  } catch (err) {
    console.error(err);
  }
}

generate();

document.querySelector("button").onclick = () => {
  generate();
};
