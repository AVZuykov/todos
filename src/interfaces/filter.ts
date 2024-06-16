type FilterKey = 'all' | 'active' | 'completed'

export interface Filter {
  key: FilterKey
  label: Capitalize<FilterKey>
}
