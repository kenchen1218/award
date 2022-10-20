alert("歡迎來到 Synology 扭蛋抽獎，請輸入資料，即刻抽獎！")

const userName = prompt("請輸入使用者名稱")
const bornDate = prompt("請輸入生日(範例10/10)")
const faroriteNumber = prompt("請輸入1~100最喜歡的數字")
const faroriteFood = prompt("最喜歡吃的食物")
const add = prompt("收件地點")


if (faroriteNumber >= 51) {
    document.write("恭喜" + userName + "獲得大獎，Ken老爺將會在" + bornDate + "將" + faroriteNumber + "份" + faroriteFood + "送到" + add)
} else {
    document.write("恭喜" + userName + "獲得參加獎，Ken老爺將會在" + bornDate + "將" + faroriteNumber + "份" + faroriteFood + "送到" + add)
}