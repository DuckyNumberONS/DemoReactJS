import React, { memo } from "react";

const date = new Date();
const day = ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Header() {
  return (
    <header
      className="bg-todo-header-day bg-cover bg-center border-b-1 border-gray-300 px-4 py-6"
      style={{
        backgroundColor: "black",
      }}
    >
      <h1 className="text-2xl text-white" data-testid="calendar-date">
        {day[date.getDay()]}, {date.getDate()}
      </h1>
      <p className="pt-1 text-lg text-gray-100" data-testid="calendar-month">
        {month[date.getMonth()]}
      </p>
    </header>
  );
}
export default memo(Header);
