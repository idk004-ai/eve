import React from 'react';

// Define a type for date utilities
interface DateUtils {
  formatDate: (date: Date | null) => string;
  getDayOfWeek: (date: Date) => string;
}

const useDateUtils = (): DateUtils => {
  // Format date as "DD/MM/YYYY"
  const formatDate = (date: Date | null): string => {
    if (!date) return 'Chọn ngày';
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  // Get day of week in Vietnamese
  const getDayOfWeek = (date: Date): string => {
    const days = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
    return days[date.getDay()];
  };

  return {
    formatDate,
    getDayOfWeek
  };
};

export default useDateUtils;
