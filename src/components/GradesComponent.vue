<template>
  <div>
    <md-table v-model="grades[semester-1]" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <div class="md-layout md-gutter">
          <div class="md-layout-item">
            <md-field>
              <label for="semester">Semester</label>
              <md-select v-model="semester" name="semester" id="semester">
                <md-option value="1">1</md-option>
                <md-option value="2">2</md-option>
                <md-option value="3" disabled>3</md-option>
                <md-option value="4" disabled>4</md-option>
                <md-option value="5" default>5</md-option>
              </md-select> 
            </md-field>
          </div>
        </div>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Code" md-sort-by="Code">{{ item.Code }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="Name">{{ item.Name }}</md-table-cell>
        <md-table-cell md-label="Lecturer" md-sort-by="Lecturer">{{ item.Lecturer }}</md-table-cell>
        <md-table-cell md-label="ECTS" md-sort-by="ECTS" md-numeric>{{ item.ECTS }}</md-table-cell>
        <md-table-cell md-label="Grade" md-sort-by="Grade" md-numeric>{{ item.Grade===0 ? '-' : item.Grade  }}</md-table-cell>
        <md-table-cell md-label="Paid" md-sort-by="Paid">{{ item.Paid }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'GradesComponent',
    computed: {
    ...mapState({
      grades: 'grades'
    })
  },
      data() {
        return {
          semester: 5 // Default value, in full version should be $currentSemester or so
        }
      }
}
</script>

<style scoped>
</style>
