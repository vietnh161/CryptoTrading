import classNames from "classnames";
import React from "react";
const users = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "vana@gmail.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "thib@gmail.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "vanc@gmail.com",
    role: "Viewer",
    status: "Active",
  },
];
export default function Home() {
  return (
    <div className="mx-auto lg:max-w-2/3 px-4 py-6 sm:px-6 lg:px-8 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold font-sans text-gray-800">
              Tiêu đề Card {item}
            </h3>
          </div>
        ))}
      </div>
      <div className="w-full mt-8">
        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full border-collapse bg-white text-left font-inter">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Người dùng
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Vai trò
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-900 uppercase tracking-wider text-center">
                  Trạng thái
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-900 uppercase tracking-wider text-right">
                  Thao tác
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm italic">
                    {user.role}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={classNames(
                        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold",
                        {
                          "bg-green-100 text-green-700":
                            user.status === "Active",
                          "bg-gray-100 text-gray-600": user.status !== "Active",
                        }
                      )}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-all hover:underline">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
