import App from '../App';

function register() {
    const body = {
        username: App.setNameValue,
        email: App.setEmailValue,
        password: App.setPwdValue
    };
    const options = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };

    fetch('/', options)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
            return `Erro na resposta do servidor código: ${response.status}`
        })
        .then((data) => {
            // console.log(data)
            if(data.data !== "") {
                App.setNameValue = '';
                App.setEmailValue = '';
                App.setPwdValue = '';

                return 
            }
            return `Bem vindo ${App.setNameValue}`
            
        })
        .catch(error => {
            error(`Erro na resposta do servidor código: `)
        });
}

export {register}