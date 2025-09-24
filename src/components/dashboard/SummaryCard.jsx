import React from 'react';

export default function SummaryCard({ title, value }) {
    const valueHoverClass =
        title.toLowerCase().includes("active credits")
            ? "group-hover:text-primaryblue"
            : title.toLowerCase().includes("retired credits")
                ? "group-hover:text-red-600"
                : "group-hover:text-textblack";
    return (
        <div className="group cursor-pointer flex flex-col gap-4 bg-white hover:bg-border-[1px] hover:border-inputtext duration-300 p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="text-md text-subtext">{title}</div>
            <div className={`text-4xl font-bold ${valueHoverClass} duration-300`}>{value}</div>
        </div>
    );
}