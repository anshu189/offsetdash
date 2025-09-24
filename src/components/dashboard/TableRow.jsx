import React from 'react';
import Badge from './Badge';
import CertificateDownloadButton from '../certificate/CertificateDownloadButton';

const TableRow = React.memo(({ item }) => {
    return (
        <tr>
            <td className="px-6 py-4 text-sm font-mono whitespace-nowrap">{item.unic_id}</td>
            <td className="px-6 py-4 text-sm">{item.project_name}</td>
            <td className="px-6 py-4 text-sm whitespace-nowrap">{item.vintage}</td>
            <td className="px-6 py-4 text-xs text-center whitespace-nowrap font-medium"><Badge status={item.status} /></td>
            <td className="px-6 py-4 text-right text-md whitespace-nowrap"><CertificateDownloadButton data={item} /></td>
        </tr>
    );
});

export default TableRow;