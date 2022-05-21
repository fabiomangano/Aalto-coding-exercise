import React from 'react';
import { getTodos } from '../services/Todos';

const useTodos = (url: string, pageSize = 1) => {
  const [currentTodos, setCurrentTodos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const todosRes = await getTodos(url);
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
  }, []);

  return {
    currentTodos,
    isLoading,
    hasError,
    pageCount
  }

}

export default useTodos;