
export interface SimulationStep<TState> {
  id: number
  state: TState
  explanation: string
  codeLine: number | null
  variables: Record<string, number | string | boolean>
}
