// const main = document.querySelector("#main");
// const qna = document.querySelector("#qna");
// const result = document.querySelector("#result");
// const endPoint = 7;
// const select = [];

// function calResult(){
//     var pointArray = [
//         { name: 'pad', value: 0, key: 0 },
//         { name: 'cotton', value: 0, key: 0},
//         { name: 'cup', value: 0, key: 0},
//         { name: 'tampon', value: 0, key: 0}
//     ]
//     for(let i = 0; i < endPoint; i++){
//         var target = QnAList[i].a[select[i]];
//         for(let j = 0; j < target.type.length; j++){
//             for(let k = 0; k< pointArray.length; k++){
//                 if(target.type[j] === pointArray[k].name){
//                     pointArray[k].value += 1;
//                 }
//             }
//         }
//     }

//     var resultArray = pointArray.sort(function (a, b){
//         if(a.value > b.value){
//             return -1;
//         }
//         if(a.value < b.value){
//             return 1;
//         }
//         return 0;
//     });

//     let resultword = resultArray[0].key;
//     return resultword;
// }

// function setResult(){
//     let point = calResult();
//     const resultName = document.querySelector('.resultname');
//     resultName.innerHTML = infoList[point].name;

//     var resultImg = document.createElement('img');
//     const imgDiv = document.querySelector('#resultImg');
//     var imgURL = 'img/image-' + point + '.png';
//     resultImg.src = imgURL;
//     resultImg.alt = point;
//     imgDiv.appendChild(resultImg);

//     const resultDesc = document.querySelector('.resultDesc');
//     resultDesc.innerHTML = infoList[point].desc;
// }
// function goResult(){
//     qna.style.WebitAnimation = "fadeOut 1s";
//     qna.style.animation = "fadeOut 1s";
//     setTimeout(() => {
//         result.style.WebitAnimation = "fadeIn 1s";
//         result.style.animation = "fadeIn 1s";
//         setTimeout(() => {
//             qna.style.display = "none";
//             result.style.display = "block";
//         }, 450)})
//         setResult();
// }

// function addAnswer(answerText, qIdx, idx) {
//     var a = document.querySelector('.answerBox');
//     var answer = document.createElement('button');
//     answer.classList.add('answerList');
//     a.appendChild(answer);
//     answer.innerHTML = answerText;

//     answer.addEventListener("click", function () {
//         var children = document.querySelectorAll('.answerList');
//         for (let i = 0; i < children.length; i++) {
//             children[i].disabled = true;
//             children[i].style.WebitAnimation = "fadeOut 0.5s";
//             children[i].style.animation = "fadeOut 0.5s";
//         }
//         setTimeout(() =>{
//             var target = QnAList[qIdx].a[idx].type;
//             for(let i = 0; i < target.length; i++){
//                 select[target[i]] += 1;
//             }
//             for(let i = 0; i < children.length; i++){
//                 children[i].style.display = 'none';
//         }
//         goNext(++qIdx);        
//     },450)
//     }, false);
// }

// function goNext(qIdx) {
//     if (qIdx === endPoint) {
//         goResult()
//         return;
//     }
//     var q = document.querySelector('.qBox');
//     q.innerHTML = QnAList[qIdx].q;
//     for (let i in QnAList[qIdx].a) {
//         addAnswer(QnAList[qIdx].a[i].answer, qIdx, i);
//     }
//     var status = document.querySelector('.statusBar');
//     status.style.width = (100 / endPoint) * (qIdx + 1) + '%';
// }

// function begin() {
//     main.style.WebitAnimation = "fadeOut 1s";
//     main.style.animation = "fadeOut 1s";
//     setTimeout(() => {
//         // select[qIdx] = idx; 
//         qna.style.WebitAnimation = "fadeIn 1s";
//         qna.style.animation = "fadeIn 1s";
//         setTimeout(() => {
//             main.style.display = "none";
//             qna.style.display = "block";
//         }, 450)
//         let qIdx = 0;
//         goNext(qIdx);
//     }, 450);
// }


//
//
//
//

const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 7;
const select = [0, 0, 0, 0];

function calResult(){
//     var pointArray = [
//         { name: 'pad', value: 0, key: 0 },
//         { name: 'cotton', value: 0, key: 0},
//         { name: 'cup', value: 0, key: 0},
//         { name: 'tampon', value: 0, key: 0}
//     ]
//     for(let i = 0; i < endPoint; i++){
//         var target = QnAList[i].a[select[i]];
//         for(let j = 0; j < target.type.length; j++){
//             for(let k = 0; k< pointArray.length; k++){
//                 if(target.type[j] === pointArray[k].name){
//                     pointArray[k].value += 1;
//                 }
//             }
//         }
//     }

//     var resultArray = pointArray.sort(function (a, b){
//         if(a.value > b.value){
//             return -1;
//         }
//         if(a.value < b.value){
//             return 1;
//         }
//         return 0;
//     });

//     let resultword = resultArray[0].key;
//     return resultword;

    console.log(select);
    var result = select.indexOf(Math.max(...select));
    return result;
}

function setResult(){
    let point = calResult();
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = './image-' + point + '.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}
function goResult(){
    qna.style.WebitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
        result.style.WebitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
        }, 450)})
        setResult();
}

function addAnswer(answerText, qIdx, idx) {
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function () {
        var children = document.querySelectorAll('.answerList');
        for (let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.WebitAnimation = "fadeOut 0.3s";
            children[i].style.animation = "fadeOut 0.3s";
        }
        setTimeout(() =>{
            var target = QnAList[qIdx].a[idx].type;
            for(let i = 0; i < target.length; i++){
                select[target[i]] += 1;
            }
            for(let i = 0; i < children.length; i++){
                children[i].style.display = 'none';
        }
        goNext(++qIdx);        
    },450)
    }, false);
}

function goNext(qIdx) {
    if (qIdx === endPoint) {
        goResult()
        return;
    }
    var q = document.querySelector('.qBox');
    q.innerHTML = QnAList[qIdx].q;
    for (let i in QnAList[qIdx].a) {
        addAnswer(QnAList[qIdx].a[i].answer, qIdx, i);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100 / endPoint) * (qIdx + 1) + '%';
}

function begin() {
    main.style.WebitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        
        qna.style.WebitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        }, 450)
        let qIdx = 0;
        goNext(qIdx);
    }, 450);
}