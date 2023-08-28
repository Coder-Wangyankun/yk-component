<template>
  <div class="home">
    <yk-form :formConfig="formConfig"></yk-form>
    <!-- {{ formConfig}} -->
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formConfig = reactive([
  {
    id: "1",
    type: 'input',
    propName: 'country',
    defaultValue: "",
    placeholder: "国家",
    disabled: false,
    clearable: true,
    width: '200px'
  },
  {
    id: "1",
    type: 'input',
    propName: 'province',
    defaultValue: "",
    placeholder: "省份",
    disabled: false,
    clearable: true,
    width: '200px',
    linkProps: {
      propName: "country"
    },
    linkPropsChange(data) {
      const res = data.country + '的首都'
      return res
    }
  },
  {
    id: "3",
    type: 'select',
    propName: 'city',
    defaultValue: "",
    placeholder: "城市",
    disabled: false,
    width: '200px',
    labelFiled: "label",
    valueFiled: "value",
    options: [
      {
        label: '北京',
        value: '1'
      },
      {
        label: '上海',
        value: '2'
      }
    ]
  }
])
</script>
