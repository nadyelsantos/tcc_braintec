function showSection(id) {
    document.querySelectorAll('main').forEach(sec => sec.classList.remove('active'));
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  }
  
  function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const savedUser = localStorage.getItem('tdah_user');
    const savedPass = localStorage.getItem('tdah_pass');
  
    if (user === savedUser && pass === savedPass) {
      document.getElementById('login-screen').style.display = 'none';
      document.getElementById('app').style.display = 'block';
    } else {
      alert('Usuário ou senha incorretos.');
    }
  }
  
  function register() {
    const newUser = document.getElementById('new-username').value;
    const newPass = document.getElementById('new-password').value;
  
    if (newUser && newPass) {
      localStorage.setItem('tdah_user', newUser);
      localStorage.setItem('tdah_pass', newPass);
      alert('Usuário criado com sucesso!');
      showLogin();
    } else {
      alert('Preencha todos os campos.');
    }
  }
  
  function showRegister() {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('register-box').style.display = 'block';
  }
  
  function showLogin() {
    document.getElementById('register-box').style.display = 'none';
    document.getElementById('login-box').style.display = 'block';
  }