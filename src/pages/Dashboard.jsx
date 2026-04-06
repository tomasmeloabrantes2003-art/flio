import { useState } from 'react'
import { opportunities } from '../data/mock'
import OpportunityCard from '../components/OpportunityCard'
import AlertModal from '../components/AlertModal'

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false)
  const [prefill, setPrefill] = useState(null)

  // TODO: fetch opportunities from backend API
  // TODO: fetch from OpenWeatherMap + Amadeus + Booking APIs

  const handleSetAlert = (opp) => {
    setPrefill(opp)
    setModalOpen(true)
  }

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">Today's Opportunities</h2>
          <p className="text-sm text-slate-500 mt-1">Best travel deals from Porto right now</p>
        </div>
        <button
          onClick={() => { setPrefill(null); setModalOpen(true) }}
          className="px-4 py-2 bg-electric hover:bg-electric-light text-white text-sm font-semibold rounded-lg transition"
        >
          + New Alert
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {opportunities.map((opp) => (
          <OpportunityCard key={opp.id} opp={opp} onSetAlert={handleSetAlert} />
        ))}
      </div>

      <AlertModal isOpen={modalOpen} onClose={() => setModalOpen(false)} prefill={prefill} />
    </>
  )
}
