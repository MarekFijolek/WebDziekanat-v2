import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: false,
    grades: [
      [{
        Code: '09 821480 10',
        Name: 'Safety at Work and Ergonomics',
        Lecturer: 'mgr inż. Magdalena Wróbel-Lachowska',
        ECTS: 1,
        Grade: 5,
        Paid: 'No'
      }],
      [{
        Code: '07 011208 22',
        Name: 'Modern Physics',
        Lecturer: 'dr inż. Andrzej Brozi',
        ECTS: 3,
        Grade: 4.5,
        Paid: 'No'
      }],
      [{}],
      [{}],
      [{
        Code: '02 636307 00',
        Name: 'Computer Aided Design',
        Lecturer: 'dr inż. Witold Kubiak',
        ECTS: 3,
        Grade: 4,
        Paid: 'No'
      },
      {
        Code: '02 655804 00',
        Name: 'Computer Graphics',
        Lecturer: 'dr hab. inż. Mariusz Zubert',
        ECTS: 5,
        Grade: 3,
        Paid: 'No'
      },
      {
        Code: '02 566160 00',
        Name: 'Computer Networks',
        Lecturer: 'dr inż. Andrzej Romanowski',
        ECTS: 6,
        Grade: 4.5,
        Paid: 'No'
      },
      {
        Code: '00 131052 01',
        Name: 'Economics',
        Lecturer: '--- Piotr Chimko',
        ECTS: 2,
        Grade: 4.5,
        Paid: 'No'
      },
      {
        Code: '02 616125 00',
        Name: 'Embedded Systems',
        Lecturer: 'dr hab. inż. Dariusz Makowski',
        ECTS: 5,
        Grade: 4.5,
        Paid: 'No'
      },
      {
        Code: '02 576057 00',
        Name: 'GUI Programming',
        Lecturer: 'dr inż. Jacek Nowakowski',
        ECTS: 3,
        Grade: 0,
        Paid: 'No'
      },
      {
        Code: '02 556146 00',
        Name: 'Operating Systems',
        Lecturer: 'dr inż. Andrzej Romanowski',
        ECTS: 6,
        Grade: 4.5,
        Paid: 'No'
      }]
    ]
  },
  mutations: {
    LOG_IN: (state) => {
      state.isLogged = true
    },
    LOG_OUT: (state) => {
      state.isLogged = false
    }
  },
  actions: {

  }
})