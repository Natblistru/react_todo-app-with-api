import classNames from 'classnames';
import { Todo } from '../types/Todo';
import { FilteredValue } from '../App';

interface Props {
  isDisableBtn: boolean;
  activeTodos: Todo[];
  setFilter: React.Dispatch<React.SetStateAction<FilteredValue>>;
  filter: FilteredValue;
  handleComletedDelete: () => void;
}

export const Footer: React.FC<Props> = ({
  isDisableBtn,
  activeTodos,
  setFilter,
  filter,
  handleComletedDelete,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {activeTodos.length} items left
      </span>

      {/* Active link should have the 'selected' class */}
      <nav className="filter" data-cy="Filter">
        {Object.values(FilteredValue).map(value => (
          <a
            data-cy={`FilterLink${value}`}
            key={value}
            href={`#/${value.toLowerCase()}`}
            className={classNames('filter__link', {
              selected: filter === value,
            })}
            onClick={() => setFilter(value)}
          >
            {value}
          </a>
        ))}
      </nav>

      {/* this button should be disabled if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={isDisableBtn}
        onClick={handleComletedDelete}
      >
        Clear completed
      </button>
    </footer>
  );
};
