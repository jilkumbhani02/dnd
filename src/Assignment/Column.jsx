import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React from "react";
import Task from "./Task";

const Column = ({ info }) => {
  return (
    <div className="column">
      <SortableContext items={info} strategy={verticalListSortingStrategy}>
        {info.map((item) => {
          return (
            <Task
              key={item.id}
              id={item.id}
              age={item.age}
              phone={item.phone}
              name={item.name}
            />
          );
        })}
      </SortableContext>
    </div>
  );
};

export default Column;
