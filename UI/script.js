var fullName = "Ebison Gabriel";
var firstName = fullName.split(' ')[1];

console.log(firstName);

// Delete Diary!!!

// delBtn = document.querySelectorAll('#book-list .btn');
// Array.from(delBtn).forEach(function (del) {
//     del.addEventListener('click', function (e) {
//         var li = e.target.parentElement;
//         li.parentNode.removeChild(li);
//     });
// });

// another way of Deleting the diary... This method is called the event bubbling!!!
const DiaryList = document.querySelector('#book-list ul');
DiaryList.addEventListener('click', (e) => {
    if (e.target.className === 'btn') {
        const li = e.target.parentElement;
        DiaryList.removeChild(li);
    }
});

//1. Add to Diary!!!
const addDiary = document.forms.addDiary;
addDiary.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = addDiary.querySelector('input[type="text"]').value;
    addDiary.querySelector('input[type="text"]').value = " ";
    if (value === " ") {
        alert('Please add some event!!!');
        return value;
    }
    if (value.length < 15) {
        alert('Event is too short to be added, Please add more Characters');
        return value;
    }
    console.log(addDiary, value);

    //     //2. create Element
    const li = document.createElement('li');
    const newDiary = document.createElement('span');
    const editBtn = document.createElement('span');
    const delBtn = document.createElement('span');
    const doneBtn = document.createElement('span');

    //     //4. add Content
    editBtn.textContent = 'Delete';
    delBtn.textContent = 'Edit';
    doneBtn.textContent = 'Done';
    newDiary.textContent = value;

    //     //5. add class
    li.classList.add('myGrid');
    newDiary.classList.add('newDiary');
    editBtn.classList.add('btn');
    delBtn.classList.add('btn');
    doneBtn.classList.add('btn');

    //     //3. append to DOM
    li.appendChild(newDiary);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    li.appendChild(doneBtn);
    DiaryList.appendChild(li); // remember to use insertBefore here!
});

// Hide My diaries...
const hideDiaries = document.querySelector('#hide');
hideDiaries.addEventListener('change', (e) => {
    if (hideDiaries.checked) {
        DiaryList.style.display = 'none';
    } else {
        DiaryList.style.display = 'block';
    }
});

// search for diaries...
const searchDiary = document.forms.searchDiaries.querySelector('input');
searchDiary.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    e.target.value = ' ';
    const diaries = DiaryList.getElementsByTagName('li');
    Array.from(diaries).forEach((diary) => {
        const title = diary.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) != -1) {} else {
            diary.style.display = 'none';
        }
    });
});