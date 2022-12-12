let btnSend = document.getElementById('sendBtn');

btnSend.addEventListener('click', function (e) {
  e.preventDefault();
  let inputMail = document.getElementById('exampleInputEmail1');
  //   let inputPass = document.getElementById('exampleInputPassword1');
  let alert = document.getElementById('alert');
  alert.style.display = 'none';
  console.log(inputMail.value.trim().replaceAll('  ', ''));
  if (inputMail.value.trim().replaceAll('  ', '').length < 20) {
    alert.innerHTML = 'DEBEN SER MAS DE 20 CARACTERES';
    alert.style.display = 'block';
    inputMail.focus();
    inputMail.select();
  }
});