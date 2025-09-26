import { useMemo } from 'react';

export default function usePagination(data, pageSize, page) {
    return useMemo(() => {
        const total = data.length;
        const totalPages = Math.max(1, Math.ceil(total / pageSize));
        const start = (page - 1) * pageSize;
        const paginated = data.slice(start, start + pageSize);
        return { paginated, total, totalPages };
    }, [data, pageSize, page]);
}