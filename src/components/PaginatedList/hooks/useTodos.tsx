import React from 'react';
import { TodosFilters } from '../types';
import { buildQuery } from '../helpers';
import { getTodos } from '../../../services/Todos';

const useTodos = (pageSize = 1, filters?: TodosFilters) => {
  const [currentTodos, setCurrentTodos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const [offset, setOffset] = React.useState(0);

  const BASE_URL = `https://jsonplaceholder.typicode.com/todos?`;
  const baseQuery = `_start=${offset}&_limit=${pageSize}`;
  const query = buildQuery(baseQuery, filters);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const todosRes = await getTodos(BASE_URL + query);
      const itemsCount = parseInt(todosRes.headers['x-total-count']);
      setPageCount(itemsCount / pageSize);
      setCurrentTodos(todosRes.data);
    }

    try {
      fetchData()
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [offset, filters, BASE_URL, pageSize, query]);

  return {
    currentTodos,
    isLoading,
    hasError,
    pageCount,
    offset,
    setOffset
  }
}

export default useTodos;