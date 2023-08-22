"use client";

import { ColumnDef } from "@tanstack/react-table";

export type OrderColumn = {
  id: string;
  phone: string;
  address: string;
  isPaid: boolean;
  totalPrice: string;
  products: string;
  createdAt: string;
};

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "products",
    header: "Products"
  },
  {
    accessorKey: "phone",
    header: "phone"
  },
  {
    accessorKey: "address",
    header: "Products"
  },
  {
    accessorKey: "totalPrice",
    header: "price"
  },
  {
    accessorKey: "isPaid",
    header: "Paid"
  },
  {
    accessorKey: "createdAt",
    header: "Date"
  }
];
