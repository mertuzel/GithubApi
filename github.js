class Github{

    async getGithubData(username){ // Getting user datas and repos from api
        
        const responseUser = await fetch("https://api.github.com/users/" + username);
        const responseRepo = await fetch("https://api.github.com/users/" + username +"/repos");

        return { // return both 
            userdata : await responseUser.json(),
            repodata : await responseRepo.json()
        };
    }

}