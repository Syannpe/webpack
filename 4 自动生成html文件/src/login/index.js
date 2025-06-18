/**
 * @version v1.0
 * @ClassNmae: index
 * @Description: desc
 * @Author: SYANNPE
 */

import {checkPhone, checkCode} from "./utils/check.js";

// console.log(checkPhone("12345678901"))
// console.log(checkCode("123456"))

const submitBtn = document.querySelector("form button[type='submit']");
submitBtn.addEventListener("click", function (e) {
    const phone = document.querySelector("#phone").value;
    const code = document.querySelector("#code").value;

    if (!checkPhone(phone)) {
        console.log("手机号格式不正确");
        e.preventDefault();
        return;
    } else if (!checkCode(code)) {
        console.log("验证码格式不正确");
        e.preventDefault();
        return;
    }

    e.preventDefault();
    console.log("提交成功");
});
