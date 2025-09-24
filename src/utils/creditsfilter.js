export function creditFilter(data, { search = '', year = 'All', status = 'All' }) {
    const s = search?.trim().toLowerCase();
    return data.filter(item => {
        if (s && !item.project_name.toLowerCase().includes(s)) return false;
        if (year !== 'All' && String(item.vintage) !== String(year)) return false;
        if (status !== 'All' && item.status !== status) return false;
        return true;
    });
}
