async function updateUser() {

    const body = {
        username: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        first_name: document.getElementById("firstName").value,
        last_name: document.getElementById("lastName").value
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };

    await fetch("http://localhost:8000/users/:user_id", options)
        .then(response => {
            if (response.status === 202) {
                return response.json();
            }
            return console.error('Ocorreu um erro!');
        })
        .catch(() => {
            return new Error(`Erro na resposta do servidor código`);
        });
        
}

export { updateUser };