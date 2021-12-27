import "./app.css";


function app() {


    const arr = ["Abhishek", "Suraj", "Anurag"];

    return (

        <div className = "App">

        {arr.map((e)   =>  (
<todo num = {e} age = {13}/>

         ) )}
         </div>
    );
    }
