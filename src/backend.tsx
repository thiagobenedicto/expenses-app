export interface IExpensesData {
  id: number;
  descricao: string;
  categoria: string;
  valor: number;
  mes: string;
  dia: string;
}

export interface IExpenses {
  despesas: IExpensesData[];
}