<template>
  <v-container fluid>
    <v-card class="pa-3">
      <!--  dense : col간 간격 8px, no-gutters 는 간격 0-->
      <v-row dense>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="pa-3">
      <v-row
        :style="{height: '120px'}"
        class="red"
        align="end"
      >
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Align으로 수직정렬
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
      <v-row
        :style="{height: '120px'}"
        class="yellow"
        align="center"
      >
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            중앙정렬
          </v-card>
        </v-col>
        <v-col
          align-self="end"
        >
          <v-card
            class="pa-3"
            outlined
          >
            끝족
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
      <v-row
        :style="{height: '120px'}"
        class="green"
        align="start"
      >
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            맨위
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-5 pa-3">
      <v-row
        justify="end"
        dense
      >
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            justify end
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>>
    <v-card class="mt-5 pa-3">
      <v-row
        justify="center"
        dense
      >
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            justify center
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-5 pa-3">
      <v-row
        justify="start"
        dense
      >
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            justify start
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-5 pa-3">
      <v-row
        justify="space-around"
        dense
      >
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            justify space around
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-5 pa-3">
      <v-row
        justify="space-between"
        dense
      >
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            justify space around
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <!--    <v-card class="mt-5 pa-3">-->
    <!--      <v-layout>-->
    <!--        <v-flex>-->
    <!--          <v-card class="pa-3" outlined>-->
    <!--            Col-->
    <!--          </v-card>-->
    <!--        </v-flex>-->
    <!--      </v-layout>-->
    <!--      <v-layout>-->
    <!--        <v-flex>-->
    <!--          <v-card class="pa-3" outlined>-->
    <!--            Col-->
    <!--          </v-card>-->
    <!--        </v-flex>-->
    <!--      </v-layout>-->
    <!--      <v-layout>-->
    <!--        <v-flex>-->
    <!--          <v-card class="pa-3" outlined>-->
    <!--            Col-->
    <!--          </v-card>-->
    <!--        </v-flex>-->
    <!--      </v-layout>-->
    <!--    </v-card>-->
  </v-container>
</template>

<script>
export default {
  name: "GridSystem"
}
</script>

<style scoped>

</style>
