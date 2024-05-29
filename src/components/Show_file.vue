<template>
    <Header></header>
    <div class="container pe-5 mt-5 mb-5">
        <div class="card" style="border-radius: 15px;">
            <h3 class="text-uppercase p-1">les données du contribuable</h3>
            <div class="card m-3" style="border-radius: 15px;">
                <div class="card-body">

                    <div class="row align-items-center pt-4 pb-3">
                        <div class="col-md-3 ps-5">

                            <h6 class="mb-0"> Le NIF</h6>

                        </div>
                        <div class="col-md-9 pe-5">

                            <input type="text" :value="NIF" class="form-control form-control-lg" disabled>


                        </div>
                    </div>

                    <hr class="mx-n3">

                    <div class="row align-items-center py-3">
                        <div class="col-md-3 ps-5">

                            <h6 class="mb-0">type de personne</h6>

                        </div>
                        <div class="col-md-9 pe-5">
                            <div class="row">
                                <div class="col-auto"> <!-- Added col-auto to make the content inline -->
                                    <input class="form-check-input" type="radio" name="type_de_personne" id="morale"
                                        value="morale" v-model="type_de_personne" disabled />
                                    <label class="form-check-label" for="morale">morale</label>
                                </div>
                                <div class="col-auto"> <!-- Added col-auto to make the content inline -->
                                    <input class="form-check-input" type="radio" v-model="type_de_personne"
                                        name="type_de_personne" id="physique" value="physique" disabled />
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

                            <input type="text" v-model="ACTIVITE" class="form-control form-control-lg" disabled />

                        </div>
                    </div>


                    <hr class="mx-n3">

                    <div class="row align-items-center py-3">
                        <div class="col-md-3 ps-5">

                            <h6 class="mb-0">La date de début de l’activité</h6>

                        </div>
                        <div class="col-md-9 pe-5">
                            <input type="text" :value="date" class="form-control" disabled>
                        </div>
                    </div>
                    <hr class="mx-n3">
                    <div class="row align-items-center pt-4 pb-3">
                        <div class="col-md-3 ps-5">

                            <h6 class="mb-0">L’adresse</h6>

                        </div>
                        <div class="col-md-9 pe-5">

                            <input type="text" v-model="adresse" class="form-control form-control-lg" disabled />

                        </div>
                    </div>
                </div>
            </div>


            <h3 class="text-uppercase p-1">les critères</h3>


            <div class="card m-3" style="border-radius: 15px;">
                <div class="card-body">
                    <!-- ********************************************************* LES CRITÈRES ************************************************************* -->
                    <!-- ********************************************************    1    ******************************************************** -->
                    <div>
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
                                                        name="C1Year1" id="C1Year1oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C1Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C1Year1"
                                                        name="C1Year1" id="C1Year1non" value="non" disabled />
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
                                                        name="C1Year2" id="C1Year2oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C1Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C1Year2"
                                                        name="C1Year2" id="C1Year2non" value="non" disabled />
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
                                                        name="C1Year3" id="C1Year3oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C1Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C1Year3"
                                                        name="C1Year3" id="C1Year3non" value="non" disabled />
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
                                                        name="C1Year4" id="C1Year4oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C1Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C1Year4"
                                                        name="C1Year4" id="C1Year4non" value="non" disabled />
                                                    <label class="form-check-label" for="C1Year4non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="mx-n3">
                    <!-- ********************************************************    2    ******************************************************** -->
                    <div>
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
                                                        name="C2Year1" id="C2Year1oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C2Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C2Year1"
                                                        name="C2Year1" id="C2Year1non" value="non" disabled />
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
                                                        name="C2Year2" id="C2Year2oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C2Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C2Year2"
                                                        name="C2Year2" id="C2Year2non" value="non" disabled />
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
                                                        name="C2Year3" id="C2Year3oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C2Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C2Year3"
                                                        name="C2Year3" id="C2Year3non" value="non" disabled />
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
                                                        name="C2Year4" id="C2Year4oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C2Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C2Year4"
                                                        name="C2Year4" id="C2Year4non" value="non" disabled />
                                                    <label class="form-check-label" for="C2Year4non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="mx-n3">
                    <!-- ********************************************************    3    ******************************************************** -->
                    <div>
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
                                                        name="C3Year1" id="C3Year1oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C3Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C3Year1"
                                                        name="C3Year1" id="C3Year1non" value="non" disabled />
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
                                                        name="C3Year2" id="C3Year2oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C3Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C3Year2"
                                                        name="C3Year2" id="C3Year2non" value="non" disabled />
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
                                                        name="C3Year3" id="C3Year3oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C3Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C3Year3"
                                                        name="C3Year3" id="C3Year3non" value="non" disabled />
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
                                                        name="C3Year4" id="C3Year4oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C3Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C3Year4"
                                                        name="C3Year4" id="C3Year4non" value="non" disabled />
                                                    <label class="form-check-label" for="C3Year4non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="mx-n3">
                    <!-- ********************************************************    4    ******************************************************** -->
                    <div>
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
                                                        name="C4Year1" id="C4Year1oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C4Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C4Year1"
                                                        name="C4Year1" id="C4Year1non" value="non" disabled />
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
                                                        name="C4Year2" id="C4Year2oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C4Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C4Year2"
                                                        name="C4Year2" id="C4Year2non" value="non" disabled />
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
                                                        name="C4Year3" id="C4Year3oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C4Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C4Year3"
                                                        name="C4Year3" id="C4Year3non" value="non" disabled />
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
                                                        name="C4Year4" id="C4Year4oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C4Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C4Year4"
                                                        name="C4Year4" id="C4Year4non" value="non" disabled />
                                                    <label class="form-check-label" for="C4Year4non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="mx-n3">
                    <!-- ********************************************************    5    ******************************************************** -->
                    <div>
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
                                                        name="C5Year1" id="C5Year1oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C5Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C5Year1"
                                                        name="C5Year1" id="C5Year1non" value="non" disabled />
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
                                                        name="C5Year2" id="C5Year2oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C5Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C5Year2"
                                                        name="C5Year2" id="C5Year2non" value="non" disabled />
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
                                                        name="C5Year3" id="C5Year3oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C5Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C5Year3"
                                                        name="C5Year3" id="C5Year3non" value="non" disabled />
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
                                                        name="C5Year4" id="C5Year4oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C5Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C5Year4"
                                                        name="C5Year4" id="C5Year4non" value="non" disabled />
                                                    <label class="form-check-label" for="C5Year4non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="mx-n3">
                    <!-- ********************************************************    6    ******************************************************** -->
                    <div>
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
                                                        name="C6Year1" id="C6Year1oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C6Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C6Year1"
                                                        name="C6Year1" id="C6Year1non" value="non" disabled />
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
                                                        name="C6Year2" id="C6Year2oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C6Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C6Year2"
                                                        name="C6Year2" id="C6Year2non" value="non" disabled />
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
                                                        name="C6Year3" id="C6Year3oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C6Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C6Year3"
                                                        name="C6Year3" id="C6Year3non" value="non" disabled />
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
                                                        name="C6Year4" id="C6Year4oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C6Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C6Year4"
                                                        name="C6Year4" id="C6Year4non" value="non" disabled />
                                                    <label class="form-check-label" for="C6Year4non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="mx-n3">
                    <!-- ********************************************************    7    ******************************************************** -->
                    <div>
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
                                                        name="C7Year1" id="C7Year1oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C7Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C7Year1"
                                                        name="C7Year1" id="C7Year1non" value="non" disabled />
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
                                                        name="C7Year2" id="C7Year2oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C7Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C7Year2"
                                                        name="C7Year2" id="C7Year2non" value="non" disabled />
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
                                                        name="C7Year3" id="C7Year3oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C7Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C7Year3"
                                                        name="C7Year3" id="C7Year3non" value="non" disabled />
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
                                                        name="C7Year4" id="C7Year4oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C7Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C7Year4"
                                                        name="C7Year4" id="C7Year4non" value="non" disabled />
                                                    <label class="form-check-label" for="C7Year4non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="mx-n3">
                    <!-- ********************************************************    8    ******************************************************** -->
                    <div>
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
                                                    v-model="C8Year1" disabled />
                                            </div>
                                        </div>
                                        <div class="row mx-auto">
                                            <div class="col py-2">
                                                <input class="form-check-input" type="checkbox" value="oui"
                                                    id="C8Year1Exagere" v-model="C8Year1Exagere" disabled />
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
                                                    v-model="C8Year2" disabled/>
                                            </div>
                                        </div>
                                        <div class="row mx-auto">
                                            <div class="col py-2">
                                                <input class="form-check-input" type="checkbox" value="oui"
                                                    id="C8Year2Exagere" v-model="C8Year2Exagere" disabled/>
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
                                                    v-model="C8Year3" disabled/>
                                            </div>
                                        </div>
                                        <div class="row mx-auto">
                                            <div class="col py-2">
                                                <input class="form-check-input" type="checkbox" value="oui"
                                                    id="C8Year3Exagere" v-model="C8Year3Exagere" disabled />
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
                                                    v-model="C8Year4" disabled />
                                            </div>
                                        </div>
                                        <div class="row mx-auto">
                                            <div class="col py-2">
                                                <input class="form-check-input" type="checkbox" value="oui"
                                                    id="C8Year4Exagere" v-model="C8Year4Exagere" disabled />
                                                <label class="form-check-label" for="C8Year4Exagere"> il y a une
                                                    exagération</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="mx-n3">
                    <!-- ********************************************************    9    ******************************************************** -->
                    <div>
                        <!-- title 9 -->
                        <h3>9. Affaire coordonnée ou renseignements extérieures : </h3>
                        <div class="row align-items-center pt-4 pb-3">
                            <!-- card  -->
                            <div class="col-md-9 pe-5">
                                <input class="form-check-input " type="checkbox" value="oui" id="C9Oui" v-model="C9" disabled/>
                                <label class="form-check-label " for="C9Oui">Oui, L'affaire est-elle coordonnée ou
                                    renseignements extérieures.</label>
                                <!-- <input class="form-check-input " type="checkbox" value="non" id="C9Oui" v-model="C9"/>
                                <label class="form-check-label " for="C9Oui">Non</label> -->
                            </div>
                        </div>

                    </div>
                    <hr class="mx-n3">
                    <!-- ********************************************************    10    ******************************************************** -->
                    <div>
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
                                                        name="C10Year1" id="C10Year1oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C10Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C10Year1"
                                                        name="C10Year1" id="C10Year1non" value="non"  disabled />
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
                                                        name="C10Year2" id="C10Year2oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C10Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C10Year2"
                                                        name="C10Year2" id="C10Year2non" value="non" disabled />
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
                                                        name="C10Year3" id="C10Year3oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C10Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C10Year3"
                                                        name="C10Year3" id="C10Year3non" value="non" disabled />
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
                                                        name="C10Year4" id="C10Year4oui" value="oui" disabled />
                                                    <label class="form-check-label" for="C10Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C10Year4"
                                                        name="C10Year4" id="C10Year4non" value="non" disabled />
                                                    <label class="form-check-label" for="C10Year4non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="mx-n3">
                    <!-- ********************************************************    11    ******************************************************** -->
                    <div>
                        <!-- title 1 -->
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
                                                                v-model="C11P1Year1" disabled/>
                                                        </div>
                                                    </div>
                                                    <div class="row mx-auto">
                                                        <div class="col py-2">
                                                            <input class="form-check-input" type="checkbox" value="oui"
                                                                id="C11P1Year1Min" v-model="C11P1Year1Min" disabled/>
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
                                                                v-model="C11P1Year2" disabled/>
                                                        </div>
                                                    </div>
                                                    <div class="row mx-auto">
                                                        <div class="col py-2">
                                                            <input class="form-check-input" type="checkbox" value="oui"
                                                                id="C11P1Year2Min" v-model="C11P1Year2Min" disabled/>
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
                                                                v-model="C11P1Year3" disabled/>
                                                        </div>
                                                    </div>
                                                    <div class="row mx-auto">
                                                        <div class="col py-2">
                                                            <input class="form-check-input" type="checkbox" value="oui"
                                                                id="C11P1Year3Min" v-model="C11P1Year3Min" disabled/>
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
                                                                v-model="C11P1Year4" disabled/>
                                                        </div>
                                                    </div>
                                                    <div class="row mx-auto">
                                                        <div class="col py-2">
                                                            <input class="form-check-input" type="checkbox" value="oui"
                                                                id="C11P1Year4Min" v-model="C11P1Year4Min" disabled/>
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
                                                                v-model="C11P2Year1" disabled/>
                                                        </div>
                                                    </div>
                                                    <div class="row mx-auto">
                                                        <div class="col py-2">
                                                            <input class="form-check-input" type="checkbox" value="oui"
                                                                id="C11P2Year1Maj" v-model="C11P2Year1Maj" disabled/>
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
                                                                v-model="C11P2Year2" disabled/>
                                                        </div>
                                                    </div>
                                                    <div class="row mx-auto">
                                                        <div class="col py-2">
                                                            <input class="form-check-input" type="checkbox" value="oui"
                                                                id="C11P2Year2Maj" v-model="C11P2Year2Maj" disabled/>
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
                                                                v-model="C11P2Year3" disabled/>
                                                        </div>
                                                    </div>
                                                    <div class="row mx-auto">
                                                        <div class="col py-2">
                                                            <input class="form-check-input" type="checkbox" value="oui"
                                                                id="C11P2Year3Maj" v-model="C11P2Year3Maj" disabled/>
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
                                                                v-model="C11P2Year4" disabled/>
                                                        </div>
                                                    </div>
                                                    <div class="row mx-auto">
                                                        <div class="col py-2">
                                                            <input class="form-check-input" type="checkbox" value="oui"
                                                                id="C11P2Year4Maj" v-model="C11P2Year4Maj" disabled/>
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
                    <hr class="mx-n3">
                    <!-- ********************************************************    12    ******************************************************** -->
                    <div>
                        <!-- title 12 -->
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
                                                        name="C12Year1" id="C12Year1oui" value="oui" disabled/>
                                                    <label class="form-check-label" for="C12Year1oui">Il y a
                                                        Déficitaire</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C12Year1"
                                                        name="C12Year1" id="C12Year1non" value="non" disabled/>
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
                                                        name="C12Year2" id="C12Year2oui" value="oui" disabled/>
                                                    <label class="form-check-label" for="C12Year2oui">Il y a
                                                        Déficitaire</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C12Year2"
                                                        name="C12Year2" id="C12Year2non" value="non" disabled/>
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
                                                        name="C12Year3" id="C12Year3oui" value="oui" disabled/>
                                                    <label class="form-check-label" for="C12Year3oui">Il y a
                                                        Déficitaire</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C12Year3"
                                                        name="C12Year3" id="C12Year3non" value="non" disabled/>
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
                                                        name="C12Year4" id="C12Year4oui" value="oui" disabled/>
                                                    <label class="form-check-label" for="C12Year4oui">Il y a
                                                        Déficitaire</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C12Year4"
                                                        name="C12Year4" id="C12Year4non" value="non" disabled/>
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
                    <hr class="mx-n3">
                    <!-- ********************************************************    13    ******************************************************** -->
                    <div>
                        <!-- title 14 -->
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
                                                        name="C13Year1" id="C13Year1oui" value="oui" disabled/>
                                                    <label class="form-check-label" for="C13Year1oui">Il y a
                                                        Précompte</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C13Year1"
                                                        name="C13Year1" id="C13Year1non" value="non" disabled/>
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
                                                        name="C13Year2" id="C13Year2oui" value="oui" disabled/>
                                                    <label class="form-check-label" for="C13Year2oui">Il y a
                                                        Précompte</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C13Year2"
                                                        name="C13Year2" id="C13Year2non" value="non" disabled/>
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
                                                        name="C13Year3" id="C13Year3oui" value="oui" disabled/>
                                                    <label class="form-check-label" for="C13Year3oui">Il y a
                                                        Précompte</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C13Year3"
                                                        name="C13Year3" id="C13Year3non" value="non" disabled/>
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
                                                        name="C13Year4" id="C13Year4oui" value="oui" disabled/>
                                                    <label class="form-check-label" for="C13Year4oui">Il y a
                                                        Précompte</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C13Year4"
                                                        name="C13Year4" id="C13Year4non" value="non" disabled/>
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
                    <hr class="mx-n3">
                    <!-- ********************************************************    14    ******************************************************** -->
                    <div>
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
                                                        name="C14Year1" id="C14Year1oui" value="oui" disabled/>
                                                    <label class="form-check-label" for="C14Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C14Year1"
                                                        name="C14Year1" id="C14Year1non" value="non" disabled/>
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
                                                        name="C14Year2" id="C14Year2oui" value="oui" disabled/>
                                                    <label class="form-check-label" for="C14Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C14Year2"
                                                        name="C14Year2" id="C14Year2non" value="non" disabled/>
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
                                                        name="C14Year3" id="C14Year3oui" value="oui" disabled/>
                                                    <label class="form-check-label" for="C14Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C14Year3"
                                                        name="C14Year3" id="C14Year3non" value="non" disabled/>
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
                                                        name="C14Year4" id="C14Year4oui" value="oui" disabled/>
                                                    <label class="form-check-label" for="C14Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C14Year4"
                                                        name="C14Year4" id="C14Year4non" value="non" disabled/>
                                                    <label class="form-check-label" for="C14Year4non">non</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="mx-n3">
<!-- ********************************************************    15   ******************************************************** -->
<div>
                        <!-- title 15 -->
                        <h3>15. Le train de vie est supérieur aux revenus déclarés ?</h3>
                        <div class="row align-items-center pt-4 pb-3">
                            <!-- card  -->
                            <div class="col-md-9 pe-5">
                                <input class="form-check-input " type="checkbox" value="oui" id="C15Oui" v-model="C15" disabled/>
                                <label class="form-check-label " for="C15Oui">Oui, Le train de vie est supérieur aux revenus déclarés.</label>
                                <!-- <input class="form-check-input " type="checkbox" value="non" id="C9Oui" v-model="C9"/>
                                <label class="form-check-label " for="C9Oui">Non</label> -->
                            </div>
                        </div>

                    </div>
                    <hr class="mx-n3">
                    <!-- ********************************************************    16    ******************************************************** -->
                    <div>
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
                                                        name="C16Year1" id="C16Year1oui" value="oui" disabled/>
                                                    <label class="form-check-label" for="C16Year1oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C16Year1"
                                                        name="C16Year1" id="C16Year1non" value="non" disabled/>
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
                                                        name="C16Year2" id="C16Year2oui" value="oui" disabled/>
                                                    <label class="form-check-label" for="C16Year2oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C16Year2"
                                                        name="C16Year2" id="C16Year2non" value="non" disabled/>
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
                                                        name="C16Year3" id="C16Year3oui" value="oui" disabled/>
                                                    <label class="form-check-label" for="C16Year3oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C16Year3"
                                                        name="C16Year3" id="C16Year3non" value="non" disabled/>
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
                                                        name="C16Year4" id="C16Year4oui" value="oui" disabled/>
                                                    <label class="form-check-label" for="C16Year4oui">oui</label>
                                                </div>
                                                <div class="col-auto">
                                                    <input class="form-check-input" type="radio" v-model="C16Year4"
                                                        name="C16Year4" id="C16Year4non" value="non" disabled/>
                                                    <label class="form-check-label" for="C16Year4non">non</label>
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


        </div>
    </div>

</template>

<script>
import Header from './Header.vue';
export default {
    name: 'Show_file',
    components: {
        Header
    },
    data() {
        return {
            // NIF
            NIF: '',
            // TYPE DE PERSON
            type_de_personne: '',
            // ACTIVITE
            ACTIVITE: '',
            // DATE
            date: '',
            // adresse
            adresse: '',
            // C1
            C1Year1: '',
            C1Year2: '',
            C1Year3: '',
            C1Year4: '',
            // C2
            C2Year1: '',
            C2Year2: '',
            C2Year3: '',
            C2Year4: '',
            // C3
            C3Year1: '',
            C3Year2: '',
            C3Year3: '',
            C3Year4: '',
            // C4
            C4Year1: '',
            C4Year2: '',
            C4Year3: '',
            C4Year4: '',
            // C5
            C5Year1: '',
            C5Year2: '',
            C5Year3: '',
            C5Year4: '',
            // C6
            C6Year1: '',
            C6Year2: '',
            C6Year3: '',
            C6Year4: '',
            // C7
            C7Year1: '',
            C7Year2: '',
            C7Year3: '',
            C7Year4: '',
            // C8
            C8Year1: '',
            C8Year2: '',
            C8Year3: '',
            C8Year4: '',
            C8Year1Exagere: '',
            C8Year2Exagere: '',
            C8Year3Exagere: '',
            C8Year4Exagere: '',
            // C9
            C9: '',
            // C10
            C10Year1: '',
            C10Year2: '',
            C10Year3: '',
            C10Year4: '',
            // C11
            C11P1Year1: '',
            C11P1Year2: '',
            C11P1Year3: '',
            C11P1Year4: '',
            C11P1Year1Min: '',
            C11P1Year2Min: '',
            C11P1Year3Min: '',
            C11P1Year4Min: '',
            C11P2Year1: '',
            C11P2Year2: '',
            C11P2Year3: '',
            C11P2Year4: '',
            C11P2Year1Maj: '',
            C11P2Year2Maj: '',
            C11P2Year3Maj: '',
            C11P2Year4Maj: '',
            // C12
            C12Year1: '',
            C12Year2: '',
            C12Year3: '',
            C12Year4: '',
            // C13
            C13Year1: '',
            C13Year2: '',
            C13Year3: '',
            C13Year4: '',
            // C14
            C14Year1: '',
            C14Year2: '',
            C14Year3: '',
            C14Year4: '',
            //C15
            C15: '',
            // C16
            C16Year1: '',
            C16Year2: '',
            C16Year3: '',
            C16Year4: '',
            currentYear: 2024,
            resturants: {
                name: '',
                number: '',
                adress: '',
                oldYear1: '',
                oldYear2: '',
                oldYear3: '',
                oldYear4: '',
            },
        }
    },

    methods: {

    },
    mounted() {
        let id=this.$route.params.id;
        switch (id) {
            case '1':
                // NIF
                this.NIF = '11111';
                // TYPE
                this.type_de_personne = 'morale';
                // ACTIVITE
                this.ACTIVITE = '121';
                // date
                this.date = '2024-05-07T23:00:00.000Z';
                //adress
                this.adresse= '000000';
                // years
                this.currentYear = 2022;
                this.resturants.oldYear1 = this.currentYear - 4;
                this.resturants.oldYear2 = this.currentYear - 3;
                this.resturants.oldYear3 = this.currentYear - 2;
                this.resturants.oldYear4 = this.currentYear - 1;
                // C1
                this.C1Year1 = 'oui';
                this.C1Year2 = 'oui';
                this.C1Year3 = 'non';
                this.C1Year4 = 'oui';
                // C2
                this.C2Year1 = 'oui';
                this.C2Year2 = 'non';
                this.C2Year3 = 'oui';
                this.C2Year4 = 'non';
                // C3
                this.C3Year1 = 'oui';
                this.C3Year2 = 'oui';
                this.C3Year3 = 'non';
                this.C3Year4 = 'non';
                // C4
                this.C4Year1 = 'non';
                this.C4Year2 = 'non';
                this.C4Year3 = 'oui';
                this.C4Year4 = 'oui';
                // C5
                this.C5Year1 = 'oui';
                this.C5Year2 = 'oui';
                this.C5Year3 = 'oui';
                this.C5Year4 = 'oui';
                // C6
                this.C6Year1 = 'non';
                this.C6Year2 = 'non';
                this.C6Year3 = 'non';
                this.C6Year4 = 'non';
                // C7
                this.C7Year1 = 'oui';
                this.C7Year2 = 'non';
                this.C7Year3 = 'oui';
                this.C7Year4 = 'oui';
                // C8
                this.C8Year1 = '121';
                this.C8Year2 = '121';
                this.C8Year3 = '121';
                this.C8Year4 = '121';
                this.C8Year1Exagere = 'true';
                this.C8Year2Exagere = 'false';
                this.C8Year3Exagere = 'true';
                this.C8Year4Exagere = 'false';
                // C9
                this.C9 = 'true';
                // C10
                this.C10Year1 = 'oui';
                this.C10Year2 = 'oui';
                this.C10Year3 = 'oui';
                this.C10Year4 = 'non';
                // C11
                this.C11P1Year1 = '121';
                this.C11P1Year2 = '121';
                this.C11P1Year3 = '121';
                this.C11P1Year4 = '121';
                this.C11P1Year1Min='false';
                this.C11P1Year2Min='true';
                this.C11P1Year3Min='false';
                this.C11P1Year4Min='true';
                this.C11P2Year1 = '121';
                this.C11P2Year2 = '121';
                this.C11P2Year3 = '121';
                this.C11P2Year4 = '121';
                this.C11P2Year1Maj='false';
                this.C11P2Year2Maj='true';
                this.C11P2Year3Maj='false';
                this.C11P2Year4Maj='true';
                // C12
                this.C12Year1 = 'non';
                this.C12Year2 = 'oui';
                this.C12Year3 = 'non';
                this.C12Year4 = 'non';

                // C13
                this.C13Year1 = 'non';
                this.C13Year2 = 'non';
                this.C13Year3 = 'non';
                this.C13Year4 = 'non';
                // C14
                this.C14Year1 = 'oui';
                this.C14Year2 = 'oui';
                this.C14Year3 = 'oui';
                this.C14Year4 = 'oui';
                // C15
                this.C15 = 'true';
                // C16
                this.C16Year1 = 'non';
                this.C16Year2 = 'oui';
                this.C16Year3 = 'non';
                this.C16Year4 = 'non';
                break;
                case '2':
                // NIF
                this.NIF = '55555555';
                // TYPE
                this.type_de_personne = 'morale';
                // ACTIVITE
                this.ACTIVITE = '121';
                // date
                this.date = '2024-05-07T23:00:00.000Z';
                //adress
                this.adresse= '000000';
                // years
                this.currentYear = 2022;
                this.resturants.oldYear1 = this.currentYear - 4;
                this.resturants.oldYear2 = this.currentYear - 3;
                this.resturants.oldYear3 = this.currentYear - 2;
                this.resturants.oldYear4 = this.currentYear - 1;
                // C1
                this.C1Year1 = 'oui';
                this.C1Year2 = 'oui';
                this.C1Year3 = 'non';
                this.C1Year4 = 'oui';
                // C2
                this.C2Year1 = 'oui';
                this.C2Year2 = 'non';
                this.C2Year3 = 'oui';
                this.C2Year4 = 'non';
                // C3
                this.C3Year1 = 'oui';
                this.C3Year2 = 'oui';
                this.C3Year3 = 'non';
                this.C3Year4 = 'non';
                // C4
                this.C4Year1 = 'non';
                this.C4Year2 = 'non';
                this.C4Year3 = 'oui';
                this.C4Year4 = 'oui';
                // C5
                this.C5Year1 = 'oui';
                this.C5Year2 = 'oui';
                this.C5Year3 = 'oui';
                this.C5Year4 = 'oui';
                // C6
                this.C6Year1 = 'non';
                this.C6Year2 = 'non';
                this.C6Year3 = 'non';
                this.C6Year4 = 'non';
                // C7
                this.C7Year1 = 'oui';
                this.C7Year2 = 'non';
                this.C7Year3 = 'oui';
                this.C7Year4 = 'oui';
                // C8
                this.C8Year1 = '121';
                this.C8Year2 = '121';
                this.C8Year3 = '121';
                this.C8Year4 = '121';
                this.C8Year1Exagere = 'true';
                this.C8Year2Exagere = 'false';
                this.C8Year3Exagere = 'true';
                this.C8Year4Exagere = 'false';
                // C9
                this.C9 = 'true';
                // C10
                this.C10Year1 = 'oui';
                this.C10Year2 = 'oui';
                this.C10Year3 = 'oui';
                this.C10Year4 = 'non';
                // C11
                this.C11P1Year1 = '121';
                this.C11P1Year2 = '121';
                this.C11P1Year3 = '121';
                this.C11P1Year4 = '121';
                this.C11P1Year1Min='false';
                this.C11P1Year2Min='true';
                this.C11P1Year3Min='false';
                this.C11P1Year4Min='true';
                this.C11P2Year1 = '121';
                this.C11P2Year2 = '121';
                this.C11P2Year3 = '121';
                this.C11P2Year4 = '121';
                this.C11P2Year1Maj='false';
                this.C11P2Year2Maj='true';
                this.C11P2Year3Maj='false';
                this.C11P2Year4Maj='true';
                // C12
                this.C12Year1 = 'non';
                this.C12Year2 = 'oui';
                this.C12Year3 = 'non';
                this.C12Year4 = 'non';

                // C13
                this.C13Year1 = 'non';
                this.C13Year2 = 'non';
                this.C13Year3 = 'non';
                this.C13Year4 = 'non';
                // C14
                this.C14Year1 = 'oui';
                this.C14Year2 = 'oui';
                this.C14Year3 = 'oui';
                this.C14Year4 = 'oui';
                // C15
                this.C15 = 'true';
                // C16
                this.C16Year1 = 'non';
                this.C16Year2 = 'oui';
                this.C16Year3 = 'non';
                this.C16Year4 = 'non';
                break;
            default:
                // NIF
                this.NIF = '121';
                // TYPE
                this.type_de_personne = 'morale';
                // ACTIVITE
                this.ACTIVITE = '121';
                // date
                this.date = '2024-05-07T23:00:00.000Z';
                //adress
                this.adresse= '000000';
                // years
                this.currentYear = 2022;
                this.resturants.oldYear1 = this.currentYear - 4;
                this.resturants.oldYear2 = this.currentYear - 3;
                this.resturants.oldYear3 = this.currentYear - 2;
                this.resturants.oldYear4 = this.currentYear - 1;
                // C1
                this.C1Year1 = 'oui';
                this.C1Year2 = 'oui';
                this.C1Year3 = 'non';
                this.C1Year4 = 'oui';
                // C2
                this.C2Year1 = 'oui';
                this.C2Year2 = 'non';
                this.C2Year3 = 'oui';
                this.C2Year4 = 'non';
                // C3
                this.C3Year1 = 'oui';
                this.C3Year2 = 'oui';
                this.C3Year3 = 'non';
                this.C3Year4 = 'non';
                // C4
                this.C4Year1 = 'non';
                this.C4Year2 = 'non';
                this.C4Year3 = 'oui';
                this.C4Year4 = 'oui';
                // C5
                this.C5Year1 = 'oui';
                this.C5Year2 = 'oui';
                this.C5Year3 = 'oui';
                this.C5Year4 = 'oui';
                // C6
                this.C6Year1 = 'non';
                this.C6Year2 = 'non';
                this.C6Year3 = 'non';
                this.C6Year4 = 'non';
                // C7
                this.C7Year1 = 'oui';
                this.C7Year2 = 'non';
                this.C7Year3 = 'oui';
                this.C7Year4 = 'oui';
                // C8
                this.C8Year1 = '121';
                this.C8Year2 = '121';
                this.C8Year3 = '121';
                this.C8Year4 = '121';
                this.C8Year1Exagere = 'true';
                this.C8Year2Exagere = 'false';
                this.C8Year3Exagere = 'true';
                this.C8Year4Exagere = 'false';
                // C9
                this.C9 = 'true';
                // C10
                this.C10Year1 = 'oui';
                this.C10Year2 = 'oui';
                this.C10Year3 = 'oui';
                this.C10Year4 = 'non';
                // C11
                this.C11P1Year1 = '121';
                this.C11P1Year2 = '121';
                this.C11P1Year3 = '121';
                this.C11P1Year4 = '121';
                this.C11P1Year1Min='false';
                this.C11P1Year2Min='true';
                this.C11P1Year3Min='false';
                this.C11P1Year4Min='true';
                this.C11P2Year1 = '121';
                this.C11P2Year2 = '121';
                this.C11P2Year3 = '121';
                this.C11P2Year4 = '121';
                this.C11P2Year1Maj='false';
                this.C11P2Year2Maj='true';
                this.C11P2Year3Maj='false';
                this.C11P2Year4Maj='true';
                // C12
                this.C12Year1 = 'non';
                this.C12Year2 = 'oui';
                this.C12Year3 = 'non';
                this.C12Year4 = 'non';

                // C13
                this.C13Year1 = 'non';
                this.C13Year2 = 'non';
                this.C13Year3 = 'non';
                this.C13Year4 = 'non';
                // C14
                this.C14Year1 = 'oui';
                this.C14Year2 = 'oui';
                this.C14Year3 = 'oui';
                this.C14Year4 = 'oui';
                // C15
                this.C15 = 'true';
                // C16
                this.C16Year1 = 'non';
                this.C16Year2 = 'oui';
                this.C16Year3 = 'non';
                this.C16Year4 = 'non';
                break;
        }
    }
}
</script>




<style>
#container {
    /* max-width: 550px; */
}
</style>