<template>
  <div>
    <h2>Modulo Estudiantes</h2>
    <el-table v-loading="loading" :data="data" style="width: 100%">
      <el-table-column prop="name" label="Nombre" sortable>
      </el-table-column>
      <el-table-column prop="lastName" label="Apellido" sortable>
      </el-table-column>
      <el-table-column prop="bio" label="Bio" sortable="">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'StudentIndex',
    data () {
      return {
        data: [],
        loading: false
      }
  },
    created () {
      let self = this

      self.loading = true

      self.getAll()
  },
    methods: {
      getAll () {
        let self = this
        self.$store.state.services.studentService.getAll()
          .then(r => {
            self.loading = false;
            self.data = r.data
          })
          .catch(r => {
            self.$message({
              message: 'Ha ocurrido un Error Inesperado',
              type: 'error'
            })
          })
      }
    }
  }
</script>
