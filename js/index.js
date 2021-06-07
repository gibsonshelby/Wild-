
const app = {

    baseUrl: "https://wildcode.herokuapp.com/user",
    getUrl: "https://wildcode.herokuapp.com/users",

    init:async()=> {
        await app.getData();
        app.addListeners();

    },


    addListeners: () => {
        const form = document.querySelector('form')
        form.addEventListener("submit",app.onSubmit)

    },


    onSubmit:async(event)=>{
        event.preventDefault();
        const formData = new FormData(event.target)
        document.getElementById("name").value =""
        console.log(event.target)
        console.log(formData.get("name"))
        const headers = new Headers
        try{
            
            const result = await fetch(`${app.baseUrl}`,{method:"POST",body:formData,headers,mode:"cors"})
           
           const jsonResult =  await result.json()

           app.makeDataInDom(jsonResult)
            

        }catch (err){
         
        }
 },

    getData : async () => {
            try{
                const result = await fetch(`${app.getUrl}`,{method:"GET",mode:"cors"})
              
               const jsonList =  await result.json()
                
                
                for(argonaute of jsonList){
                    app.makeDataInDom(argonaute)
                }

            }catch (err){
                console.error(err)
            }
 },
            

        

        makeDataInDom : data => {
            const list = document.getElementsByClassName("member-list")
            const el = document.createElement("div")
            el.className = "member-item"
            el.textContent = data.name
            list[0].appendChild(el)
        }

}


document.addEventListener('DOMContentLoaded',app.init)

