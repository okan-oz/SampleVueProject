﻿window.addEventListener('load', () => {
    new Vue({

        el: '#app',
        data: {
            errorResponseMessage: 'Hata mesajı',
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

          
            },
            async login2() {
                this.isLoading = true;
                console.log('Login2 metodu tetiklendi,api çağrılacak..');

                try {
                    const response = await axios.get('https://localhost:5001/weatherforecast');
                    this.isSuccess = true;
                    console.log(response.data.isSuccess);
                    console.log(response.data.requestId);
                    console.log(response.data.data.token);
                    console.log(response.data.data.name);
                    console.log(response.data.data.surname);
                    console.log(response.data.data.requestTime);
                    console.log(response.data.data.responseTime);
                    console.log('Servis çağrımı tamamlandı.Success.');
                }
                catch (errorResponse) {
                    this.isSuccess = false;
                    this.isLoading = false;

                    if (errorResponse.response.data.error.showUser) {

                        this.errorResponseMessage = errorResponse.response.data.error.errorMessage;
                    }
                    else {
                        this.errorResponseMessage="Beklemediğimiz bir hata alındı.Daha sonra tekrar deneyiniz."
                    }

                    console.log('Servis çağrımı tamamlandı.Fail.');
            
                }


            }


        }

    }


    )
});