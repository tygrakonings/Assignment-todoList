const getTasks = async function () {
    const apiUrl = `http://localhost:3000` 
        try {
            const response = await fetch(apiUrl, { method: "GET", headers: {
                "Content-Type": "application/json" }
             });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
        };

const postTask = async function (value) {
    const data = {description: value, done:false}
    const apiUrl=`http://localhost:3000`
        try {
            const response = await fetch(apiUrl, { 
                method: "POST",
                headers: {
                "Content-Type": "application/json"},
                body: JSON.stringify(data)
        });
            const result = await response.json();
            return result;
        } catch (error) {
            console.log(error);
        }
        };

  
 const deleteTask = async function (id) {
    const apiUrl=`http://localhost:3000/`
         try{
            const response = await fetch(apiUrl + id, {
                 method: 'DELETE',
                 headers: {
                'Content-type': 'application/json'
        }
        });       
        } catch (error) {
             console.log(error);
        }   
        };


  