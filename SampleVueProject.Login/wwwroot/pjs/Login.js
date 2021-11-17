window.addEventListener('load', () => {
    new Vue({

        el: '#app',
        data: {
            errorMessage: 'Hata mesajı',
            isLoggedIn: true,
            isLoading: false,
            isSuccess: true,
            loginResponse: null,
            loginErrorResponse:null,
        },
        created() {
            console.log('Created..');
        },
        methods: {
            login() {
                this.isLoading=true;
                console.log('Login metodu tetiklendi,api çağrılacak..');

                axios.get('https://localhost:5001/weatherforecast')
                        .then(response =>
                        {
                            
                            console.log('Başarılı sonuçlandı.');
                            console.log(response.data.isSuccess);
                            console.log(response.data.requestId);
                            console.log(response.data.data.token);
                            console.log(response.data.data.name);
                            console.log(response.data.data.surname);
                            console.log(response.data.data.requestTime);
                            console.log(response.data.data.responseTime);
                            this.isSuccess = true;
                  
                        })
                        .catch(error =>
                        {
                            console.log(error);
                            this.isSuccess = false;
                            this.errorMessage = error;
                        });


                console.log('Login metodu tetiklendi,api bitti.Error Message:' + this.errorMessage);
                this.isLoading= false;

          
            }


        }

    }


    )
});