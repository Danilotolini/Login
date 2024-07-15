const registerUser = async () => {
    const response = await fetch('http://localhost:8081/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: 'exampleUser',
            password: 'examplePassword'
        })
    });

    const data = await response.json();
    console.log(data);
}

registerUser();
