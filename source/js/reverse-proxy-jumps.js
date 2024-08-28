$(function(){
const host = window.location.host
if (host !== 'www.setbun.com' && ! host.startsWith('localhost') && ! host.startsWith('127.0.0.1')) {
    document.body.innerHTML = [
        '<div style="margin: auto;">',
        '<h1>您所访问的站点非原站点，为保护原作者版权，将在三秒后跳转！</h1>',
        '<br />',
        '<h1>请此站点持有者邮件联系我处理: dev-support@setbun.com</h1>',
        '</div>',
    ].join('')
    document.body.style = [
        'background-color: white;',
        'color: black;',
        'text-align: center;',
        'font-size: 50px;',
        'width: 100vw;',
        'height: 100vh;',
        'display: flex;',
    ].join('')
    setTimeout(() => {
        window.location.href = 'https://www.setbun.com'
    }, 3000)
}
});