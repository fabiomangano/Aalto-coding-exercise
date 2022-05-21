import { TodosFilters } from '../types';

export function buildQuery(baseQuery: string, filters?: TodosFilters) {
  let query = baseQuery;

  if (filters?.completed) {
    query = `${query}&completed=${filters.completed}`
  }

  if (filters?.searchTerm) {
    query = `${query}&title_like=${filters.searchTerm}`
  }

  if (filters?.ids && filters?.ids.length > 0) {
    for (let i = 0; i < filters.ids.length; i++) {
      query = query + `&userId=${filters.ids[i]}`
    }
  }

  return query;
}