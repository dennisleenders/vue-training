<template>
  <div>
    <h1>Home</h1>
    <!-- v-for zorgt voor een loop binnen een loopable object binnen je data object -->
    <!-- een v-for heeft een :key nodig, dit is een unieke waarde binnen een entry in je data object -->
    <!-- als er geen unieke waarde is kan je de v-for entry wrappen => (entry, index) in entries <= en kan je die gebruiken in je :key => :key=index -->
    <!-- een : voor een attribute betekend dat vue hem uit je data wilt halen, databinding -->
    <div class="entry" v-for="entry in entries" :key="entry.id">
      <div class="details">
        <div class="name">{{entry.name}}</div>
        <div class="department">{{entry.department}}</div>
      </div>
      <button @click="removeEntry(entry)">remove</button>
    </div>

    <div class="new-user">
      <h2>voeg deelnemer toe</h2>
      <p>name</p>
      <input type="text" v-model="newEntry.name">
      <p>department</p>
      <input type="text" v-model="newEntry.department">
      <button @click="addEntry">add</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data(){
      return {
        name: 'Vue cursus',
        newEntry: {
          name:'',
          department:''
        },        
        entries: [{
          id:1,
          name: 'Dennis',
          department: 'engagement'
        },{
          id:2,
          name: 'Jeffrey',
          department: 'engagement'
        },{
          id:3,
          name: 'Nick',
          department: 'engagement'
        },{
          id:4,
          name: 'Tom',
          department: 'platform'
        },{
          id:5,
          name: 'Pim',
          department: 'platform'
        }]
      }
    },
    methods: {
      addEntry() {
        this.entries.push({
          id:11,
          name:this.newEntry.name,
          department:this.newEntry.department
        })
      },
      removeEntry(entry) {
        this.entries = this.entries.filter(item => item.id != entry.id);
      }      
    }
  }
</script>

<style lang="scss" scoped>
  .entry {
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-radius: 8px;
    border:1px solid black;
    margin:6px;
    padding:12px;
    .details {
      .name {
        font-size: 18px;

      }
      .department {
        font-size: 16px;
      }
    }
  }
</style>