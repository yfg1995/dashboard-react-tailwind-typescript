export type UserProfitUpdate = {
  userName: string;
  position: string;
  profit: {
    updatedProfit: number;
    lastUpdateNum: number;
  };
  tasks: {
    tasksCompleted: number;
    totalTasks: number;
  };
};
