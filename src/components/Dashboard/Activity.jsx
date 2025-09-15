import React from "react";

import {
  Clock,
  User,
  FileText,
  Settings,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

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
  {
    id: 2,
    type: "document",
    icon: FileText,
    title: "Document Uploaded",
    description: "Quarterly Report.pdf was uploaded",
    time: "10 min ago",
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/30",
  },
  {
    id: 3,
    type: "settings",
    icon: Settings,
    title: "Settings Changed",
    description: "Admin updated system settings",
    time: "30 min ago",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
  },
  {
    id: 4,
    type: "alert",
    icon: AlertCircle,
    title: "Security Alert",
    description: "Suspicious login detected",
    time: "1 hour ago",
    color: "text-red-500",
    bgColor: "bg-red-100 dark:bg-red-900/30",
  },
  {
    id: 5,
    type: "success",
    icon: CheckCircle,
    title: "Backup Completed",
    description: "System backup finished successfully",
    time: "2 hours ago",
    color: "text-teal-500",
    bgColor: "bg-teal-100 dark:bg-teal-900/30",
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
        <button className="text-blue-500 font-semibold hover:text-purple-500">
          View All
        </button>
      </div>
      <div className="p-6">
        <div className="space-y-4 ">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors "
            >
              <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                <activity.icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0 ">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                  {activity.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                  {activity.description}
                </p>
                <div className="flex items-center space-x-1 mt-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;
