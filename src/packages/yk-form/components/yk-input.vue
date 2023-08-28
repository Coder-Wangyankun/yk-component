<template>
  <el-input
      v-bind="$attrs"
      v-model="Val"
      style="width:100%"
      @blur="props.blur ? props.blur($event) : false"
      @focus="props.focus ? props.focus($event, Val) : false"
      @change="props.change ? props.change($event) : false"
      @input="props.input ? props.input($event) : false"
      @clear="props.clear ? props.clear() : false"
  />
</template>
<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
const emit = defineEmits(["update:modelValue"])
const props = defineProps({
  propName: {
      type: String,
      default: () => ''
  },
  ruleForm: {
    type: Object,
    default: () => {}
  },
  linkProps: {
      type: Object,
      default: () => {}
  },
  linkPropsChange: {
      type: Function,
      default: () => () => { }
  },
  defaultValue: {
      type: String,
      default: () => ''
  },
  blur: {
      type: Function,
      default: () => () => { }
  },
  focus: {
      type: Function,
      default: () => () => { }
  },
  change: {
      type: Function,
      default: () => () => { }
  },
  input: {
      type: Function,
      default: () => () => { }
  },
  clear: {
      type: Function,
      default: () => () => { }
  }
})
const Val = ref(props.defaultValue)
//监听父组件的值
watch(() => props.defaultValue, () => {
  Val.value = props.defaultValue
})

// 通过emit将值传递给父组件
emit("update:modelValue", Val)

/**实现 linkValueChange */
const initValueWatch = () => {
  // console.log('linkProps: ', props.linkProps)
  // console.log('ruleForm: ', props.ruleForm)
  if (props.linkProps) {
    Object.values(props.linkProps).map(item => {
      const watchKey = `props.ruleForm.${item}`
      console.log('props.ruleForm.country', props.ruleForm.country)
      watch(() => props.ruleForm.country, (val, oldVal) => {
        Val.value = props.linkPropsChange(props.ruleForm)
      })
    })
  }
}

onMounted(() => {
  initValueWatch()
})
</script>