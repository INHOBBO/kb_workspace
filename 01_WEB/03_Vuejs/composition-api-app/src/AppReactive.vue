<template>
  <div>
    국어 : <input type="number" v-model.number="score.kor" /><br />
    영어 : <input type="number" v-model.number="score.eng" /><br />
    수학 : <input type="number" v-model.number="score.math" /><br />
    <h1>총점: {{ result }}</h1>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  setup() {
    // const kor = ref(0);
    //   const eng = ref(0);
    //   const math = ref(0);

    const score = reactive({ kor: 0, eng: 0, math: 0 });

    const result = computed(() => {
      return score.kor + score.eng + score.math;
    });

    return { score, result };
  },
};
</script>
