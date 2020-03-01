const API_URL = 'http://localhost:1337';


export async function listPlantEntries ()
{
 const response = await fetch(`${API_URL}/api/logs`);
 return response.json();
}