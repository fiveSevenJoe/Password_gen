let input = document.querySelector("input").value;

function addPass() {
  let length = 18;
  let password = '0123456789abcdefghijklmnopqrstuvqxyz{}[]":?>.<&*^%$#@!';
  newPass = "";
  for (let i = 0, n = password.length; i < length; ++i) {
    newPass += password.charAt(Math.floor(Math.random() * n));
  }

  const input = (document.querySelector("input").value = newPass);
}
