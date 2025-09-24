import React from 'react';
import Badge from './Badge';
import CertificateDownloadButton from '../certificate/CertificateDownloadButton';

const TableRow = React.memo(({ item }) => {
    return (
        <tr>
            <td className="p-3">{item.unic_id}</td>
            <td className="p-3">{item.project_name}</td>
            <td className="p-3">{item.vintage}</td>
            <td className="p-3"><Badge status={item.status} /></td>
            <td className="p-3"><CertificateDownloadButton data={item} /></td>
        </tr>
    );
});

export default TableRow;