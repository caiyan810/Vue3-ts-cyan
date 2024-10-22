import { defineStore } from 'pinia';
import { computed } from 'vue';  // 引入 computed 函数

interface Record {
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

export const useAccountingStore = defineStore('accounting', {
  state: () => ({
    records: [] as Record[],  // 状态类型为 Record 数组
  }),
  getters: {
    totalIncome: (state) => {
      return computed(() => 
        state.records
          .filter(record => record.type === 'income')
          .reduce((acc, record) => acc + record.amount, 0)
      ).value;
    },
    totalExpense: (state) => {
      return computed(() => 
        state.records
          .filter(record => record.type === 'expense')
          .reduce((acc, record) => acc + record.amount, 0)
      ).value;
    },
    balance: (state) => {
      return computed(() => 
        state.records
          .filter(record => record.type === 'income')
          .reduce((acc, record) => acc + record.amount, 0) -
        state.records
          .filter(record => record.type === 'expense')
          .reduce((acc, record) => acc + record.amount, 0)
      ).value;
    },
  },
  actions: {
    addRecord(record: Record) {
      this.records.push(record);
    },
    deleteRecord(index: number) {
      this.records.splice(index, 1);
    },
  },
  persist:{
    key: 'my-finance-store',
    storage: localStorage,
  }
});
