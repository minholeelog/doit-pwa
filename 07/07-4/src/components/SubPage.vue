<template>
  <v-content>
    <v-container>
      <div class="text-center display-1 my-4">서브 페이지입니다.</div>
      <v-divider></v-divider>

      <div class="text-center display-3 my-4">{{ title }}</div>
      <div class="text-center">
        <v-btn fab large class="mt-5" color="teal" dark to="/main">
          <v-icon>mdi-replay</v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      title: this.$store.getters.getData
    }
  }
}
</script>

<style></style>
