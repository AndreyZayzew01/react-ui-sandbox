import { useState } from "react";
import { useUsers } from "../../../../shared/providers/UsersContext";
import { FilterChip } from "../../../../features/ui/FilterChip/FilterChip";
import { SortChip } from "../../../../features/ui/SortChip/SortChip";

type SortState = {
  byAge: boolean;
  byRoleAdmin: boolean;
  byIsActive: boolean;
  byRoleGuest: boolean;
  byRating: boolean;
  byRegisteredAt: boolean;
};

export function SortingAndFiltersSection() {
  const [sortState, setSortState] = useState<SortState>({
    byAge: false,
    byRoleAdmin: false,
    byIsActive: false,
    byRoleGuest: false,
    byRating: false,
    byRegisteredAt: false,
  });
  const { allUsers, setUsers } = useUsers();
  const filters = [
    { key: "byRoleAdmin", label: "Оставить только адинистраторов" },
    { key: "byIsActive", label: "Оставить только активных пользователей" },
    { key: "byRoleGuest", label: "Оставить только гостей" },
    { key: "byRating", label: "Сортировка по рейтингу" },
    { key: "byRegisteredAt", label: "Сортировка по дате регистрации" },
  ] as const;
  const sorting = [{ key: "byAge", label: "Сортировка по возрасту" }] as const;

  const activeFilters = filters.filter((f) => sortState[f.key]);
  const availableFilters = filters.filter((f) => !sortState[f.key]);
  const activeSorting = sorting.filter((s) => sortState[s.key]);
  const availableSorting = sorting.filter((s) => !sortState[s.key]);

  const toggleSort = (key: keyof SortState) => {
    setSortState((prev) => { 
      const nextState = {...prev, [key]: !prev[key]}
      applyUsersView(nextState);
      return nextState;
    });
  };

  const applyUsersView = (nextState: SortState) => {
    let result = [...allUsers];
    //Сортировка
    if (nextState.byAge) {
      result = result.sort((a, b) => a.age - b.age);
    }
    if (nextState.byRating) {
      result = result.sort((a,b) => a.rating - b.rating);
    } 
    if (nextState.byRegisteredAt) {
      
    }
    // Фильтрация
    if (nextState.byIsActive) {
      result = result.filter((user) => user.isActive === true);
    }
    if (nextState.byRoleGuest) {
      result = result.filter((user) => user.role === "guest");
    }
    if (nextState.byRoleAdmin) {
      result = result.filter((user) => user.role === "admin");
    }
    setUsers(result);
  };

  return (
    <div>
      <div className="sorting-and-filters-container">
        <h3>Доступные фильтры:</h3>
        <div className="chips-container">
          {availableFilters.map((f) => {
            return (
              <FilterChip
                key={f.key}
                text={f.label}
                size="small"
                onClick={() => toggleSort(f.key as keyof SortState)}
              />
            );
          })}
          {availableSorting.map((s) => {
            return (
              <SortChip
                key={s.key}
                text={s.label}
                size="small"
                onClick={() => toggleSort(s.key as keyof SortState)}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h3>Применённые фильтры:</h3>
        <div className="chips-container">
          {activeFilters.map((f) => {
            return (
              <FilterChip
                key={f.key}
                text={f.label}
                size="small"
                onClick={() => toggleSort(f.key as keyof SortState)}
              />
            );
          })}
          {activeSorting.map((s) => {
            return (
              <SortChip
                key={s.key}
                text={s.label}
                size="small"
                onClick={() => toggleSort(s.key as keyof SortState)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
