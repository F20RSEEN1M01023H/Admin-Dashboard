import React from "react";
import { Clock } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "user",
    icon: User,
    title: "New User Registered",
    description: "John Smith created an account",
    time: "2 min ago",
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
];

const Activity = () => {
  return (
    <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 ">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50  ">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Activity Feed
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 ">
            Recent System Activities
          </p>
        </div>
        <button>View All</button>
      </div>
      <div className="p-6">
        <div className="space-y-4 ">
          <div className="flex items-start space-x-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ">
            <div className={`p-2 rounded-lg`}></div>
            <div className="flex-1 min-w-0 ">
              <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                Activity Title
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                Activity Description
              </p>
              <div className="flex items-center space-x-1 mt-1">
                <Clock className="w-3 h-3 text-slate-400" />
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Activity Time
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
