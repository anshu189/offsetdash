import React from 'react';

export default function SummaryCard({ title, value }) {
    const valueHoverClass =
        title.toLowerCase().includes("active credits")
            ? "group-hover:text-primaryblue"
            : title.toLowerCase().includes("retired credits")
                ? "group-hover:text-red-600"
                : "group-hover:text-textblack";
    return (
        <div className="group cursor-pointer flex flex-col gap-4 bg-retiredlight duration-300 p-6 rounded-xl">
            <div className="w-fit text-md text-textblack px-3 py-1 rounded-md bg-retireddark">{title}</div>
            <div className={`text-4xl font-bold ${valueHoverClass} duration-300`}>{value}</div>
        </div>
    );
}