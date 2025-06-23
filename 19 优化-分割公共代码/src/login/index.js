/**
 * @version v1.0
 * @ClassNmae: index
 * @Description: desc
 * @Author: SYANNPE
 */

import {checkPhone, checkCode} from "../utils/check.js";

// console.log(checkPhone("12345678901"))
// console.log(checkCode("123456"))


import "./style.less";
import "bootstrap/dist/css/bootstrap.min.css";

import imgObj from "./assets/小图标.png";
// import imgObj from "./assets/大图标.png";

//这里引入的图片如果大于8k，那么图片会打包成base64编码，否则打包成单独的图片文件
const img = new Image();
img.src = imgObj;
document.querySelector("div.container").insertAdjacentElement("afterend", img);


import myAxios from "../utils/request.js";
import myAlert from "../utils/alert.js";

const submitBtn = document.querySelector("form button[type='submit']");
submitBtn.addEventListener("click", function (e) {
    const phone = document.querySelector("#phone").value;
    const code = document.querySelector("#code").value;
    e.preventDefault();

    if (!checkPhone(phone)) {
        myAlert(false, "手机号格式不正确");
        console.log("手机号格式不正确");
        return;
    } else if (!checkCode(code)) {
        myAlert(false, "验证码格式不正确");
        console.log("验证码格式不正确");
        return;
    }

    console.log("提交成功");
    location = "../content/index.html";

    myAxios({
        url: "/v1_0/authorizations",
        method: "POST",
        data: {
            phone,
            code
        }
    }).then(res => {
        myAlert(true, "登录成功");
    }).catch(err => {
        myAlert(true, "登录失败");
    });

});

if (process.env.NODE_ENV === "production") {
    console.log = _ => {
    };
}

console.log("开发模式下好用，生产模式下失效", process.env.NODE_ENV);