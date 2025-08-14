import React from "react";
import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const SortFilter = ({ sortOption, onSortChange }) => {
  const sortOptions = [
    { value: "mostOrdered", label: "الأكثر طلباً" },
    { value: "newest", label: "وصل حديثاً" },
    { value: "oldest", label: "من الأحدث إلى الأقدم" },
    { value: "priceHighToLow", label: "السعر من الأعلى إلى الأقل" },
    { value: "priceLowToHigh", label: "السعر من الأقل إلى الأعلى" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <h3 className="font-medium text-gray-900 mb-4 flex items-center">
        ترتيب
        <ChevronDown className="w-4 h-4 mr-2" />
      </h3>
      <Select value={sortOption} onValueChange={onSortChange}>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortFilter;