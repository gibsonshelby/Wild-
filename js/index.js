const app = {

    baseUrl = "https://wildcode.herokuapp.com/users",

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

        try{
            const result = await fetch(`$app.baseUrl`,{method:"POST",body:formData})
           const jsonList =  await result.json()
            console.log(jsonList)

        }catch (err){
            console.error(err)
        }
        },

        
    }


document.addEventListener('DOMContentLoaded',app.init)

