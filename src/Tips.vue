<template>
<div class="container tips-body">
    <div v-if="this.names.length > 0">
    <div class="d-flex justify-content-between">
      <div class="d-flex align-items-center total-hours">
        <h2>Total Hours: {{ total() }}</h2>
        <p> {{ sumedHours }} </p>
      </div>
        <button class="end-day-btn" @click="endDay">End Day</button>
    </div>
    </div>
    <div class="d-flex align-items-center total-tips">
        <h2>Total Tips: </h2>
        <p>{{ totalTips }}</p>
    </div>
    <div class="d-flex justify-content-between total-tips-input">
            <input type="text" v-model.number.lazy="tips"/>
            <button class="add-total-tips" @click.prevent="addTips(tips)">Add Tips</button>    
    </div>
    <app-new-name @nameAdded="newName"></app-new-name>
    <app-names-grid :names="names" @nameDeleted="deleteName"></app-names-grid>
</div>  
</template>


<script>
import NamesGrid from './components/NamesGrid.vue';
import NewName from './components/NewName.vue';

  export default {
    data() {
      return {
        sumedHours: '',
        totalTips: '',
        tips: '',
        names: [ ]
      }
    },
    methods: {
      newName(person){
        this.names.push(person);
      },
      deleteName(index){
        this.names.splice(index, 1);
      },
      total(){
        const hoursWorked = this.names.map((personHours, i) => {
          return personHours.hours;
        }); 
    
        const sumedHours = hoursWorked.reduce((total, amount) => total + amount);
        this.sumedHours = sumedHours;
      },
      addTips(tips){
        this.totalTips = this.tips;
        this.tips = '';
      },
      endDay(){
          const fullShift = Math.round(this.totalTips / this.sumedHours);
          const eachHours = this.names.map((n, i) => {
            return n.final = Math.floor(n.hours * fullShift); 
          });
      }
    },
    components: {
      appNamesGrid: NamesGrid,
      appNewName: NewName
    }
  }
</script>


<style>
    .tips-body {
        margin-top: 2rem;
    }

    h1 {
        text-align: center;
        margin:30px 0 20px 0;
    }

  .end-day-btn {
    background: #00000080;
    color: #fff;
    border: none;
    padding: 6px 16px;
    width: 150px;
  }

  .total-tips p {
    margin: 0 0 0 10px;
    font-size: 22px;
    color: red;
    border-bottom: 1px solid red;
  }

  .total-hours p {
    margin: 0 0 0 10px;
    font-size: 22px;
    color: green;
    border-bottom: 1px solid green;
  }

  .add-total-tips {
    border: none;
    border-radius: 0;
    background: #dcdcdc;
    padding: 6px 16px;
    width: 150px;
  }

@media (max-width: 768px) {
    h1 {
        font-size: 36px;
        margin: 1rem 0;
    }

    .total-tips {
        margin-bottom: 1rem;
    } 
    
    .total-tips-input input {
        border: 1px solid #dcdcdc;
        transition: .5s;
    }

    .total-tips-input input[type="text"] {
      text-align: center;    
    }

    .total-tips-input input:focus {
        outline: 0;
        box-shadow: none; 
        border: 1px solid red;
        border-radius: 25px;
        transition: .5s;
    }

    .total-tips h2 {
        font-size: 1.7rem;
    }
    
    .total-hours h2 {
        font-size: 1.3rem;
    }    

    .end-day-btn,
    .add-total-tips {
        width: auto;
  }

  .total-tips-input {
    margin-bottom: 1rem;
  }

  
}
</style>