const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:1337' : 'https://green-again-api.now.sh';



export async function listPlantEntries ()
{
 const response = await fetch(`${API_URL}/api/logs`);
 return response.json();
}

export async function createPlantEntry (entry)
{
 const response = await fetch(`${API_URL}/api/logs`,{
     method: 'POST',
     headers:{
         'content-type':'application/json'
     },
     body:JSON.stringify(entry),
 });
 return response.json();
}