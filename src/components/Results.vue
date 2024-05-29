<template>
    <div>
        <Header />
        <div class="container">
            <div class="header_wrap">
                <div class="num_rows">
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
                <div class="tb_search">
                    <input type="text" v-model="searchQuery" placeholder="Search.." class="form-control">
                </div>
            </div>
            <table class="table table-striped table-class">
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
                    </tr>
                </tbody>
            </table>
            <pagination :total-rows="filteredData.length" :rows-per-page="parseInt(maxRows)" :current-page="currentPage"
                @page-changed="handlePageChange" />
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import Pagination from './Pagination.vue';

export default {
    name: 'Results',
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
        handlePageChange(page) {
            this.currentPage = page;
        },
        fetchData() {
           this.data=[
           {
            "id": 1,
            "nif": "11111",
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
        }
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
