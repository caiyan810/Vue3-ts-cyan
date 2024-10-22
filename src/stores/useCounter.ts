import { defineStore } from "pinia";

interface CounterState{
    count: number;
}

//定义一个store 名为counter
export const useCounterStore = defineStore('counter',{
    state: (): CounterState => ({
        count: 0,
    }),


  getters: {
     doubleCount: (state:CounterState):number => state.count*2,
  },
   
  actions: {
    increament() {
        this.count++;
    },
    decreament() {
        this.count--;
    },
  },
});