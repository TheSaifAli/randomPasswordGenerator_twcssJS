const genBtnEl = document.querySelector("#genBtn");
const passInputEl = document.querySelector("#passInput");
const copyIconEL = document.querySelector(".copyIcon");
const copiedMsgEl = document.querySelector("#copiedMsg");

const passwordGenerate = () => {
  copyIconEL.style.color = "";
  const chars =
    "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?:{}[]";
  const passwordLength = 14;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }

  passInputEl.value = password;
  copiedMsgEl.textContent = "Password Generated";
  copiedMsgEl.classList.add("copyMsgShow");
  copiedMsgEl.classList.remove("copyMsgHide");
  setTimeout(() => {
    copiedMsgEl.classList.remove("copyMsgShow");
    copiedMsgEl.classList.add("copyMsgHide");
  }, 1000);
};
genBtnEl.addEventListener("click", () => {
  passwordGenerate();
});

copyIconEL.addEventListener("click", () => {
  if (passInputEl.value != "") {
    copiedMsgEl.textContent = "Password Copied";
    copyIconEL.style.color = "blue";
    passInputEl.select();
    passInputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(passInputEl.value);

    copiedMsgEl.classList.add("copyMsgShow");
    copiedMsgEl.classList.remove("copyMsgHide");
    setTimeout(() => {
      copiedMsgEl.classList.remove("copyMsgShow");
      copiedMsgEl.classList.add("copyMsgHide");
    }, 1000);
}
});

copyIconEL.addEventListener('dblclick',()=>{
    copiedMsgEl.textContent='Password Already Copied';
})