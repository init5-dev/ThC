'use client'

import translate from "../locales"

const Sidebar = () => {
  return (
    <div className="grid grid-cols-4 gap-8 h-full">
      <div className="col-span-1  h-full">
        <div className="flex flex-col gap-4 h-full">
          <strong className="text-lg">{translate('posts')}</strong>
          <div className="bg-[#222] p-2 rounded-lg overflow-auto h-full">
            <ul>
              <li>
                <button className="btn btn-link">
                  Las cuatro nobles verdades
                </button>
              </li>
              <li>
                <button className="btn btn-link">
                  Noble Óctuple Sendero
                </button>
              </li>
              <li>
                <button className="btn btn-link">
                  Sila, samadhi y pañña
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar