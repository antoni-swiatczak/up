document.getElementById("check-btn").addEventListener("click", () => {
  let txt = document.getElementById("text-input").value.toLowerCase();
  if (txt.length == 0) {
    alert("Please input a value");
  } else {
    let tab = txt.split("");
    let filtered = new Array();
    let pattern = /^[a-z0-9]*$/;
    for (let i = 0; i < tab.length; i++) {
      if (pattern.test(tab[i])) {
        filtered.push(tab[i]);
      }
    }
    let palindrome = true;
    let tmp = filtered.length - 1;
    for (let i = 0; i < Math.ceil(filtered.length / 2); i++) {
      if (filtered[i] != filtered[tmp]) {
        palindrome = false;
      }
      tmp--;
    }
    if (palindrome) {
      document.getElementById("result").innerText = `${txt} is a palindrome`;
    } else {
      document.getElementById("result").innerText = `${txt} is not a palindrome`;
    }
  }
});