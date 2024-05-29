<template>
    <div class="container d-flex justify-content-center align-items-center" style="height: 100vh;">
        <!-- Section: Design Block -->
        <section class="background-radial-gradient overflow-hidden">
            <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div class="row gx-lg-5 align-items-center mb-5">
                    <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
                        <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
                            <span style="color: hsl(189, 81%, 30%)">TAX CONTROL</span>
                        </h1>
                        <p class="mb-4 opacity-70" style="color: hsl(218, 81%, 85%)">
                            TAX CONTROL propose une solution complète pour simplifier la sélection des dossiers à examiner, idéale pour les administrations fiscales. Découvrez comment TAX CONTROL facilite la sélection en quelques clics !
                        </p>
                    </div>

                    <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
                        <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

                        <div class="card bg-glass">
                            <div class="card-body px-4 py-5 px-md-5">
                                <form @submit.prevent="login">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <img class="img-fluid" src="../assets/logo.png" alt="logo" style="max-width: 100px; max-height: 100px;">
                                        <img class="img-fluid" src="../assets/logo1.png" alt="logo" style="max-width: 100px; max-height: 100px;">
                                    </div>

                                    <br />
                                    <!-- Email input -->
                                    <div class="form-outline mb-4">
                                        <input type="email" id="email" v-model="email" class="form-control" required />
                                        <label class="form-label" for="email">Nom D'utilisateur</label>
                                    </div>

                                    <!-- Password input -->
                                    <div class="form-outline mb-4">
                                        <input type="password" id="password" v-model="password" class="form-control" required />
                                        <label class="form-label" for="password">Mot De Passe</label>
                                    </div>

                                    <!-- Submit button -->
                                    <button type="submit" class="btn btn-primary btn-block mb-4" >Login</button>
                                    <p class="mb-5 pb-lg-2" style="color: #393f81;">Vous n’avez pas encore <a href="/sign-up" style="color: #393f81;">créé votre compte</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Section: Design Block -->
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            // Here you would typically check the credentials or call an API
            // If login is successful, navigate to Home
            this.$router.push({ name: 'Home' });
        },
    },
}
</script>

<style>
.background-radial-gradient {
    background-color: hsl(218, 41%, 15%);
    background-image: radial-gradient(650px circle at 0% 0%, hsl(218, 41%, 35%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%),
                      radial-gradient(1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%);
}

#radius-shape-1 {
    height: 220px;
    width: 220px;
    top: -60px;
    left: -130px;
    background: radial-gradient(#187181, #0D99B2);
    overflow: hidden;
}

#radius-shape-2 {
    border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
    bottom: -60px;
    right: -110px;
    width: 300px;
    height: 300px;
    background: radial-gradient(#187181, #0D99B2);
    overflow: hidden;
}

.bg-glass {
    background-color: hsla(0, 0%, 100%, 0.9) !important;
    backdrop-filter: saturate(200%) blur(25px);
}
</style>
