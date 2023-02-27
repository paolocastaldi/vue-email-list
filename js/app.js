casual_mail = [];

for (let i = 0; i < 10; i++) {
    axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
            console.log(res);
            casual_mail.push(res.data.response);

            if (casual_mail.lenght >= 10) {
                console.log(casual_mail);
            }


        });
}