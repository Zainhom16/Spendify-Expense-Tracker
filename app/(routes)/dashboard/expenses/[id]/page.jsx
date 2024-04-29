"use client";
import { db } from "@/utils/dbConfix";
import { Budgets, Expenses } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, getTableColumns, sql } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { eq } from "drizzle-orm";
import BudgetItem from "../../budgets/_components/BudgetItem";
import AddExpense from "../_components/AddExpense";
import ExpenseListTable from "../_components/ExpenseListTable";
import { Button } from "@/components/ui/button";
import { Pen, PenBox, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import EditBudget from "../_components/EditBudget";

function expenses({ params }) {
  const { user } = useUser();
  const [budgetInfo, setBudgetInfo] = useState();
  const [expensesList, setExpensesList] = useState([]);
  const route = useRouter();
  const router = useRouter();

  useEffect(() => {
    user && getBudgetInfo();
  }, [user]);

  /*************GET BUDGET INFORMATION*************/
  const getBudgetInfo = async () => {
    const result = await db
      .select({
        ...getTableColumns(Budgets),
        totalSpend: sql`sum(${Expenses.amount}::NUMERIC)`.mapWith(Number),
        totalItem: sql`count(${Expenses.id})`.mapWith(Number),
      })
      .from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
      .where(eq(Budgets.id, params.id))
      .groupBy(Budgets.id);

    setBudgetInfo(result[0]);
    getExpensesList();
  };

  /*************GET EXPENSES*************/
  const getExpensesList = async () => {
    const result = await db
      .select()
      .from(Expenses)
      .where(eq(Expenses.budgetId, params.id))
      .orderBy(desc(Expenses.id));
    setExpensesList(result);
  };

  /*************DELETE BUDGET*************/
  const deleteBudget = async () => {
    const deleteExpenseResult = await db
      .delete(Expenses)
      .where(eq(Expenses.budgetId, params.id))
      .returning();

    if (deleteExpenseResult) {
      const result = await db
        .delete(Budgets)
        .where(eq(Budgets.id, params.id))
        .returning();
    }
    toast("Budget Deleted");
    route.replace("/dashboard/budgets");
  };
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold flex justify-between items-center">
        <div>
          <span
            className="mr-4 font-bold text-3xl cursor-pointer"
            onClick={() => router.back()}
          >
            &larr;
          </span>
          My Expenses
        </div>

        <div className="flex gap-2 items-center">
          <EditBudget
            budgetInfo={budgetInfo}
            refreshData={() => getBudgetInfo()}
          />
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="flex gap-2" variant="destructive">
                <Trash2 />
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your current budget and all expenses and remove your data from
                  our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="px-4 py-2 rounded-md">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                  onClick={() => deleteBudget()}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5">
        {budgetInfo ? (
          <BudgetItem budget={budgetInfo} />
        ) : (
          <div className="h-[150px] w-full bg-slate-200 rounded-lg animate-pulse"></div>
        )}
        <AddExpense
          budgetId={params.id}
          user={user}
          refreshData={() => getBudgetInfo()}
        />
      </div>
      <div className="mt-4">
        <ExpenseListTable
          expensesList={expensesList}
          refreshData={() => getBudgetInfo()}
        />
      </div>
    </div>
  );
}

export default expenses;
