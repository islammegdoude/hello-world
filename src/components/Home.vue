<template>
    <Header />
        <div class="mx-auto container m-3">
        <div class="row justify-content-between">
                        <div class="col-lg-4 col-md-6 mb-3">
                <div class="form-group">
                    <select class="form-control" v-model="maxRows">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                        <option value="99999">Show ALL Rows</option>
                    </select>
                </div>
            </div>
            <div class="col-4">
                <input type="text" v-model="searchQuery" placeholder="Search.." class="form-control">
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-striped table-class table-responsive-md">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>NIF</th>
                        <th>Type</th>
                        <th>Activité</th>
                        <th>Date</th>
                        <th>L'année</th>
                        <th>Note</th>
                        <th>Type de Controle</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(entry, index) in paginatedData" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ entry.nif }}</td>
                        <td>{{ entry.type }}</td>
                        <td>{{ entry.activite }}</td>
                        <td>{{ entry.date }}</td>
                        <td>{{ entry.years }}</td>
                        <td>{{ entry.nmbr_cr }}</td>
                        <td>{{ entry.type_controle }}</td>
                        <td><button @click="goToShow(entry.id)" class="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                    <path
                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                </svg> Montrer</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <pagination :total-rows="filteredData.length" :rows-per-page="parseInt(maxRows)" :current-page="currentPage"
            @page-changed="handlePageChange" />
    </div>
</template>

<script>
import Header from './Header.vue';
import Pagination from './Pagination.vue';

export default {
    name: 'Home',
    components: {
        Header,
        Pagination
    },
    data() {
        return {
            searchQuery: '',
            maxRows: 10,
            currentPage: 1,
            data: [],
            loading: true
        };
    },
    computed: {
        filteredData() {
            return this.data.filter(entry =>
                Object.values(entry).some(val =>
                    val != null && val.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
                )
            );
        },
        paginatedData() {
            const start = (this.currentPage - 1) * this.maxRows;
            return this.filteredData.slice(start, start + parseInt(this.maxRows));
        }
    },
    methods: {
        goToShow(idF) {
    this.$router.push({ name: 'Show_file', params: { id: idF } });
}
,
        handlePageChange(page) {
            this.currentPage = page;
        },
        fetchData() {
            this.data=[
            {
            "id": 1,
            "nif": "111112525",
            "type": "111",
            "activite": "111",
            "date": "2024-05-07T23:00:00.000Z",
            "years": 111,
            "nmbr_cr": 111,
            "type_controle": "111"
        },
        {
            "id": 2,
            "nif": "555555",
            "type": "111",
            "activite": "111",
            "date": "2024-05-07T23:00:00.000Z",
            "years": 111,
            "nmbr_cr": 111,
            "type_controle": "111"
        }
            ]
        },
        
    },
    watch: {
        maxRows() {
            this.currentPage = 1; // Reset to the first page if the number of rows per page changes
        },
        searchQuery() {
            this.currentPage = 1; // Reset to the first page when the search query changes
        }
    },
    mounted() {
        this.fetchData();
    }
}
</script>

<style>
body {
    background-color: #eee;
}

table th,
table td {
    text-align: center;
}

table tr:nth-child(even) {
    background-color: #e4e3e3
}

th {
    background: #333;
    color: #fff;
}

.pagination {
    margin: 0;
}

.pagination li:hover {
    cursor: pointer;
}

.header_wrap {
    padding: 30px 0;
}

.num_rows {
    width: 20%;
    float: left;
}

.tb_search {
    width: 20%;
    float: right;
}

.pagination-container {
    width: 70%;
    float: left;
}

.rows_count {
    width: 20%;
    float: right;
    text-align: right;
    color: #999;
}
</style>
