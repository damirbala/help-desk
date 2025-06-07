// components/universal-data-table.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { ChevronDown, Settings2 as ColumnSettingsIcon } from 'lucide-react'; // Default icons

// Define a generic type for data items
type DataItem = {
  [key: string]: any; // Allows any string as a key, and any value
};

export interface ColumnDefinition<T extends DataItem> {
  key: string; // Corresponds to a key in the data item
  header: string; // Text to display in the table header
  sortable?: boolean;
  renderCell?: (item: T, value: any) => React.ReactNode; // Custom renderer for the cell content
  className?: string; // CSS class for the TableCell
  headerClassName?: string; // CSS class for the TableHead
  isPrimaryLink?: boolean; // If true, this cell's content will be a link
}

interface UniversalDataTableProps<T extends DataItem> {
  columns: ColumnDefinition<T>[];
  data: T[];
  basePathForRowLink?: string; // e.g., "/equipments" - used if a column has isPrimaryLink
  idKey?: string; // Key in data item for unique ID (for Link and row key), defaults to 'id'
  renderRowActions?: (item: T) => React.ReactNode; // Function to render action buttons/icons for a row
  actionColumnHeader?: React.ReactNode; // Content for the header of the actions column (e.g., a settings button)
  // Future props: onSort, currentSortKey, currentSortDirection
}

const SortableHeader = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <TableHead className={`cursor-pointer hover:bg-gray-50 ${className || ''}`}>
    <div className="flex items-center">
      {children}
      <ChevronDown className="h-3 w-3 ml-1 text-gray-400" />
    </div>
  </TableHead>
);

export function UniversalDataTable<T extends DataItem>({
  columns,
  data,
  basePathForRowLink,
  idKey = 'id',
  renderRowActions,

}: UniversalDataTableProps<T>) {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-md">
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow>
            {columns.map((col) => 
              col.sortable ? (
                <SortableHeader key={col.key} className={col.headerClassName}>{col.header}</SortableHeader>
              ) : (
                <TableHead key={col.key} className={col.headerClassName}>{col.header}</TableHead>
              )
            )}
            {renderRowActions && (
              <TableHead className="text-right px-4 py-3"> {/* Adjusted padding for consistency */}
                
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <ColumnSettingsIcon className="h-4 w-4 text-gray-500" />
                  </Button>
                
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item[idKey] as React.Key} className="hover:bg-gray-50 group">
              {columns.map((col) => (
                <TableCell key={col.key} className={`py-3 px-4 ${col.className || ''}`}>
                  {col.renderCell ? (
                    col.renderCell(item, item[col.key])
                  ) : col.isPrimaryLink && basePathForRowLink && item[idKey] ? (
                    <Link href={`${basePathForRowLink}/${item[idKey]}`} className="hover:underline group-hover:text-blue-600 transition-colors font-medium text-gray-900">
                      {String(item[col.key])}
                    </Link>
                  ) : (
                    <span className="text-gray-700">{String(item[col.key])}</span>
                  )}
                </TableCell>
              ))}
              {renderRowActions && (
                <TableCell className="text-right py-3 px-4">
                  {renderRowActions(item)}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}