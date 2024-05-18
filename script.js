

const form = document.getElementById('storageForm');
const localDataKeyInput = document.getElementById('localDataKey');
const localDataValueInput = document.getElementById('localDataValue');
const sessionDataKeyInput = document.getElementById('sessionDataKey');
const sessionDataValueInput = document.getElementById('sessionDataValue');
const localStorageDataDisplay = document.getElementById('localStorageData');
const sessionStorageDataDisplay = document.getElementById('sessionStorageData');


function displayStoredData() {
    localStorageDataDisplay.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${value}`;
            
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            localStorage.removeItem(key);
            displayStoredData();
        });
    
        listItem.appendChild(deleteButton);
        localStorageDataDisplay.appendChild(listItem);
    }
    
    sessionStorageDataDisplay.innerHTML = '';
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        const value = sessionStorage.getItem(key);
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${value}`;
            
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            sessionStorage.removeItem(key);
            displayStoredData();
        });
    
        listItem.appendChild(deleteButton);
        sessionStorageDataDisplay.appendChild(listItem);
    }
}

displayStoredData();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const localDataKey = localDataKeyInput.value;
    const localDataValue = localDataValueInput.value;
    const sessionDataKey = sessionDataKeyInput.value;
    const sessionDataValue = sessionDataValueInput.value;

    if (localDataKey && localDataValue) {
        localStorage.setItem(localDataKey, localDataValue);
    }

    if (sessionDataKey && sessionDataValue) {
        sessionStorage.setItem(sessionDataKey, sessionDataValue);
    }

    displayStoredData();

    localDataKeyInput.value = '';
    localDataValueInput.value = '';
    sessionDataKeyInput.value = '';
    sessionDataValueInput.value = '';
});



const clearLocalStorageButton = document.getElementById('clearLocalStorage');
const clearSessionStorageButton = document.getElementById('clearSessionStorage');
    
clearLocalStorageButton.addEventListener('click', () => {
    localStorage.clear();
    displayStoredData();
});
    
clearSessionStorageButton.addEventListener('click', () => {
    sessionStorage.clear();
    displayStoredData();
});
