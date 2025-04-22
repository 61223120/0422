function checkPassphrase() {
  const passphrase = document.getElementById('passphrase').value;
  const error = document.getElementById('error');
  
  if (passphrase === '輕鬆') {
    error.style.display = 'none';
    window.open('https://61223120.github.io/bkk/', '_blank');
  } else {
    error.style.display = 'block';
    document.getElementById('passphrase').value = '';
  }
}

// 允許 Enter 鍵提交
document.getElementById('passphrase').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    checkPassphrase();
  }
});