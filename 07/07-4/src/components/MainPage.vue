<template>
  <v-content>
    <v-container>
      <div class="text-center display-3 my-4">메인 페이지입니다.</div>
      <v-row>
        <v-col offset-sm="1" sm="10">
          <v-text-field label="제목" v-model="title"> </v-text-field>
        </v-col>
      </v-row>

      <div class="text-center">
        <v-btn large class="mt-5" color="purple" dark @click="setTitle">
          확인
        </v-btn>
      </div>
    </v-container>
  </v-content>
</template>

<script>
export default {
  date() {
    return {
      title: this.$store.getters.getData
    }
  },
  methods: {
    setTitle() {
      this.$store.commit('setData', this.title)
      this.$router.push('/sub')
    }
  }
}
</script>

<style></style>
