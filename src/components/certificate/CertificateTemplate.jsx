import { Leaf, Award, Calendar, Hash } from "lucide-react"
import React from 'react';

export default function CertificateTemplate({ credit, generatedAt }) {
    const isActive = 1 ? credit.status == 'Active' : 0;

    return (
        <div className="max-w-[800px] flex flex-col items-stretch gap-2 p-8 bg-white text-textblack rounded-xl shadow-md border-2 border-accentgreen">

            {/* Certificate Header */}
            <div className="flex flex-col justify-center gap-2 text-center">
                <div className="flex justify-center items-center">
                    <span className="p-2 bg-[#d9ffe0] rounded-lg">
                        <Leaf className="h-5 w-5 text-[#00bf63]" />
                    </span>
                </div>
                <h2 className="text-lg font-bold text-textblack">Carbon Credit Retirement Certificate</h2>
                <p className="text-xs text-subtext">Official Certificate of Carbon Credit Retirement</p>
            </div>

            <hr className="mt-2 border-retireddark" />

            {/* Certificate Body */}
            <div className="px-2 text-justify mb-4">
                <p className="text-[14px] text-textblack">
                    This certificate confirms the retirement of carbon credits from the project detailed below,
                    representing a verified contribution to global carbon reduction efforts.
                </p>
            </div>

            {/* Certificate Details */}
            <div className="grid grid-cols-2 gap-96 text-[10px] font-medium text-subtext my-2">
                <div className="flex flex-col gap-8">
                    <div>
                        <div className="flex items-center gap-1">
                            <Hash className="h-2.5 w-2.5 text-accentgreen" />
                            <p className="text-subtext uppercase">UNIC ID</p>
                        </div>
                        <p className="font-mono">{credit.unic_id}</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-1">
                            <Calendar className="h-2.5 w-2.5 text-accentgreen" />
                            <p className="text-subtext uppercase">Vintage Year</p>
                        </div>
                        <p>{credit.vintage}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div>
                        <div className="flex items-center gap-1">
                            <Leaf className="h-2.5 w-2.5 text-accentgreen" />
                            <p className="text-subtext uppercase">Project Name</p>
                        </div>
                        <p>{credit.project_name}</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-1">
                            <Award className="h-2.5 w-2.5 text-accentgreen" />
                            <p className="text-subtext uppercase">Status</p>
                        </div>
                        <p
                            className={`${isActive
                                ? 'text-accentgreen'
                                : 'text-textblack'
                                }`}
                        >{credit.status}
                        </p>
                    </div>
                </div>
            </div>


            <hr className="mt-10 border-retiredlight" />

            {/* Certificate Footer */}
            <div className="grid grid-cols-2 text-[10px] text-subetxt">
                <div>
                    <p className="font-medium">Certificate Generated</p>
                    <p>{generatedAt}</p>
                </div>
                <div className="text-right">
                    <p className="font-medium">Verified by</p>
                    <p>Offset Pvt. Ltd.</p>
                </div>
            </div>

            <hr className="my-3 border-retiredlight" />

            <div className="text-center">
                <p className="text-subtext text-[8px] italic">
                    This certificate serves as official documentation of carbon credit retirement and environmental impact contribution.
                </p>
            </div>
        </div>
    );
}
