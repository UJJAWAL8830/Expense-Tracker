import { pgTable, serial, varchar, integer } from 'drizzle-orm/pg-core';

export const budgets = pgTable('budgets', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  amount: integer('amount').notNull(),
  icon : varchar('icon').notNull(),
  createdBy : varchar('created_by').notNull(),
});

// export const expenses = pgTable('expenses', {
//   id: serial('id').primaryKey(),
//   budgetId: integer('budget_id').references(() => budgets.id),
//   name: text('name').notNull(),
//   amount: integer('amount').notNull(),
// });