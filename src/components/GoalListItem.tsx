import ButtonSecondary from "./ButtonSecondary";

export function GoalListItem({ title, description, dueDate, type }: { title: string; description: string; dueDate: string, type: string }) {

  const handleClick = () => {
    console.log('show details')
  }

  return (
    <div className='goal-list-item'>
      <p>{title}</p>
      <p>{description}</p>
      <p>Tipo: {type}</p>
      <div>
        Fecha de meta: {dueDate}
      </div>
      <ButtonSecondary onClick={handleClick}>+</ButtonSecondary>
    </div>
  )
}