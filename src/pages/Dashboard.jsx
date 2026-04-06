import { useState } from 'react'
import { opportunities } from '../data/mock'
import OpportunityCard from '../components/OpportunityCard'
import AlertModal from '../components/AlertModal'

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false)
  const [prefill, setPrefill] = useState(null)

  // TODO: fetch opportunities from backend (OpenWeatherMap + Amadeus + Booking)

  const handleSetAlert = (opp) => {
    setPrefill(opp)
    setModalOpen(true)
  }

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-[15px] font-semibold text-base-300">Opportunities</h1>
          <p className="text-[12px] text-base-500 mt-0.5">Flights from Porto — updated today</p>
        </div>
        <button
          onClick={() => { setPrefill(null); setModalOpen(true) }}
          className="px-3 py-1.5 text-[12px] font-medium bg-blue-500 hover:bg-blue-400 text-white rounded transition"
        >
          New alert
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {opportunities.map((opp) => (
          <OpportunityCard key={opp.id} opp={opp} onSetAlert={handleSetAlert} />
        ))}
      </div>

      <AlertModal isOpen={modalOpen} onClose={() => setModalOpen(false)} prefill={prefill} />
    </>
  )
}
