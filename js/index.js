const app = {

    baseUrl = "https://wildcode.herokuapp.com/",

    init:async()=> {
        await app.getdata();
        app.addListeners();

    },

    addListeners: () => {
        const form = document.querySelector('form')
        form.addEventListener("submit",app.onSubmit)
    },
    onSubmit:async(event)=>{
        event.preventDefault();
        const formData = new FormData(event.target)

        
    }


}; 

document.addEventListener('DOMContentLoaded',app.init)

