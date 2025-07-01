import React from "react";

const orders = [
  {
    orderId: "#5478",
    courseName: "App Development",
    price: "$100.99",
    senderName: "John Doe",
    taxAmt: "$10.00",
    receivableAmt: "$90.99",
    status: "Success",
    date: "January 27, 2024",
  },
  {
    orderId: "#4585",
    courseName: "Graphic",
    price: "$200.99",
    senderName: "Alice Smith",
    taxAmt: "$20.00",
    receivableAmt: "$180.99",
    status: "Processing",
    date: "May 27, 2024",
  },
  {
    orderId: "#9656",
    courseName: "App Development",
    price: "$100.99",
    senderName: "Bob Brown",
    taxAmt: "$8.50",
    receivableAmt: "$92.49",
    status: "On Hold",
    date: "January 27, 2024",
  },
  {
    orderId: "#4585",
    courseName: "Graphic",
    price: "$200.99",
    senderName: "Sarah Johnson",
    taxAmt: "$15.00",
    receivableAmt: "$185.99",
    status: "Canceled",
    date: "May 27, 2024",
  },
];

const statusClasses = {
  Success: "bg-green-100 text-green-700",
  Processing: "bg-purple-100 text-purple-700",
  "On Hold": "bg-yellow-100 text-yellow-700",
  Canceled: "bg-red-100 text-red-700",
};

export default function InstructorPayments() {
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">Order History</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">Order ID</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">Course Name</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">Price</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">Sender Name</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">Tax Amount</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">Receivable Amount</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">Status</th>
              <th className="px-4 py-3 text-left font-medium text-gray-700 whitespace-nowrap">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((order, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-700">{order.orderId}</td>
                <td className="px-4 py-3 whitespace-nowrap">{order.courseName}</td>
                <td className="px-4 py-3 whitespace-nowrap">{order.price}</td>
                <td className="px-4 py-3 whitespace-nowrap">{order.senderName}</td>
                <td className="px-4 py-3 whitespace-nowrap">{order.taxAmt}</td>
                <td className="px-4 py-3 whitespace-nowrap">{order.receivableAmt}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${statusClasses[order.status] || "bg-gray-100 text-gray-700"}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-500">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
