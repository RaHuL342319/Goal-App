// interface CourseGoalProps {
//   title: string;
//   description: string;

import { type PropsWithChildren, type ReactNode } from "react";

type CourseGoalProps = PropsWithChildren<{
  title: string;
  id: number;
  onDelete: (id: number) => void;
}>;

export default function CourseGoal({
  title,
  children,
  id,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
