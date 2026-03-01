import ButtonSecondary from "./ButtonSecondary";

export function GoalListItem({ title, description, dueDate }: { title: string; description: string; dueDate: string }) {
  return (
    <div className='goal-list-item'>
      <p>{title}</p>
      <p>{description}</p>
      <div>
        Fecha de meta: {dueDate}
      </div>
      <ButtonSecondary>+</ButtonSecondary>
    </div>
  )
}