<template>
    <div class="container">
      <h1>记账应用</h1>
  
      <!-- 表单部分 -->
      <div class="form">
        <input v-model="description" placeholder="描述" />
        <input v-model.number="amount" type="number" placeholder="金额" />
        <select v-model="type">
          <option value="income">收入</option>
          <option value="expense">支出</option>
        </select>
        <button @click="addRecord">添加记录</button>
      </div>
  
      <!-- 记录列表 -->
      <div class="records">
        <h2>交易记录</h2>
        <ul>
          <li v-for="(record, index) in records" :key="index">
            {{ record.description }} - {{ record.amount }} ({{ record.type === 'income' ? '收入' : '支出' }})
            <button @click="deleteRecord(index)">删除</button>
          </li>
        </ul>
      </div>
  
      <!-- 统计信息 -->
      <div class="summary">
        <h2>统计信息</h2>
        <p>总收入：{{ totalIncome }}</p>
        <p>总支出：{{ totalExpense }}</p>
        <p>当前余额：{{ balance }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, computed } from 'vue';
  import { useAccountingStore } from '../stores/accounting';
  
  // 获取 Pinia Store
  const store = useAccountingStore();
  
  // 本地状态
  const description = ref('');
  const amount = ref<number>(0);
  const type = ref<'income' | 'expense'>('income');
  
  // 添加记录
  const addRecord = () => {
    if (description.value.trim() && amount.value > 0) {
      store.addRecord({
        description: description.value,
        amount: amount.value,
        type: type.value,
      });
      description.value = ''; // 清空输入框
      amount.value = 0;       // 重置金额
    }
  };
  
  // 删除记录
  const deleteRecord = (index: number) => {
    store.deleteRecord(index);
  };
  
  // 从 Pinia 中获取数据，并通过 computed 包装以保证响应式
  const records = computed(() => store.records);
  const totalIncome = computed(() => store.totalIncome);
  const totalExpense = computed(() => store.totalExpense);
  const balance = computed(() => store.balance);
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
  
  /* 表单样式 */
  .form {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  input, select {
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #ddd;
    width: 150px;
  }
  
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 4px;
    border: none;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  /* 记录列表样式 */
  .records {
    margin-bottom: 20px;
  }
  
  .records h2 {
    margin-bottom: 10px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 0.5rem;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  li button {
    background-color: #ff4d4d;
    border: none;
    padding: 0.5rem;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }
  
  li button:hover {
    background-color: #cc0000;
  }
  
  /* 统计信息样式 */
  .summary {
    padding: 1rem;
    background-color: #eef;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .summary h2 {
    margin-bottom: 10px;
  }
  
  .summary p {
    margin: 0.5rem 0;
    font-size: 1.1rem;
  }
  </style>
  