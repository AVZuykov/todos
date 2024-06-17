export enum FilterKey {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}

export interface Filter {
  key: FilterKey
  label: Capitalize<FilterKey>
}
