
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');

  if (header) {
    header.innerHTML = `
      <h1>buildledger</h1>
      <nav>
        <a href="index.html" style="color:white; margin: 0 1rem;">ホーム</a>
        <a href="dashboard.html" style="color:white; margin: 0 1rem;">マイページ</a>
        <a href="login.html" style="color:white; margin: 0 1rem;">ログイン</a>
        <a href="register.html" style="color:white; margin: 0 1rem;">登録申請</a>
      </nav>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <p>&copy; 2025 buildledger. All rights reserved.</p>
      <p><a href="#">利用規約</a> | <a href="#">プライバシーポリシー</a> | <a href="#">お問い合わせ</a></p>
    `;
  }
});
