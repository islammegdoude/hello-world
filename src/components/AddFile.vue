<template>
    <div>
        <Header></Header>
        <div>
            <!-- Your existing template code here -->
            <div class="alert alert-success mt-3" v-if="showSuccessAlert">
                Success! Your form has been submitted.
            </div>
        </div>
        <div id="container" class="container mt-5 ">
            <div class="progress px-1 " style="height: 3px;">
                <div class="progress-bar" :style="{ width: progressBarWidth }" role="progressbar" aria-valuenow="0"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="step-container d-flex justify-content-between">
                <div v-for="step in 17" :key="step" class="step-circle">{{ step - 1 }}</div>
            </div>

            <form id="multi-step-form">
                <div v-for="step in 17" :key="step" class="step" :class="'step-' + step" v-show="currentStep === step">

                    <!-- ******************************************************** LES DONNÉES DU CONTRIBUABLE ************************************************ -->
                    <div v-if="step === 1">
                        <h3>LES DONNÉES DU CONTRIBUABLE</h3>
                        <div class="card m-3" style="border-radius: 15px;">
                            <div class="card-body">

                                <div class="row align-items-center pt-4 pb-3">
                                    <div class="col-md-3 ps-5">
                                        <h6 class="mb-0">Le NIF</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <input v-model="NIF" type="text" @keypress="onlyNumbers" @blur="validateNIF"
                                            :class="{ 'is-invalid': NIFError }" class="form-control form-control-lg"
                                            maxlength="15" required />
                                        <span v-if="NIFError" class="error-message">{{ NIFError }}</span>
                                    </div>
                                </div>

                                <hr class="mx-n3">

                                <div class="row align-items-center py-3">
                                    <div class="col-md-3 ps-5">
                                        <h6 class="mb-0">Type de personne</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <div class="row">
                                            <div class="col-auto">
                                                <input class="form-check-input" type="radio" name="type_de_personne"
                                                    id="morale" value="morale" v-model="type_de_personne" checked />
                                                <label class="form-check-label" for="morale">morale</label>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input" type="radio" v-model="type_de_personne"
                                                    name="type_de_personne" id="physique" value="physique" />
                                                <label class="form-check-label" for="physique">physique</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr class="mx-n3">

                                <div class="row align-items-center pt-4 pb-3">
                                    <div class="col-md-3 ps-5">
                                        <h6 class="mb-0">L’activité</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <input type="text" v-model="activite" @blur="validateActivite"
                                            :class="{ 'is-invalid': ActiviteError }"
                                            class="form-control form-control-lg" required />
                                        <span v-if="ActiviteError" class="error-message">{{ ActiviteError }}</span>
                                    </div>
                                </div>

                                <hr class="mx-n3">

                                <div class="row align-items-center py-3">
                                    <div class="col-md-3 ps-5">
                                        <h6 class="mb-0">La date de début de l’activité</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <input type="date" v-model="date" @blur="validateDate"
                                            :class="{ 'is-invalid': dateError }" class="form-control" required />
                                        <span v-if="dateError" class="error-message">{{ dateError }}</span>
                                    </div>
                                </div>

                                <hr class="mx-n3">

                                <div class="row align-items-center pt-4 pb-3">
                                    <div class="col-md-3 ps-5">
                                        <h6 class="mb-0">L’adresse</h6>
                                    </div>
                                    <div class="col-md-9 pe-5">
                                        <input type="text" v-model="adresse" @blur="validateAdresse"
                                            :class="{ 'is-invalid': AdresseError }" class="form-control form-control-lg"
                                            required />
                                        <span v-if="AdresseError" class="error-message">{{ AdresseError }}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- ********************************************************* LES CRITÈRES ************************************************************* -->
                    <!-- ********************************************************    1    ******************************************************** -->
                    <div v-if="step === 2">
                        <!-- title 1 -->
                        <h3>1. Les achats recueillies sont > les achats déclarées </h3>
                        <div class="row align-items-center pt-4 pb-3">
                            <!-- card  -->
                            <div class="row">
                                <!-- year 1 -->
                                <div class="col">
                                    <div id="C1Year1T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C1Year1T">{{ resturants.oldYear1 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C1Year1"
                                                        name="C1Year1" id="C1Year1oui" value="oui" />
                                                    <label class="form-check-label" for="C1Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C1Year1"
                                                        name="C1Year1" id="C1Year1non" value="non" />
                                                    <label class="form-check-label" for="C1Year1non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 2 -->
                                <div class="col">
                                    <div id="C1Year2T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C1Year2T">{{ resturants.oldYear2 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C1Year2"
                                                        name="C1Year2" id="C1Year2oui" value="oui" />
                                                    <label class="form-check-label" for="C1Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C1Year2"
                                                        name="C1Year2" id="C1Year2non" value="non" />
                                                    <label class="form-check-label" for="C1Year2non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 3 -->
                                <div class="col">
                                    <div id="C1Year3T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C1Year3T">{{ resturants.oldYear3 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C1Year3"
                                                        name="C1Year3" id="C1Year3oui" value="oui" />
                                                    <label class="form-check-label" for="C1Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C1Year3"
                                                        name="C1Year3" id="C1Year3non" value="non" />
                                                    <label class="form-check-label" for="C1Year3non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 4 -->
                                <div class="col">
                                    <div id="C1Year4T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C1Year4T">{{ resturants.oldYear4 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C1Year4"
                                                        name="C1Year4" id="C1Year4oui" value="oui" />
                                                    <label class="form-check-label" for="C1Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C1Year4"
                                                        name="C1Year4" id="C1Year4non" value="non" />
                                                    <label class="form-check-label" for="C1Year4non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ********************************************************    2    ******************************************************** -->
                    <div v-if="step === 3">
                        <!-- title 2 -->
                        <h3>2. Changement de la forme juridique</h3>
                        <div class="row align-items-center pt-4 pb-3">
                            <!-- card  -->
                            <div class="row">
                                <!-- year 1 -->
                                <div class="col">
                                    <div id="C2Year1T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C2Year1T">{{ resturants.oldYear1 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C2Year1"
                                                        name="C2Year1" id="C2Year1oui" value="oui" />
                                                    <label class="form-check-label" for="C2Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C2Year1"
                                                        name="C2Year1" id="C2Year1non" value="non" />
                                                    <label class="form-check-label" for="C2Year1non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 2 -->
                                <div class="col">
                                    <div id="C2YearT" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C2YearT">{{ resturants.oldYear2 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C2Year2"
                                                        name="C2Year2" id="C2Year2oui" value="oui" />
                                                    <label class="form-check-label" for="C2Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C2Year2"
                                                        name="C2Year2" id="C2Year2non" value="non" />
                                                    <label class="form-check-label" for="C2Year2non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 3 -->
                                <div class="col">
                                    <div id="C2Year3T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C2Year3T">{{ resturants.oldYear3 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C2Year3"
                                                        name="C2Year3" id="C2Year3oui" value="oui" />
                                                    <label class="form-check-label" for="C2Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C2Year3"
                                                        name="C2Year3" id="C2Year3non" value="non" />
                                                    <label class="form-check-label" for="C2Year3non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 4 -->
                                <div class="col">
                                    <div id="C2Year4T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C2Year4T">{{ resturants.oldYear4 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C2Year4"
                                                        name="C2Year4" id="C2Year4oui" value="oui" />
                                                    <label class="form-check-label" for="C2Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C2Year4"
                                                        name="C2Year4" id="C2Year4non" value="non" />
                                                    <label class="form-check-label" for="C2Year4non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ********************************************************    3    ******************************************************** -->
                    <div v-if="step === 4">
                        <!-- title 1 -->
                        <h3>3. les déclarations et les paiements sont fait régulièrement ?</h3>
                        <div class="row align-items-center pt-4 pb-3">
                            <!-- card  -->
                            <div class="row">
                                <!-- year 1 -->
                                <div class="col">
                                    <div id="C3Year1T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C3Year1T">{{ resturants.oldYear1 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C3Year1"
                                                        name="C3Year1" id="C3Year1oui" value="oui" />
                                                    <label class="form-check-label" for="C3Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C3Year1"
                                                        name="C3Year1" id="C3Year1non" value="non" />
                                                    <label class="form-check-label" for="C3Year1non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 2 -->
                                <div class="col">
                                    <div id="C3Year2T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C3Year2T">{{ resturants.oldYear2 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C3Year2"
                                                        name="C3Year2" id="C3Year2oui" value="oui" />
                                                    <label class="form-check-label" for="C3Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C3Year2"
                                                        name="C3Year2" id="C3Year2non" value="non" />
                                                    <label class="form-check-label" for="C3Year2non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 3 -->
                                <div class="col">
                                    <div id="C3Year3T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C3Year3T">{{ resturants.oldYear3 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C3Year3"
                                                        name="C3Year3" id="C3Year3oui" value="oui" />
                                                    <label class="form-check-label" for="C3Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C3Year3"
                                                        name="C3Year3" id="C3Year3non" value="non" />
                                                    <label class="form-check-label" for="C3Year3non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 4 -->
                                <div class="col">
                                    <div id="C3Year4T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C3Year4T">{{ resturants.oldYear4 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C3Year4"
                                                        name="C3Year4" id="C3Year4oui" value="oui" />
                                                    <label class="form-check-label" for="C3Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C3Year4"
                                                        name="C3Year4" id="C3Year4non" value="non" />
                                                    <label class="form-check-label" for="C3Year4non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ********************************************************    4    ******************************************************** -->
                    <div v-if="step === 5">
                        <!-- title 4 -->
                        <h3>4. Détournement avéré de l’objet des avantages fiscaux octroyés et le non respect des
                            engagements y afférentes selon les PVs de constat ?</h3>
                        <div class="row align-items-center pt-4 pb-3">
                            <!-- card  -->
                            <div class="row">
                                <!-- year 1 -->
                                <div class="col">
                                    <div id="C4Year1T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C4Year1T">{{ resturants.oldYear1 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C4Year1"
                                                        name="C4Year1" id="C4Year1oui" value="oui" />
                                                    <label class="form-check-label" for="C4Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C4Year1"
                                                        name="C4Year1" id="C4Year1non" value="non" />
                                                    <label class="form-check-label" for="C4Year1non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 2 -->
                                <div class="col">
                                    <div id="C4Year2T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C4Year2T">{{ resturants.oldYear2 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C4Year2"
                                                        name="C4Year2" id="C4Year2oui" value="oui" />
                                                    <label class="form-check-label" for="C4Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C4Year2"
                                                        name="C4Year2" id="C4Year2non" value="non" />
                                                    <label class="form-check-label" for="C4Year2non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 3 -->
                                <div class="col">
                                    <div id="C4Year3T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C4Year3T">{{ resturants.oldYear3 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C4Year3"
                                                        name="C4Year3" id="C4Year3oui" value="oui" />
                                                    <label class="form-check-label" for="C4Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C4Year3"
                                                        name="C4Year3" id="C4Year3non" value="non" />
                                                    <label class="form-check-label" for="C4Year3non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 4 -->
                                <div class="col">
                                    <div id="C4Year4T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C4Year4T">{{ resturants.oldYear4 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C4Year4"
                                                        name="C4Year4" id="C4Year4oui" value="oui" />
                                                    <label class="form-check-label" for="C4Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C4Year4"
                                                        name="C4Year4" id="C4Year4non" value="non" />
                                                    <label class="form-check-label" for="C4Year4non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ********************************************************    5    ******************************************************** -->
                    <div v-if="step === 6">
                        <!-- title 5 -->
                        <h3>5. Le respect des engagements de réinvestissement des bénéfices taxés au taux réduit ?</h3>
                        <div class="row align-items-center pt-4 pb-3">
                            <!-- card  -->
                            <div class="row">
                                <!-- year 1 -->
                                <div class="col">
                                    <div id="C5Year1T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C5Year1T">{{ resturants.oldYear1 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C5Year1"
                                                        name="C5Year1" id="C5Year1oui" value="oui" />
                                                    <label class="form-check-label" for="C5Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C5Year1"
                                                        name="C5Year1" id="C5Year1non" value="non" />
                                                    <label class="form-check-label" for="C5Year1non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 2 -->
                                <div class="col">
                                    <div id="C5Year2T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C5Year2T">{{ resturants.oldYear2 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C5Year2"
                                                        name="C5Year2" id="C5Year2oui" value="oui" />
                                                    <label class="form-check-label" for="C5Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C5Year2"
                                                        name="C5Year2" id="C5Year2non" value="non" />
                                                    <label class="form-check-label" for="C5Year2non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 3 -->
                                <div class="col">
                                    <div id="C5Year3T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C5Year3T">{{ resturants.oldYear3 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C5Year3"
                                                        name="C5Year3" id="C5Year3oui" value="oui" />
                                                    <label class="form-check-label" for="C5Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C5Year3"
                                                        name="C5Year3" id="C5Year3non" value="non" />
                                                    <label class="form-check-label" for="C5Year3non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 4 -->
                                <div class="col">
                                    <div id="C5Year4T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C5Year4T">{{ resturants.oldYear4 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C5Year4"
                                                        name="C5Year4" id="C5Year4oui" value="oui" />
                                                    <label class="form-check-label" for="C5Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C5Year4"
                                                        name="C5Year4" id="C5Year4non" value="non" />
                                                    <label class="form-check-label" for="C5Year4non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ********************************************************    6    ******************************************************** -->
                    <div v-if="step === 7">
                        <!-- title 6 -->
                        <h3>6. Les provisions paraissant douteuses ?</h3>
                        <div class="row align-items-center pt-4 pb-3">
                            <!-- card  -->
                            <div class="row">
                                <!-- year 1 -->
                                <div class="col">
                                    <div id="C6Year1T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C6Year1T">{{ resturants.oldYear1 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C6Year1"
                                                        name="C6Year1" id="C6Year1oui" value="oui" />
                                                    <label class="form-check-label" for="C6Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C6Year1"
                                                        name="C6Year1" id="C6Year1non" value="non" />
                                                    <label class="form-check-label" for="C6Year1non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 2 -->
                                <div class="col">
                                    <div id="C6Year2T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C6Year2T">{{ resturants.oldYear2 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C6Year2"
                                                        name="C6Year2" id="C6Year2oui" value="oui" />
                                                    <label class="form-check-label" for="C6Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C6Year2"
                                                        name="C6Year2" id="C6Year2non" value="non" />
                                                    <label class="form-check-label" for="C6Year2non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 3 -->
                                <div class="col">
                                    <div id="C6Year3T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C6Year3T">{{ resturants.oldYear3 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C6Year3"
                                                        name="C6Year3" id="C6Year3oui" value="oui" />
                                                    <label class="form-check-label" for="C6Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C6Year3"
                                                        name="C6Year3" id="C6Year3non" value="non" />
                                                    <label class="form-check-label" for="C6Year3non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 4 -->
                                <div class="col">
                                    <div id="C6Year4T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C6Year4T">{{ resturants.oldYear4 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C6Year4"
                                                        name="C6Year4" id="C6Year4oui" value="oui" />
                                                    <label class="form-check-label" for="C6Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C6Year4"
                                                        name="C6Year4" id="C6Year4non" value="non" />
                                                    <label class="form-check-label" for="C6Year4non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ********************************************************    7    ******************************************************** -->
                    <div v-if="step === 8">
                        <!-- title 7 -->
                        <h3>7. l’importance de la marge bénéficiaire brute MBB = CA/ les achats</h3>
                        <div class="row align-items-center pt-4 pb-3">
                            <!-- card  -->
                            <div class="row">
                                <!-- year 1 -->
                                <div class="col">
                                    <div id="C7Year1T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C7Year1T">{{ resturants.oldYear1 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C7Year1"
                                                        name="C7Year1" id="C7Year1oui" value="oui" />
                                                    <label class="form-check-label" for="C7Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C7Year1"
                                                        name="C7Year1" id="C7Year1non" value="non" />
                                                    <label class="form-check-label" for="C7Year1non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 2 -->
                                <div class="col">
                                    <div id="C7Year2T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C7Year2T">{{ resturants.oldYear2 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C7Year2"
                                                        name="C7Year2" id="C7Year2oui" value="oui" />
                                                    <label class="form-check-label" for="C7Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C7Year2"
                                                        name="C7Year2" id="C7Year2non" value="non" />
                                                    <label class="form-check-label" for="C7Year2non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 3 -->
                                <div class="col">
                                    <div id="C7Year3T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C7Year3T">{{ resturants.oldYear3 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C7Year3"
                                                        name="C7Year3" id="C7Year3oui" value="oui" />
                                                    <label class="form-check-label" for="C7Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C7Year3"
                                                        name="C7Year3" id="C7Year3non" value="non" />
                                                    <label class="form-check-label" for="C7Year3non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 4 -->
                                <div class="col">
                                    <div id="C7Year4T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C7Year4T">{{ resturants.oldYear4 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C7Year4"
                                                        name="C7Year4" id="C7Year4oui" value="oui" />
                                                    <label class="form-check-label" for="C7Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C7Year4"
                                                        name="C7Year4" id="C7Year4non" value="non" />
                                                    <label class="form-check-label" for="C7Year4non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ********************************************************    8    ******************************************************** -->
                    <div v-if="step === 9">
                        <div class="row">
                            <!-- title 8 -->
                            <h3>8. Les charges de l’année</h3>
                        </div>
                        <div class="row align-items-center pt-4 pb-3">
                            <!-- card  -->
                            <div class="row">
                                <!-- year 1 -->
                                <div class="col">
                                    <div id="C8Year1T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C8Year1T">{{ resturants.oldYear1 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row-md-3">
                                                <input type="text" class="form-control form-control-lg"
                                                    v-model="C8Year1" />
                                            </div>
                                        </div>
                                        <div class="row mx-auto">
                                            <div class="col py-2">
                                                <input class="form-check-input" type="checkbox" value="oui"
                                                    id="C8Year1Exagere" v-model="C8Year1Exagere" />
                                                <label class="form-check-label" for="C8Year1Exagere"> il y a une
                                                    exagération</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- year 2 -->
                                <div class="col">
                                    <div id="C8Year2T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C8Year2T">{{ resturants.oldYear2 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row-md-3">
                                                <input type="text" class="form-control form-control-lg"
                                                    v-model="C8Year2" />
                                            </div>
                                        </div>
                                        <div class="row mx-auto">
                                            <div class="col py-2">
                                                <input class="form-check-input" type="checkbox" value="oui"
                                                    id="C8Year2Exagere" v-model="C8Year2Exagere" />
                                                <label class="form-check-label" for="C8Year2Exagere"> il y a une
                                                    exagération</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- year 3 -->
                                <div class="col">
                                    <div id="C8Year3T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C8Year3T">{{ resturants.oldYear3 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row-md-3">
                                                <input type="text" class="form-control form-control-lg"
                                                    v-model="C8Year3" />
                                            </div>
                                        </div>
                                        <div class="row mx-auto">
                                            <div class="col py-2">
                                                <input class="form-check-input" type="checkbox" value="oui"
                                                    id="C8Year3Exagere" v-model="C8Year3Exagere" />
                                                <label class="form-check-label" for="C8Year3Exagere"> il y a une
                                                    exagération</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- year 4 -->
                                <div class="col">
                                    <div id="C8Year4T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C8Year4T">{{ resturants.oldYear4 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row-md-3">
                                                <input type="text" class="form-control form-control-lg"
                                                    v-model="C8Year4" />
                                            </div>
                                        </div>
                                        <div class="row mx-auto">
                                            <div class="col py-2">
                                                <input class="form-check-input" type="checkbox" value="oui"
                                                    id="C8Year4Exagere" v-model="C8Year4Exagere" />
                                                <label class="form-check-label" for="C8Year4Exagere"> il y a une
                                                    exagération</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ********************************************************    9    ******************************************************** -->
                    <div v-if="step === 10">
                        <!-- title 9 -->
                        <h3>9. Affaire coordonnée ou renseignements extérieures : </h3>
                        <div class="row align-items-center pt-4 pb-3">
                            <!-- card  -->
                            <div class="col-md-9 pe-5">
                                <input class="form-check-input " type="checkbox" value="oui" id="C9Oui" v-model="C9" />
                                <label class="form-check-label " for="C9Oui">Oui, L'affaire est-elle coordonnée ou
                                    renseignements extérieures.</label>
                                <!-- <input class="form-check-input " type="checkbox" value="non" id="C9Oui" v-model="C9"/>
                                <label class="form-check-label " for="C9Oui">Non</label> -->
                            </div>
                        </div>

                    </div>
                    <!-- ********************************************************    10    ******************************************************** -->
                    <div v-if="step === 11">
                        <!-- title 10 -->
                        <h3> 10. les ventes recueillis > les ventes déclarées</h3>
                        <div class="row align-items-center pt-4 pb-3">
                            <!-- card  -->
                            <div class="row">
                                <!-- year 1 -->
                                <div class="col">
                                    <div id="C10Year1T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C10Year1T">{{ resturants.oldYear1 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C10Year1"
                                                        name="C10Year1" id="C10Year1oui" value="oui" />
                                                    <label class="form-check-label" for="C10Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C10Year1"
                                                        name="C10Year1" id="C10Year1non" value="non" />
                                                    <label class="form-check-label" for="C10Year1non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 2 -->
                                <div class="col">
                                    <div id="C10Year2T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C10Year2T">{{ resturants.oldYear2 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C10Year2"
                                                        name="C10Year2" id="C10Year2oui" value="oui" />
                                                    <label class="form-check-label" for="C10Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C10Year2"
                                                        name="C10Year2" id="C10Year2non" value="non" />
                                                    <label class="form-check-label" for="C10Year2non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 3 -->
                                <div class="col">
                                    <div id="C10Year3T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C10Year3T">{{ resturants.oldYear3 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C10Year3"
                                                        name="C10Year3" id="C10Year3oui" value="oui" />
                                                    <label class="form-check-label" for="C10Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C10Year3"
                                                        name="C10Year3" id="C10Year3non" value="non" />
                                                    <label class="form-check-label" for="C10Year3non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 4 -->
                                <div class="col">
                                    <div id="C10Year4T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C10Year4T">{{ resturants.oldYear4 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C10Year4"
                                                        name="C10Year4" id="C10Year4oui" value="oui" />
                                                    <label class="form-check-label" for="C10Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C1Year4"
                                                        name="C10Year4" id="C10Year4non" value="non" />
                                                    <label class="form-check-label" for="C10Year4non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ********************************************************    11    ******************************************************** -->
                    <div v-if="step === 12">
                        <!-- title 11 -->
                        <h3>11. d’après le bilan</h3>
                        <div class="col align-items-center pt-4 pb-3">
                            <!-- card 1 -->
                            <div class="row m-2">
                                <div id="C11P1" class="card" style="border-radius: 15px;">
                                    <div class="card-header text-center">
                                        <label for="C11P1">Le total de l’actif du bilan</label>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <!-- year 1 -->
                                            <div class="col">
                                                <div id="C11P1Year1T" class="card" style="border-radius: 15px;">
                                                    <div class="card-header text-center">
                                                        <label for="C11P1Year1T">{{ resturants.oldYear1
                                                            }}</label>
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="row-md-3">
                                                            <input type="text" class="form-control form-control-lg"
                                                                v-model="C11P1Year1" />
                                                        </div>
                                                    </div>
                                                    <div class="row mx-auto">
                                                        <div class="col py-2">
                                                            <input class="form-check-input" type="checkbox" value="oui"
                                                                id="C11P1Year1Min" v-model="C11P1Year1Min" />
                                                            <label class="form-check-label" for="C11P1Year1Min"> il y a
                                                                une
                                                                Minoration
                                                                d’actif</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- year 2 -->
                                            <div class="col">
                                                <div id="C11P1Year2" class="card" style="border-radius: 15px;">
                                                    <div class="card-header text-center">
                                                        <label for="C11P1Year2">{{ resturants.oldYear2
                                                            }}</label>
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="row-md-3">
                                                            <input type="text" class="form-control form-control-lg"
                                                                v-model="C11P1Year2" />
                                                        </div>
                                                    </div>
                                                    <div class="row mx-auto">
                                                        <div class="col py-2">
                                                            <input class="form-check-input" type="checkbox" value="oui"
                                                                id="C11P1Year2Min" v-model="C11P1Year2Min" />
                                                            <label class="form-check-label" for="C11P1Year2Min"> il y a
                                                                une
                                                                Minoration
                                                                d’actif</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- year 3 -->
                                            <div class="col">
                                                <div id="C11P1Year3" class="card" style="border-radius: 15px;">
                                                    <div class="card-header text-center">
                                                        <label for="C11P1Year3">{{ resturants.oldYear3
                                                            }}</label>
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="row-md-3">
                                                            <input type="text" class="form-control form-control-lg"
                                                                v-model="C11P1Year3" />
                                                        </div>
                                                    </div>
                                                    <div class="row mx-auto">
                                                        <div class="col py-2">
                                                            <input class="form-check-input" type="checkbox" value="oui"
                                                                id="C11P1Year3Min" v-model="C11P1Year3Min" />
                                                            <label class="form-check-label" for="C11P1Year3Min"> il y a
                                                                une
                                                                Minoration
                                                                d’actif</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- year 4 -->
                                            <div class="col">
                                                <div id="C11P1Year4" class="card" style="border-radius: 15px;">
                                                    <div class="card-header text-center">
                                                        <label for="C11P1Year4">{{ resturants.oldYear4
                                                            }}</label>
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="row-md-3">
                                                            <input type="text" class="form-control form-control-lg"
                                                                v-model="C11P1Year4" />
                                                        </div>
                                                    </div>
                                                    <div class="row mx-auto">
                                                        <div class="col py-2">
                                                            <input class="form-check-input" type="checkbox" value="oui"
                                                                id="C11P1Year4Min" v-model="C11P1Year4Min" />
                                                            <label class="form-check-label" for="C11P1Year4Min"> il y a
                                                                une
                                                                Minoration
                                                                d’actif</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- card 2 -->
                            <div class="row m-2">
                                <div id="C11P2" class="card" style="border-radius: 15px;">
                                    <div class="card-header text-center">
                                        <label for="C11P2">Le total du passif du bilan</label>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <!-- year 1 -->
                                            <div class="col">
                                                <div id="C11P2Year1" class="card" style="border-radius: 15px;">
                                                    <div class="card-header text-center">
                                                        <label for="C11P2Year1">{{ resturants.oldYear1
                                                            }}</label>
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="row-md-3">
                                                            <input type="text" class="form-control form-control-lg"
                                                                v-model="C11P2Year1" />
                                                        </div>
                                                    </div>
                                                    <div class="row mx-auto">
                                                        <div class="col py-2">
                                                            <input class="form-check-input" type="checkbox" value="oui"
                                                                id="C11P2Year1Maj" v-model="C11P2Year1Maj" />
                                                            <label class="form-check-label" for="C11P2Year1Maj"> il y a
                                                                une
                                                                Majoration
                                                                du
                                                                passif</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- year 2 -->
                                            <div class="col">
                                                <div id="C11P2Year2" class="card" style="border-radius: 15px;">
                                                    <div class="card-header text-center">
                                                        <label for="C11P2Year2">{{ resturants.oldYear2
                                                            }}</label>
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="row-md-3">
                                                            <input type="text" class="form-control form-control-lg"
                                                                v-model="C11P2Year2" />
                                                        </div>
                                                    </div>
                                                    <div class="row mx-auto">
                                                        <div class="col py-2">
                                                            <input class="form-check-input" type="checkbox" value="oui"
                                                                id="C11P2Year2Maj" v-model="C11P2Year2Maj" />
                                                            <label class="form-check-label" for="C11P2Year2Maj"> il y a
                                                                une
                                                                Majoration
                                                                du
                                                                passif</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- year 3 -->
                                            <div class="col">
                                                <div id="C11P2Year3" class="card" style="border-radius: 15px;">
                                                    <div class="card-header text-center">
                                                        <label for="C11P2Year3">{{ resturants.oldYear3
                                                            }}</label>
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="row-md-3">
                                                            <input type="text" class="form-control form-control-lg"
                                                                v-model="C11P2Year3" />
                                                        </div>
                                                    </div>
                                                    <div class="row mx-auto">
                                                        <div class="col py-2">
                                                            <input class="form-check-input" type="checkbox" value="oui"
                                                                id="C11P2Year3Maj" v-model="C11P2Year3Maj" />
                                                            <label class="form-check-label" for="C11P2Year3Maj"> il y a
                                                                une
                                                                Majoration
                                                                du
                                                                passif</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- year 4 -->
                                            <div class="col">
                                                <div id="C11P2Year4" class="card" style="border-radius: 15px;">
                                                    <div class="card-header text-center">
                                                        <label for="C11P2Year4">{{ resturants.oldYear4
                                                            }}</label>
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="row-md-3">
                                                            <input type="text" class="form-control form-control-lg"
                                                                v-model="C11P2Year4" />
                                                        </div>
                                                    </div>
                                                    <div class="row mx-auto">
                                                        <div class="col py-2">
                                                            <input class="form-check-input" type="checkbox" value="oui"
                                                                id="C11P2Year4Maj" v-model="C11P2Year4Maj" />
                                                            <label class="form-check-label" for="C11P2Year4Maj"> il y a
                                                                une
                                                                Majoration
                                                                du
                                                                passif</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ********************************************************    12    ******************************************************** -->
                    <div v-if="step === 13">
                        <!-- title 13 -->
                        <h3>12. Le résultat fiscal</h3>
                        <div class="row align-items-center pt-4 pb-3">
                            <!-- card  -->
                            <div class="row">
                                <!-- year 1 -->
                                <div class="col">
                                    <div id="C12Year1T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C12Year1T">{{ resturants.oldYear1 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C12Year1"
                                                        name="C12Year1" id="C12Year1oui" value="oui" />
                                                    <label class="form-check-label" for="C12Year1oui">Il y a
                                                        Déficitaire</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C12Year1"
                                                        name="C12Year1" id="C12Year1non" value="non" />
                                                    <label class="form-check-label" for="C12Year1non">il n'y a pas
                                                        Déficitaire</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- year 2 -->
                                <div class="col">
                                    <div id="C12Year2T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C12Year2T">{{ resturants.oldYear2 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C12Year2"
                                                        name="C12Year2" id="C12Year2oui" value="oui" />
                                                    <label class="form-check-label" for="C12Year2oui">Il y a
                                                        Déficitaire</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C12Year2"
                                                        name="C12Year2" id="C12Year2non" value="non" />
                                                    <label class="form-check-label" for="C12Year2non">il n'y a pas
                                                        Déficitaire</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- year 3 -->
                                <div class="col">
                                    <div id="C12Year3T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C12Year3T">{{ resturants.oldYear3 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C12Year3"
                                                        name="C12Year3" id="C12Year3oui" value="oui" />
                                                    <label class="form-check-label" for="C12Year3oui">Il y a
                                                        Déficitaire</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C12Year3"
                                                        name="C12Year3" id="C12Year3non" value="non" />
                                                    <label class="form-check-label" for="C12Year3non">il n'y a pas
                                                        Déficitaire</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- year 4 -->
                                <div class="col">
                                    <div id="C12Year4T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C12Year4T">{{ resturants.oldYear4 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C12Year4"
                                                        name="C12Year4" id="C12Year4oui" value="oui" />
                                                    <label class="form-check-label" for="C12Year4oui">Il y a
                                                        Déficitaire</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C12Year4"
                                                        name="C12Year4" id="C12Year4non" value="non" />
                                                    <label class="form-check-label" for="C12Year4non">il n'y a pas
                                                        Déficitaire</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ********************************************************    13    ******************************************************** -->
                    <div v-if="step === 14">
                        <!-- title 13 -->
                        <h3>13. TVA ( la taxe sur la valeur ajoutée) </h3>
                        <div class="row align-items-center pt-4 pb-3">
                            <!-- card -->
                            <div class="row">
                                <!-- year 1 -->
                                <div class="col">
                                    <div id="C13Year1T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C13Year1T">{{ resturants.oldYear1 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C13Year1"
                                                        name="C13Year1" id="C13Year1oui" value="oui" />
                                                    <label class="form-check-label" for="C13Year1oui">Il y a
                                                        Précompte</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C13Year1"
                                                        name="C13Year1" id="C13Year1non" value="non" />
                                                    <label class="form-check-label" for="C13Year1non">il n'y a pas
                                                        Précompte</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- year 2 -->
                                <div class="col">
                                    <div id="C13Year2T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C13Year2T">{{ resturants.oldYear2 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C13Year2"
                                                        name="C13Year2" id="C13Year2oui" value="oui" />
                                                    <label class="form-check-label" for="C13Year2oui">Il y a
                                                        Précompte</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C13Year2"
                                                        name="C13Year2" id="C13Year2non" value="non" />
                                                    <label class="form-check-label" for="C13Year2non">il n'y a pas
                                                        Précompte</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- year 3 -->
                                <div class="col">
                                    <div id="C13Year3T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C13Year3T">{{ resturants.oldYear3 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C13Year3"
                                                        name="C13Year3" id="C13Year3oui" value="oui" />
                                                    <label class="form-check-label" for="C13Year3oui">Il y a
                                                        Précompte</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C13Year3"
                                                        name="C13Year3" id="C13Year3non" value="non" />
                                                    <label class="form-check-label" for="C13Year3non">il n'y a pas
                                                        Précompte</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- year 4 -->
                                <div class="col">
                                    <div id="C13Year4T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C13Year4T">{{ resturants.oldYear4 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C13Year4"
                                                        name="C13Year4" id="C13Year4oui" value="oui" />
                                                    <label class="form-check-label" for="C13Year4oui">Il y a
                                                        Précompte</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C13Year4"
                                                        name="C13Year4" id="C13Year4non" value="non" />
                                                    <label class="form-check-label" for="C13Year4non">il n'y a pas
                                                        Précompte</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ********************************************************    14    ******************************************************** -->
                    <div v-if="step === 15">
                        <!-- title 14 -->
                        <h3>14. l’importance de la marge bénéficiaire nette : MBN = BS/CA </h3>
                        <div class="row align-items-center pt-4 pb-3">
                            <!-- card  -->
                            <div class="row">
                                <!-- year 1 -->
                                <div class="col">
                                    <div id="C14Year1T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C14Year1T">{{ resturants.oldYear1 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C14Year1"
                                                        name="C14Year1" id="C14Year1oui" value="oui" />
                                                    <label class="form-check-label" for="C14Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C14Year1"
                                                        name="C14Year1" id="C14Year1non" value="non" />
                                                    <label class="form-check-label" for="C14Year1non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 2 -->
                                <div class="col">
                                    <div id="C14Year2T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C14Year2T">{{ resturants.oldYear2 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C14Year2"
                                                        name="C14Year2" id="C14Year2oui" value="oui" />
                                                    <label class="form-check-label" for="C14Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C14Year2"
                                                        name="C14Year2" id="C14Year2non" value="non" />
                                                    <label class="form-check-label" for="C14Year2non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 3 -->
                                <div class="col">
                                    <div id="C14Year3T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C14Year3T">{{ resturants.oldYear3 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C14Year3"
                                                        name="C14Year3" id="C14Year3oui" value="oui" />
                                                    <label class="form-check-label" for="C14Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C14Year3"
                                                        name="C14Year3" id="C14Year3non" value="non" />
                                                    <label class="form-check-label" for="C14Year3non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 4 -->
                                <div class="col">
                                    <div id="C14Year4T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C14Year4T">{{ resturants.oldYear4 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C14Year4"
                                                        name="C14Year4" id="C14Year4oui" value="oui" />
                                                    <label class="form-check-label" for="C14Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C14Year4"
                                                        name="C14Year4" id="C14Year4non" value="non" />
                                                    <label class="form-check-label" for="C14Year4non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ********************************************************    15   ******************************************************** -->
                    <div v-if="step === 16">
                        <!-- title 15 -->
                        <h3>15. Le train de vie est supérieur aux revenus déclarés ?</h3>
                        <div class="row align-items-center pt-4 pb-3">
                            <!-- card  -->
                            <div class="col-md-9 pe-5">
                                <input class="form-check-input " type="checkbox" value="oui" id="C15Oui" v-model="C15" />
                                <label class="form-check-label " for="C15Oui">Oui, Le train de vie est supérieur aux revenus déclarés.</label>
                                <!-- <input class="form-check-input " type="checkbox" value="non" id="C9Oui" v-model="C9"/>
                                <label class="form-check-label " for="C9Oui">Non</label> -->
                            </div>
                        </div>

                    </div>
                    <!-- ********************************************************    16    ******************************************************** -->
                    <div v-if="step === 17">
                        <!-- title 16 -->
                        <h3>16. l’importance de la masse salariale par rapport au CA</h3>
                        <div class="row align-items-center pt-4 pb-3">
                            <!-- card  -->
                            <div class="row">
                                <!-- year 1 -->
                                <div class="col">
                                    <div id="C16Year1T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C16Year1T">{{ resturants.oldYear1 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C16Year1"
                                                        name="C16Year1" id="C16Year1oui" value="oui" />
                                                    <label class="form-check-label" for="C16Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C16Year1"
                                                        name="C16Year1" id="C16Year1non" value="non" />
                                                    <label class="form-check-label" for="C16Year1non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 2 -->
                                <div class="col">
                                    <div id="C16Year2T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C16Year2T">{{ resturants.oldYear2 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C16Year2"
                                                        name="C16Year2" id="C16Year2oui" value="oui" />
                                                    <label class="form-check-label" for="C16Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C16Year2"
                                                        name="C16Year2" id="C16Year2non" value="non" />
                                                    <label class="form-check-label" for="C16Year2non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 3 -->
                                <div class="col">
                                    <div id="C16Year3T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C16Year3T">{{ resturants.oldYear3 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C16Year3"
                                                        name="C16Year3" id="C16Year3oui" value="oui" />
                                                    <label class="form-check-label" for="C16Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C16Year3"
                                                        name="C16Year3" id="C16Year3non" value="non" />
                                                    <label class="form-check-label" for="C16Year3non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- year 4 -->
                                <div class="col">
                                    <div id="C16Year4T" class="card" style="border-radius: 15px;">
                                        <div class="card-header text-center">
                                            <label for="C16Year4T">{{ resturants.oldYear4 }}</label>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C16Year4"
                                                        name="C16Year4" id="C16Year4oui" value="oui" />
                                                    <label class="form-check-label" for="C16Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C16Year4"
                                                        name="C16Year4" id="C16Year4non" value="non" />
                                                    <label class="form-check-label" for="C16Year4non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- ********************************************************    Buttons    ******************************************************** -->
                    <div class="row">
                        <div class="col">
                            <div v-if="step !== 1" class="d-flex justify-content-start">
                                <button type="button" class="btn btn-primary prev-step"
                                    @click="prevStep">Previous</button>
                            </div>
                        </div>
                        <div class="col">
                            <div v-if="step !== 17" class="d-flex justify-content-end">
                                <button type="button" class="btn btn-primary next-step" @click="nextStep">Next</button>
                            </div>
                            <div class="d-flex justify-content-end" v-else>
                                <button type="submit" class="btn btn-success" @click="submitForm">Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    </div>
    <div>
    </div>
</template>
<script>
import Header from './Header.vue';
export default {
    name: 'AddFile',
    components: {
        Header
    },
    data() {
        return {
            NIF: '',
            NIFError: '',
            currentStep: 1,
            progressBarWidth: '0%',
            type_de_personne: 'false',
            date: '',
            dateError: '',
            activite: '',
            ActiviteError: '',
            adresse: '',
            AdresseError: '',
            token: [],
            // C1
            C1Year1: 'false',
            C1Year2: 'false',
            C1Year3: 'false',
            C1Year4: 'false',
            // C2
            C2Year1: 'false',
            C2Year2: 'false',
            C2Year3: 'false',
            C2Year4: 'false',
            // C3
            C3Year1: 'false',
            C3Year2: 'false',
            C3Year3: 'false',
            C3Year4: 'false',
            // C4
            C4Year1: 'false',
            C4Year2: 'false',
            C4Year3: 'false',
            C4Year4: 'false',
            // C5
            C5Year1: 'false',
            C5Year2: 'false',
            C5Year3: 'false',
            C5Year4: 'false',
            // C6
            C6Year1: 'false',
            C6Year2: 'false',
            C6Year3: 'false',
            C6Year4: 'false',
            // C7
            C7Year1: 'false',
            C7Year2: 'false',
            C7Year3: 'false',
            C7Year4: 'false',
            // C8
            C8Year1: '0000',
            C8Year2: '0000',
            C8Year3: '0000',
            C8Year4: '0000',
            C8Year1Exagere: 'false',
            C8Year2Exagere: 'false',
            C8Year3Exagere: 'false',
            C8Year4Exagere: 'false',
            // C9
            C9: 'false',
            // C10
            C10Year1: 'false',
            C10Year2: 'false',
            C10Year3: 'false',
            C10Year4: 'false',
            // C11
            C11P1Year1:'0000',
            C11P1Year2:'0000',
            C11P1Year3:'0000',
            C11P1Year4:'0000',
            C11P1Year1Min: 'false',
            C11P1Year2Min: 'false',
            C11P1Year3Min: 'false',
            C11P1Year4Min: 'false',
            C11P2Year1:'0000',
            C11P2Year2:'0000',
            C11P2Year3:'0000',
            C11P2Year4:'0000',
            C11P2Year1Maj: 'false',
            C11P2Year2Maj: 'false',
            C11P2Year3Maj: 'false',
            C11P2Year4Maj: 'false',
            // C12
            C12Year1: 'false',
            C12Year2: 'false',
            C12Year3: 'false',
            C12Year4: 'false',
            // C13
            C13Year1: 'false',
            C13Year2: 'false',
            C13Year3: 'false',
            C13Year4: 'false',
            // C14
            C14Year1: 'false',
            C14Year2: 'false',
            C14Year3: 'false',
            C14Year4: 'false',
            //C15
            C15: 'false',
            // C16
            C16Year1: 'false',
            C16Year2: 'false',
            C16Year3: 'false',
            C16Year4: 'false',
            resturants: {
                name: '',
                number: '',
                adress: '',
                oldYear1: '',
                oldYear2: '',
                oldYear3: '',
                oldYear4: ''
            },
            testing: '0000',
            showSuccessAlert: false, // Added boolean variable for success alert
            valide: true
        }
    },
    methods: {
        nextStep() {
            if (this.currentStep < 17) {
                if (this.currentStep == 1) {
                    this.validateNIF();
                    this.validateActivite();
                    this.validateDate();
                    this.validateAdresse();
                    if (!this.NIFError && !this.ActiviteError && !this.AdresseError && !this.dateError) {
                        this.currentStep++;
                        this.updateProgressBar();
                    }
                } else {
                    this.currentStep++;
                    this.updateProgressBar();
                }
            }
        },
        prevStep() {
            if (this.currentStep > 1) {
                this.currentStep--;
                this.updateProgressBar();
            }
        },
        onlyNumbers(event) {
            const keyCode = event.keyCode ? event.keyCode : event.which;
            if (keyCode < 48 || keyCode > 57) {
                event.preventDefault();
            }
        },
        validateNIF() {
            if (!this.NIF) {
                this.NIFError = 'La NIF est requise.';
            } else if (this.NIF.length != 15) {
                this.NIFError = 'Veuillez entrer 15 chiffres.';
            } else {
                this.NIFError = '';
            }
        },
        validateActivite() {
            if (!this.activite) {
                this.ActiviteError = 'L\'activité est requise.';
            } else {
                this.ActiviteError = '';
            }
        },
        validateAdresse() {
            if (!this.adresse) {
                this.AdresseError = 'L\'adresse est requise.';
            } else {
                this.AdresseError = '';
            }
        },
        validateDate() {
            if (!this.date) {
                this.dateError = 'La date est requise.';
            } else {
                this.dateError = '';
            }
        },
        async submitForm() {
            this.$router.push({ name: 'Home' });
            this.showSuccessAlert = true;
        },
        updateProgressBar() {
            var progressPercentage = ((this.currentStep - 1) / 16) * 100;
            this.progressBarWidth = progressPercentage + "%";
        }

    },
    mounted() {
        // Set the current year directly
        this.resturants.oldYear1 = new Date().getFullYear() - 4;
        this.resturants.oldYear2 = new Date().getFullYear() - 3;
        this.resturants.oldYear3 = new Date().getFullYear() - 2;
        this.resturants.oldYear4 = new Date().getFullYear() - 1;
    }
}
</script>

<style>
#test {
    min-width: 550px;
    min-height: 550px;
}

.step-container {
    position: relative;
    text-align: center;
    transform: translateY(-43%);
}

.step-circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    border: 2px solid #007bff;
    line-height: 30px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    cursor: pointer;
}

.step-line {
    position: absolute;
    top: 16px;
    left: 50px;
    width: calc(100% - 100px);
    height: 2px;
    background-color: #007bff;
    z-index: -1;
}

#multi-step-form {
    overflow-x: hidden;
}
</style>