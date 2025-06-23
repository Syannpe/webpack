/**
 * @version v1.0
 * @ClassNmae: alert()
 * @Description: desc
 * @Author: SYANNPE
 */

// 弹窗插件
function myAlert(isSuccess, msg) {
    const myAlert = document.querySelector('.alert')
    myAlert.classList.add(isSuccess ? 'alert-success' : 'alert-danger');
    myAlert.innerHTML = msg;
    myAlert.classList.add('show');

    setTimeout(() => {
            myAlert.classList.remove(isSuccess ? 'alert-success' : 'alert-danger')
            myAlert.innerHTML = ''
            myAlert.classList.remove('show')
        }, 2000)

}

export default myAlert