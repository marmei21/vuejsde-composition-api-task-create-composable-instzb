<template>
  <h1>Lorem ipsum</h1>
  <div>...</div>
  <hr />
  <div>
    <button @click="togglePrivileges">Toggle privileges</button>
    <button @click="toggleSessions">Toggle sessions</button>
    <button @click="togglePurchases">Toggle purchases</button>
  </div>
  <hr />
  <div v-if="showPrivileges">
    <h2>User privileges</h2>
    <div>List of settings...</div>
  </div>
  <div v-if="showSessions">
    <h2>Active Sessions</h2>
    <div>List of active sessions...</div>
  </div>
  <div v-if="showPurchases">
    <h2>Purchases</h2>
    <div>List of purchases...</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useToggle } from '@/composables/use-toggle';
export default defineComponent({
  setup() {
    //const showPrivileges = false;
    //const showSessions = true;
    //const showPurchases = true;
    const { on: showPrivileges, toggle: togglePrivileges } = useToggle(false);
    const { on: showSessions, toggle: toggleSessions } = useToggle(true);
    const { on: showPurchases, toggle: togglePurchases } = useToggle(true);

    /*
    function togglePrivileges() {
      console.log('toggle privileges');
    }
    */

    /*
    function toggleSessions() {
      console.log('toggle sessions');
    }
    */

    /*
    function togglePurchases() {
      console.log('toggle purchases');
    }*/

    return {
      showPrivileges,
      togglePrivileges,
      showSessions,
      toggleSessions,
      showPurchases,
      togglePurchases,
    };
  },
});
</script>

<style></style>
