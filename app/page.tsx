import { ExpressionButton } from "./components/ExpressionButton"
import { ExpressionInput } from "./components/ExpressionInput"
import { ExpressionKeys } from "./components/ExpressionKeys"
import { TablesList } from "./components/TablesList"

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center py-12">
      <div className="flex flex-col w-1/2 gap-5">
        <ExpressionInput />
        <ExpressionKeys />
        <ExpressionButton />
        <TablesList />
      </div>
    </main>
  )
}
