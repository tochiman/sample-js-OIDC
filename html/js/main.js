// import Keycloak from 'https://cdn.jsdelivr.net/npm/keycloak-js@26.2/+esm'
import Keycloak from 'https://cdn.jsdelivr.net/npm/keycloak-js@25.0.5/+esm'

const keycloak = new Keycloak({
    url: 'http://192.168.150.100:8080/auth',
    realm: 'demo',
    clientId: 'sample-app',
  });
  
  keycloak.init({ onLoad: 'check-sso' })
    .then(authenticated => {
        const statusElement = document.getElementById('status');
        
        if (authenticated && keycloak.tokenParsed) {
            statusElement.innerText = `ログイン中: ${keycloak.tokenParsed.preferred_username}`;
            statusElement.style.color = 'green';
            console.log("login")
        } else {
            console.log("not login")
            statusElement.innerText = '未ログインです';
            statusElement.style.color = 'red';
        }
    })
    .catch(error => {
    console.error('Keycloak初期化エラー:', error);
    });

  document.getElementById('loginBtn').addEventListener('click', () => {
    keycloak.login();
  });
  
  document.getElementById('logoutBtn').addEventListener('click', () => {
    keycloak.logout();
  });