export const APIURL="https://jsonplaceholder.typicode.com/users";
export function callApi(reqmethod,url,Data,responsehandler){
let options;
if(reqmethod==="GET"||reqmethod==="DELETE")
options={method:reqmethod,header:{'content-type':'application/json'}}
else
    options={method:reqmethod,header:{'content-type':'application/json'},body:ata};
fetch(url,options)
//send request in asyncronous mode
.then((response)=>{
    if(!response.ok)
        throw new Error(response.status+"---"+response.statusText)
    return response.json();
})
//receive response from server
.then((res)=>responsehandler(res))
//handle network related error
.catch((err)=>alert(err));
}