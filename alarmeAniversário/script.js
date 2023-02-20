const birthdayDate = document.getElementById('birthday')

const birthdayMsg = document.getElementById('birthdayMsg')

birthdayDate.addEventListener('change', () => {
  const intervalo = setInterval(() => {
        const d1 = new Date ();
        const d2 = birthdayDate.value;

        const diffInMs = new Date (d2) - new Date (d1);
        const diffInDays = diffInMs/(1000*60*60*24)
        console.log(diffInDays)

        if (diffInMs > 0) {
            birthdayMsg.innerText = `Faltam ${diffInDays} dias para o seu aniversário.`;
        } else {
            birthdayMsg.innerText = `Feliz aniversário!`;
            clearInterval(intervalo);
        }
    }, 3000)
})