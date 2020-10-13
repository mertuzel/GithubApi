// Selecting elements
const githubname = document.querySelector("#githubname");
const githubform = document.querySelector("#github-form");
const clearButton = document.querySelector("#clear-last-users");
const lastuserUl = document.querySelector("#last-users");

// Obj
const github = new Github();
const ui = new UI();

eventListeners ();


function eventListeners(){
    githubform.addEventListener("submit",getDatas);
    document.addEventListener("DOMContentLoaded",ui.getSearchedProfilesAndAddToUI());
    clearButton.addEventListener("click",clearAllFromUIAndStorage);
    lastuserUl.addEventListener("click",deleteSearched);
}

function getDatas(e){
    if(githubname.value.trim() === ""){
        ui.alert("danger","Write an username.");
    }
    else{
        github.getGithubData(githubname.value.trim())
        .then(username=>{
            if(username.userdata.message === "Not Found"){
                ui.alert("danger","Username has not been found");
            }
            else{
                Storage.addSearchedProfilesToStorage(username.userdata);
                ui.addSearchedProfilesToUI(username.userdata)
                ui.addUserDataToUI(username.userdata);
                ui.addRepoDataToUI(username.repodata);
                
            }
        })
        .catch(error=>console.error(error));
    }
    e.preventDefault();
}

function clearAllFromUIAndStorage(){
    ui.clearAll();
    Storage.clearAll();
}

function deleteSearched(e){
    if(e.target.type === "button"){
        ui.deleteChosenUserFromUI(e.target.parentElement);
        Storage.deleteChosenUserFromStorage(e.target.parentElement);
        
    }
}