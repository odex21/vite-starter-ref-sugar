<template>
  <div>{{ count }} * 2 = {{ doubled }}</div>
  <button @click="dec">
    Dec
  </button>
  <button @click="inc">
    Inc
  </button>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

ref: count = 0
ref: doubled = computed(() => count * 2)

$count.value
const inc = () => count++
const dec = () => (count -= 1)
type IPublishOptions = {
    appId: string;
    comment: string;
    fileList: any[];
    star: boolean;
}
onMounted(async () => {
  try {
    const res = await fetch('/api', {
      credentials: 'same-origin'
    }).catch((err) => {
      console.log(err)
    })
    if(res) {
      const json = await res.text()
      console.log('res', res.body, json)
    }

    const postList = await fetch('/api/p', {
      method: 'POST',
      body: JSON.stringify({
        appId:'123',
        comment:'',
        fileList: [],
        star: true
      } as IPublishOptions),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    console.log('p', postList)
  } catch (error) {
    console.log(error)
  }
})
</script>
