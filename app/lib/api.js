export async function getAllUsers(){
    const response=await fetch("http://localhost:5000/users",{
      cache: 'no-cache',
      method:"GET",
    });
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return response.json()
}

export async function createUser(userData) {
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    return response.json();
  }
  

export async function deleteSingleUser(id){
    const response=await fetch(`http://localhost:5000/users/${id}`,{
      method:"DELETE",
    });
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return response.json()
}


export async function findSingleUser(id){
    const response=await fetch(`http://localhost:5000/users/${id}`,{
      cache: 'no-cache',
      method:"GET",
    });
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return response.json()
}
  

export async function updateUser(id,userData) {
    const response = await fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
      throw new Error("Failed to update user");
    }
    return response.json();
}
  