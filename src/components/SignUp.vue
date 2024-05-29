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
                TAX CONTROL propose une solution complète pour simplifier la sélection des dossiers à
                examiner, idéale pour les administrations fiscales. Découvrez comment TAX CONTROL facilite
                la sélection en quelques clics !
              </p>
            </div>
  
            <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
  
              <div class="card bg-glass">
                <div class="card-body px-4 py-5 px-md-5">
                  <form @submit.prevent="signup">
                    <div class="text-center">
                      <img class="logo" src="../assets/logo.png" alt="logo">
                    </div>
                    <br />
                    <!-- full_name input -->
                    <div class="form-outline mb-4">
                      <input type="text" id="full_name" v-model="full_name" class="form-control" required />
                      <label class="form-label" for="full_name">Full name</label>
                    </div>
                    <!-- Email input -->
                    <div class="form-outline mb-4">
                      <input type="email" id="email" v-model="email" class="form-control" required />
                      <label class="form-label" for="email">Email address</label>
                    </div>
  
                    <!-- Password input -->
                    <div class="form-outline mb-4">
                      <input type="password" id="password" v-model="password" class="form-control" required />
                      <label class="form-label" for="password">Password</label>
                    </div>
  
                    <!-- Checkbox -->
                    <div class="form-check d-flex justify-content-center mb-4">
                      <input v-model="terms" class="form-check-input me-2" type="checkbox" value="true" id="form2Example33" />
                      <label class="form-check-label" for="form2Example33">
                        J'ai pris connaissance et J'accepte <a href="#" @click.prevent="showModal = true">les termes et les conditions</a>
                      </label>
                    </div>
                    <!-- Submit button -->
                    <button type="submit" class="btn btn-primary btn-block mb-4" :disabled="!terms">Sign Up</button>
                    <p class="mb-5 pb-lg-2" style="color: #393f81; line-height: 5;">
                      Vous avez encore <a href="/Login" style="color: #393f81;">connecter votre compte</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->
  
      <Modal :show="showModal" @close="showModal = false" title="Conditions Générales d'Utilisation de la Plateforme TAXCONTROL">
        <p>
1. Introduction
Les présentes conditions générales d'utilisation (CGU) régissent l'accès et l'utilisation de la plateforme TAXCONTROL (ci-après dénommée "la Plateforme"). En accédant à la Plateforme, vous acceptez d'être lié par ces CGU.
<br>
2. Accès à la Plateforme
2.1 Inscription et Compte Utilisateur
Pour utiliser les services de la Plateforme, l'utilisateur doit créer un compte en fournissant des informations personnelles exactes et complètes, telles que le nom, l'adresse e-mail et un mot de passe sécurisé.
2.2 Sécurité du Compte
L'utilisateur est responsable de la confidentialité de ses identifiants de connexion et de toutes les activités effectuées sous son compte. Toute utilisation non autorisée de votre compte doit être signalée immédiatement à TAXCONTROL.
<br>
3. Utilisation des Services
3.1 Description des Services
La Plateforme offre divers services liés à la gestion fiscale, incluant l'analyse de dossiers fiscaux, la génération de rapports et l'évaluation des critères de contrôle fiscal.
3.2 Soumission des Données
L'utilisateur doit fournir des données précises et complètes pour l'analyse fiscale. La soumission de données incorrectes ou incomplètes peut entraîner des résultats erronés ou le refus de prestation de services.
<br>
4. Obligations de l'Utilisateur
4.1 Conformité aux Lois
L'utilisateur s'engage à utiliser la Plateforme conformément à toutes les lois et réglementations applicables.
4.2 Utilisation Éthique
L'utilisateur ne doit pas utiliser la Plateforme pour des activités illégales, frauduleuses ou nuisibles.
<br>
5. Droits et Responsabilités de TAXCONTROL
5.1 Modification des Services
TAXCONTROL se réserve le droit de modifier ou d'interrompre, temporairement ou définitivement, les services de la Plateforme avec ou sans préavis.
5.2 Sécurité des Données
TAXCONTROL met en œuvre des mesures de sécurité pour protéger les données des utilisateurs, mais ne peut garantir une sécurité absolue en cas de cyberattaques ou de failles de sécurité imprévues.
<br>
6. Propriété Intellectuelle
6.1 Contenu de la Plateforme
Tous les contenus de la Plateforme, y compris les textes, graphiques, logos, et logiciels, sont la propriété de TAXCONTROL et sont protégés par les lois sur la propriété intellectuelle.
6.2 Licence d'Utilisation
TAXCONTROL accorde à l'utilisateur une licence limitée, non exclusive et non transférable pour accéder et utiliser la Plateforme à des fins personnelles ou professionnelles conformément aux présentes CGU.
<br>
7. Limitation de Responsabilité
7.1 Exactitude des Informations
TAXCONTROL ne garantit pas que les informations fournies sur la Plateforme soient exactes, complètes ou à jour. L'utilisateur utilise ces informations à ses propres risques.
7.2 Dommages
TAXCONTROL ne sera en aucun cas responsable des dommages directs, indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation ou de l'incapacité à utiliser la Plateforme.
<br>
8. Résiliation
TAXCONTROL se réserve le droit de suspendre ou de résilier l'accès de l'utilisateur à la Plateforme en cas de violation des présentes CGU.
<br>
9. Modifications des CGU
TAXCONTROL peut modifier les présentes CGU à tout moment. Les modifications entreront en vigueur dès leur publication sur la Plateforme. Il est de la responsabilité de l'utilisateur de consulter régulièrement les CGU.
<br>
10. Contact
Pour toute question ou réclamation concernant les présentes CGU, veuillez contacter TAXCONTROL à l'adresse suivante : support@taxcontrol.com.
<br>
En utilisant la Plateforme, vous reconnaissez avoir lu, compris et accepté les présentes conditions générales d'utilisation.</p>
        <!-- Add your terms and conditions content here -->
      </Modal>
    </div>
  </template>
  
  <script>
  import Modal from './Modal.vue'
  
  export default {
    name: 'SignUp',
    components: {
      Modal
    },
    data() {
      return {
        full_name: '',
        email: '',
        password: '',
        terms: false,
        showModal: false
      }
    },
    methods: {
   signup() {
    this.$router.push({ name: 'Home' });
  }
},
    mounted() {
    },
  }
  </script>
  
  <style>
  .background-radial-gradient {
    background-color: hsl(218, 41%, 15%);
    background-image: radial-gradient(650px circle at 0% 0%,
        hsl(218, 41%, 35%) 15%,
        hsl(218, 41%, 30%) 35%,
        hsl(218, 41%, 20%) 75%,
        hsl(218, 41%, 19%) 80%,
        transparent 100%),
      radial-gradient(1250px circle at 100% 100%,
        hsl(218, 41%, 45%) 15%,
        hsl(218, 41%, 30%) 35%,
        hsl(218, 41%, 20%) 75%,
        hsl(218, 41%, 19%) 80%,
        transparent 100%);
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
  