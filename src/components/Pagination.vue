<template>
    <nav aria-label="Page navigation example">
      <ul class="pagination pagination-circle justify-content-center">
        <li class="page-item" :class="{disabled: currentPage <= 1}">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="changePage(currentPage - 1)">
            <span aria-hidden="true">&laquo;</span>
            <span class="visually-hidden">Previous</span>
          </a>
        </li>
  
        <li v-for="page in numberOfPages" :key="page" class="page-item" :class="{active: page === currentPage}">
          <a class="page-link" href="#" @click.prevent="changePage(page)">
            {{ page }}
            <span v-if="page === currentPage" class="visually-hidden">(current)</span>
          </a>
        </li>
  
        <li class="page-item" :class="{disabled: currentPage >= numberOfPages}">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="changePage(currentPage + 1)">
            <span aria-hidden="true">&raquo;</span>
            <span class="visually-hidden">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      totalRows: Number,
      rowsPerPage: Number,
      currentPage: Number
    },
    computed: {
      numberOfPages() {
        return Math.ceil(this.totalRows / this.rowsPerPage);
      }
    },
    methods: {
      changePage(page) {
        if (page > 0 && page <= this.numberOfPages) {
          this.$emit('page-changed', page);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* .pagination li {
    display: inline-block;
    margin-right: 5px;
  }
  
  .pagination li.active a {
    color: red;
  }
  
  .pagination a {
    color: blue;
    text-decoration: none;
  } */
  </style>
  