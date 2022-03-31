// build counter

let currentTimeValue = 0
let counter = setInterval(addOne, 1000);

function addOne () {
    currentTimeValue += 1;
    document.querySelector('#counter').innerText = currentTimeValue;
    return currentTimeValue;
};

//build incrementer

document.querySelector('#plus').addEventListener('click', clickIncrement);
    
function clickIncrement() {    
    currentTimeValue += 1;
    document.querySelector('#counter').innerText = currentTimeValue;
    return currentTimeValue;
};

//build decrementer

document.querySelector('#minus').addEventListener('click', clickDecrement);
    
function clickDecrement() {    
    currentTimeValue -= 1;
    document.querySelector('#counter').innerText = currentTimeValue;
    return currentTimeValue;
};

//build like button

document.querySelector('#heart').addEventListener('click', clickLike);
    
function clickLike() {        
    let listItem = document.createElement('li');
    listItem.innerText = `${currentTimeValue} liked`;
    document.querySelector('.likes').appendChild(listItem);
};

/*
let likeArray = [];

function clickLikeTwo() {
    const bigList = document.querySelector('.likes');
    let listItems = bigList.getElementsByTagName('li');

    if (listItems.length < 1) {
        let listItem = document.createElement('li');
        listItem.innerText = `${currentTimeValue}`;
        document.querySelector('.likes').appendChild(listItem);
        likeArray.push(currentTimeValue);
    } else if (listItems.length >= 1) {

    }




    let listItem = document.createElement('li');
    listItem.innerText = `${currentTimeValue}`;
    document.querySelector('.likes').appendChild(listItem);

    likeArray.push(currentTimeValue);
    let count = 0;
    likeArray.forEach( element => {
        if (element === currentTimeValue) {
            count += 1;
            let listItem = document.createElement('li');
            listItem.Item.innerText = `${currentTimeValue}`;
            document.querySelector(.'likes').appendChild(listItem);
        }
    })

    }

    const bigList = document.querySelector('.likes');       //creates variable for likes ul
    let listItems = bigList.getElementsByTagName('li');     //creates variable for nodelist of all li

    /*for (let item of listItems) {
        let numOfLikes = 0
        if (parseInt(item.innerText) === currentTimeValue) {
            numOfLikes += 1
            listItem.innerText = `${currentTimeValue} has been liked ${numOfLikes} times`;
        } else {
            listItem.innerText = `${currentTimeValue} has been liked 1 time`;
        }
    };
    document.querySelector('.likes').appendChild(listItem); 
    return likeArray;
}; */


//build comment button

let form = document.querySelector('#comment-form');
form.addEventListener('submit', clickSubmit);
    
function clickSubmit(event) {
    event.preventDefault();
    submitComment(event.target.querySelector('#comment-input').value);
    form.reset();
};

function submitComment(comment) {
    let commentListItem = document.createElement('li');
    commentListItem.innerText = `${comment}`;
    document.querySelector('.comments').appendChild(commentListItem);
};

//build pause button

document.querySelector('#pause').addEventListener('click', handleClick);
let buttonLabel = document.querySelector('#pause');
let lightSwitch = true;

function handleClick() {
    if (lightSwitch === true) {
        pauseEverything();
    } else if (lightSwitch === false) {
        resumeEverything();
    }
};

function pauseEverything() {
    clearInterval(counter);
    document.querySelector('#plus').disabled = true;
    document.querySelector('#minus').disabled = true;
    document.querySelector('#heart').disabled = true;
    document.querySelector('#submit').disabled = true;
    buttonLabel.innerText = 'resume';
    lightSwitch = false;

};

function resumeEverything() {
    counter = setInterval(addOne, 1000);
    document.querySelector('#plus').disabled = false;
    document.querySelector('#minus').disabled = false;
    document.querySelector('#heart').disabled = false;
    document.querySelector('#submit').disabled = false;
    buttonLabel.innerText = 'pause';
    lightSwitch = true;
 };

