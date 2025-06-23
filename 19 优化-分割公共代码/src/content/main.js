/**
 * @version v1.0
 * @ClassNmae: main
 * @Description: desc
 * @Author: SYANNPE
 */
import {checkPhone, checkCode} from "../utils/check.js";

document.addEventListener("DOMContentLoaded", function () {
    console.log(checkPhone(prompt("输入号码")))
});