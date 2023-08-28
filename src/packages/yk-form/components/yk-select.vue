<template>
  <el-select
      v-bind="$attrs"
      v-model="Val"
      style="width:100%"
  >
  <el-option
      v-for="item in options"
      :key="item[valueFiled]"
      :label="item[labelFiled]"
      :value="item[valueFiled]"
    />
  </el-select>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
const emit = defineEmits(["update:modelValue"])
interface Props {
    defaultValue: string
    labelFiled: string
    valueFiled: string
    options: Array<any>
    [key: string]: any
}
interface Opts {
    [key: string]: string
}
const props = withDefaults(defineProps<Props>(), {
    defaultValue: '',
    labelFiled: 'label',
    valueFiled: 'value',
    options: () => []
})

const Val = ref(props.defaultValue)
//监听父组件的值
watch(() => props.defaultValue, () => {
  Val.value = props.defaultValue
})

// 通过emit将值传递给父组件
emit("update:modelValue", Val)
</script>