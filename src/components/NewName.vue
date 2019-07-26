<template>
	<div class="row new-names">
        <div class="col-sm-10 offset-sm-1">
		<form>
            <div class="col-sm-12 col-md-6 offset-md-3 form-group">
                <label>Name</label>
                <input class="form-control" type="text" v-model="person.name"/>
            </div>
              <div class="col-sm-12 col-md-6 offset-md-3 form-group">
                <label>Hour</label>
                <input class="form-control" v-model.number="person.hours"/>
            </div>
            <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
                <button class="btn add-btn" @click.prevent="createNew">Add Name</button>
            </div>
        </form>
        </div>
	</div>
</template>


<script>

export default {
        data() {
            return {
                person: {
                    name: '',
                    hours: '',
                    final: ''
                 } 
            };  
        },
        methods: {
            createNew() {
                this.$emit('nameAdded', this.person);
                this.person = {
                    name: '',
                    hours: '',
                    final: ''
                };      
            }            
        }
	}
</script>


<style>
    .new-names {
        border-bottom: 2px dashed green;
        margin-bottom: 1rem;
    }

    .new-names input {
        border: 1px solid #dcdcdc;
        transition: .5s;
    }

       .new-names input[type='text'] {
        color: green;
    }

    .new-names input:focus {
        outline: 0;
        box-shadow: none; 
        border: 1px solid green;
        border-radius: 25px;
        transition: .5s;
    }

    .add-btn {
        display: block;
        margin: 0 auto;
        border-radius: 0;
        background: #000;
        color: #fff;
        margin-top: 2rem;
    }	

</style>