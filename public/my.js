//眼睛部分交互
const eye = document.querySelector("#eye");

eye.addEventListener("click", function () {
    if (eye.src.match("open")) {
        eye.src = eye.src.replace("open", "close");
        //显示今天
        const div1 = document.querySelector(".show-one");
        const div2 = document.querySelector(".show-week");
        div1.style.display = "block";
        div2.style.display = "none";
    } else {
        eye.src = eye.src.replace("close", "open");
        //显示本周
        const div1 = document.querySelector(".show-one");
        const div2 = document.querySelector(".show-week");
        div2.style.display = "block";
        div1.style.display = "none";
    }
});

//更多内列表交互
const listElements = document.querySelectorAll(".list");
// console.log(listElements);
listElements.forEach(element => {
    element.addEventListener("click", function () {
        if (element.classList.contains('active')) {
            // console.log('元素有 active 类。');
        } else {
            // console.log('元素没有 active 类。');
            element.classList.add('active');
            listElements.forEach(otherElement => {
                if (otherElement !== element && otherElement.classList.contains('active')) {
                    otherElement.classList.remove('active');
                }
            });
        }
    });
});

//加载js显示课程表
let cla = [
    { className: "RFID技术与应用", classID: "08503336-04", classDay: "1", classRoom: "文华-7号教学楼-501", classTeacher: ["刘飞飞", "白瑞琴"], classWeek: ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"], classTime: "1" },
    { className: "物联网信息安全技术", classID: "08503337-04", classDay: "1", classRoom: "文华-4号实训楼-403", classTeacher: ["李泽仁 "], classWeek: ["10", "11", "12", "13", "14", "15", "16", "17", "18"], classTime: "2" },
    { className: "物联网信息安全技术", classID: "08503337-04", classDay: "1", classRoom: "文华-8号教学楼-101", classTeacher: ["李泽仁 "], classWeek: ["10", "11", "12", "13", "14", "15", "16", "17", "18"], classTime: "3" },
    { className: "RFID技术与应用", classID: "08503336-04", classDay: "1", classRoom: "文华-7号教学楼-501", classTeacher: ["刘飞飞", "白瑞琴"], classWeek: ["8", "10", "12", "14", "16", "18"], classTime: "4" },

    { className: "计算机应用技能实训", classID: "08503243-04", classDay: "2", classRoom: "文华-4号实训楼-404", classTeacher: ["高华"], classWeek: ["8", "9", "10", "11", "12", "13", "14"], classTime: "2" },
    { className: "形势与政策", classID: "00100305-150", classDay: "2", classRoom: "文华-11号教学楼-105", classTeacher: ["鲁玲"], classWeek: ["13", "14", "15", "16"], classTime: "5" },
    { className: "中国近现代史纲要", classID: "00500301-16", classDay: "2", classRoom: "文华-5号教学楼-102", classTeacher: ["王玮玮"], classWeek: ["18"], classTime: "5" },

    { className: "数据库原理与应用", classID: "08503338-04", classDay: "3", classRoom: "文华-5号教学楼-307", classTeacher: ["杨旭"], classWeek: ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"], classTime: "1" },
    { className: "计算机组成原理", classID: "08503339-04", classDay: "3", classRoom: "文华-6号教学楼-309", classTeacher: ["杜智宏"], classWeek: ["6", "7", "8", "9"], classTime: "2" },
    { className: "数据库原理与应用", classID: "08503338-04", classDay: "3", classRoom: "文华-4号实训楼-504", classTeacher: ["杨旭"], classWeek: ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"], classTime: "3" },
    { className: "中国近现代史纲要", classID: "00500301-16", classDay: "3", classRoom: "文华-5号教学楼-104", classTeacher: ["王玮玮"], classWeek: ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"], classTime: "4" },

    { className: "RFID技术与应用", classID: "08503336-04", classDay: "4", classRoom: "文华-4号教学楼-501", classTeacher: ["刘飞飞", "白瑞琴"], classWeek: ["6", "7", "8", "9"], classTime: "1" },
    { className: "物联网信息安全技术", classID: "08503337-04", classDay: "4", classRoom: "文华-4号教学楼-305", classTeacher: ["李泽仁 "], classWeek: ["10", "11", "12", "13", "14", "15", "16", "17", "18"], classTime: "1" },
    { className: "中国近现代史纲要", classID: "00500301-16", classDay: "4", classRoom: "文华-5号教学楼-104", classTeacher: ["王玮玮"], classWeek: ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"], classTime: "2" },
    { className: "计算机应用技能实训", classID: "08503243-04", classDay: "4", classRoom: "文华-4号实训楼-404", classTeacher: ["高华"], classWeek: ["6", "7", "8", "9", "12", "13", "14", "15", "16", "17", "18"], classTime: "3" },
    { className: "计算机组成原理", classID: "08503339-04", classDay: "4", classRoom: "文华-1号教学楼-207", classTeacher: ["杜智宏"], classWeek: ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"], classTime: "4" },

    { className: "RFID技术与应用", classID: "08503336-04", classDay: "5", classRoom: "文华-6号教学楼-306", classTeacher: ["刘飞飞", "白瑞琴"], classWeek: ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"], classTime: "1" },
    { className: "数据库原理与应用", classID: "08503338-04", classDay: "5", classRoom: "文华-4号实训楼-504", classTeacher: ["杨旭"], classWeek: ["13", "14", "15", "16", "17"], classTime: "2" },
    { className: "数据库原理与应用", classID: "08503338-04", classDay: "5", classRoom: "文华-4号教学楼-204", classTeacher: ["杨旭"], classWeek: ["6", "7", "8", "9", "10"], classTime: "2" },
    { className: "RFID技术与应用", classID: "08503336-04", classDay: "5", classRoom: "文华-6号教学楼-309", classTeacher: ["刘飞飞", "白瑞琴"], classWeek: ["10"], classTime: "3" },
    { className: "计算机组成原理", classID: "08503339-04", classDay: "5", classRoom: "文华-6号教学楼-309", classTeacher: ["杜智宏"], classWeek: ["9"], classTime: "3" },
    { className: "计算机组成原理", classID: "08503339-04", classDay: "5", classRoom: "文华-2号实训楼-404", classTeacher: ["杜智宏"], classWeek: ["10", "11", "12", "13", "14", "15", "16", "17", "18"], classTime: "4" },

    // { className: "军事理论", classID: "00100110-23", classDay: "", classRoom: "无固定教室", classTeacher: ["王曌"], classWeek: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"], classTime: "" }
]


//计算各周的课程
let classes = []
for (let m = 0; m < 19; m++) {
    let weekClass = [];
    cla.forEach(i => {

        i.classWeek.forEach(j => {
            if (j == m) {
                weekClass.push(i);
            }
        })
    });
    classes.push(weekClass);
}
console.log(classes);




//今天是第 week 周
let weekNum = (function getWeekNumber() {
    const currentDate = new Date();
    const firstDayOfSeptember = new Date(2024, 8, 2);
    const diffTime = currentDate.getTime() - firstDayOfSeptember.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const daysDiff = Math.floor(diffTime / oneDay);
    const weekDiff = Math.floor(daysDiff / 7);
    return weekDiff + 1;
})()

// console.log("今天是第" + weekNum + "周");

//加载课程表，激活对应课程
for (let i = 0; i < listElements.length; i++) {
    // console.log(listElements[i].innerHTML);
    if (listElements[i].innerHTML.match(weekNum)) {
        //激活侧边栏
        listElements[i].classList.add('active');
        //更改标题
        let h3 = document.querySelector(".head h3");
        h3.innerHTML = "第" + weekNum + "周";
        //加载课程表
        loadAllClass(classes[weekNum])
        break;
    }
}
//刷新课程表
/***
 * 加载课程表
 * @param {*} arr 第n周的所有课程
 */
function loadAllClass(arr) {
    //清除所有课程
    let TimeString = ["<div>08:20 - 10:00</div>", "<div>10:20 - 12:00</div>", "<div>14:10 - 15:50</div>", "<div>16:10 - 17:50</div>", "<div>19:00 - 20:40</div>"]
    for (let i = 1; i < 8; i++) {
        let divLoad = document.querySelector(`#d${i}`);
        divLoad.innerHTML = `<div class="card-item">
                        <div>08:20 - 10:00</div>
                    </div>
                    <div class="card-item">
                        <div>10:20 - 12:00</div>
                    </div>
                    <div class="card-item">
                        <div>14:10 - 15:50</div>
                    </div>
                    <div class="card-item">
                        <div>16:10 - 17:50</div>
                    </div>
                    <div class="card-item">
                        <div>19:00 - 20:40</div>
                    </div>`;

    }

    console.log(arr);
    arr.forEach(i => {
        let divLoad = document.querySelector(`#d${i.classDay}`);
        let divChildren = divLoad.children;

        divChildren[i.classTime - 1].innerHTML = `${TimeString[i.classTime - 1]}
                        <div>《${i.className}》</div>
                        <div>${i.classTeacher} ${i.classRoom.slice(3)}</div > `;

        //背景颜色
        let bgc = ["#108B96", "#2A6E3F", "#C0392B", "#E58E26", "#192A56"]
        divChildren[i.classTime - 1].style.backgroundColor = bgc[i.classTime - 1];
        divChildren[i.classTime - 1].style.color = "#fff";

    });
}

//加载今天课程
let divToday = document.querySelector("#d0")
const today = new Date();
let Today = today.getDay();
if (Today == 0) {
    Today = 7;
}
let divTodayLoad = document.querySelector(`#d${Today}`);
divToday.innerHTML = divTodayLoad.innerHTML;


//侧边栏点击事件--更改周数，加载课程表
// console.log(listElements);
listElements.forEach(element => {
    element.addEventListener("click", function () {
        console.log(element.innerHTML);
        //加载课程表
        loadAllClass(classes[parseInt(element.innerHTML.match(/\d+/)[0])])
        //更改标题
        let h3 = document.querySelector(".head h3");
        h3.innerHTML = element.innerHTML;

    });
});
