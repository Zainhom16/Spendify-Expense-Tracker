"use client";
import { db } from "@/utils/dbConfix";
import { Budgets, Expenses } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq, desc, getTableColumns, sql } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import ExpenseListTable from "./_components/ExpenseListTable";

function page() {
  /**************GETTING BUDGET LIST**************/

  const { user } = useUser();
  const [budgetList, setBudgetList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);

  useEffect(() => {
    getBudgetList();
  }, [user]);

  /**************GETTING BUDGET LIST**************/
  const getBudgetList = async () => {
    const result = await db
      .select({
        ...getTableColumns(Budgets),
        totalSpend: sql`sum(${Expenses.amount}::NUMERIC)`.mapWith(Number),
        totalItem: sql`count(${Expenses.id})`.mapWith(Number),
      })
      .from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
      .groupBy(Budgets.id)
      .orderBy(desc(Budgets.id));
    setBudgetList(result);
    getAllExpenses();
  };

  /**************GETTING ALL EXPENSES TO DISPLAY IT IN DASHBOARD**************/
  const getAllExpenses = async () => {
    const result = await db
      .select({
        id: Expenses.id,
        name: Expenses.name,
        amount: Expenses.amount,
        createdAt: Expenses.createdAt,
      })
      .from(Budgets)
      .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(Expenses.id));
    setExpensesList(result);
  };
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">All Expenses</h1>
      <ExpenseListTable
        expensesList={expensesList}
        refreshData={() => getBudgetList()}
      />
    </div>
  );
}

export default page;
