<template>
  <div class="home">
    <field-add-task/>
    <lists-tasks  v-if="$store.state.tasks.length" />
    <no-tasks v-else/>
    <btn-done-sorting v-if="$store.state.sorting"/>
    </div>
</template>

<script>
// import FieldAddTask from '@/components/FieldAddTask.vue'

export default {
  name: "Home",
  
  components: { 
// 'field-add-task': FieldAddTask
'field-add-task': require('@/components/Todo/FieldAddTask.vue').default,
'lists-tasks': require('@/components/Todo/ListTasks.vue').default,
'no-tasks': require('@/components/Todo/NoTasks.vue').default,
'btn-done-sorting': require('@/components/Todo/BtnDoneSorting.vue').default
  }
};
</script>


