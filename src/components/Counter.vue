﻿<template>
    <div>
        <h2>计数器：{{ counterStore.count }}</h2>
        <h2>双倍计数：{{ counterStore.doubleCount }}</h2>
        <button @click="counterStore.increament">增加</button>
        <button @click="counterStore.decreament">减少</button>

    </div>
</template>

<script  setup lang="ts">
import { useCounterStore } from '../stores/useCounter';

const counterStore =useCounterStore();


</script>


<style scoped>
</style>