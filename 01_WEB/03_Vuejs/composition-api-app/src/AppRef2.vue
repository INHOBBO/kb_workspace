<template>
  <div>
    국어 : <input type="number" v-model.number="kor" /><br />
    영어 : <input type="number" v-model.number="eng" /><br />
    수학 : <input type="number" v-model.number="math" /><br />
    <h1>총점: {{ result }}</h1>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'AppRef2',

  setup() {
    const kor = ref(0);
    const eng = ref(0);
    const math = ref(0);

    const result = computed(() => {
      return kor.value + eng.value + math.value;
    });

    return { kor, eng, math, result };
  },
};
</script>
