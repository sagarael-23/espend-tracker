import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { pesanTes } from '@/utils/tes'

function App() {
  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center p-6">
      <div className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200 text-center">
        <h1 className="text-3xl font-bold text-slate-800">EXPEND TRACKER</h1>
        <p className="mt-2 text-slate-500">{pesanTes}</p>
        <Button className="mt-6">
          <Check />
          shadcn/ui dan Lucide berhasil
        </Button>
      </div>
    </div>
  )
}

export default App