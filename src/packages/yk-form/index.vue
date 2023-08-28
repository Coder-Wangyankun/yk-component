<template>
  <div class="yk-form">
    formConfig: {{ formConfig }}
    <component
      v-for="item in formConfig"
      :is="components[item.type]"
      v-bind="item"
      v-model="item.defaultValue"
      :key="item.id"
      :rule-form="ruleForm"
      :style="{width: item.width ? item.width : '100%'}"
      class="component"
    ></component>
  </div>
  {{ ruleForm }}
</template>

<script lang="ts" setup>
import {onMounted, ref, watch} from 'vue'
import ykInput from "./components/yk-input.vue";
import ykSelect from "./components/yk-select.vue";

interface component {
  [key:string]: any
}
const components:component = {
  'input': ykInput,
  'select': ykSelect,
}

const props = defineProps<{
  formConfig: Array<component>
}>();

watch(() => props.formConfig, () => {
  initRuleForm(props.formConfig)
},{
  deep: true
})

const ruleForm = ref({})
/**实现联动的核心 */
const initRuleForm = (data) => {
  data.map(item => {
    if (item.propName) {
      ruleForm.value = {
        ...ruleForm.value,
        [item.propName]: item.defaultValue,
      }
    }
    // if (item.linkProps) {
    //   Object.values(item.linkProps).map(k => {
    //     ruleForm.value = {
    //       ...k,
    //       ...ruleForm.value
    //     }
    //   })
    // }
  })
}

initRuleForm(props.formConfig)
// console.log('form页面：', ruleForm.value)

</script>

<style lang="less" scoped>
</style>
