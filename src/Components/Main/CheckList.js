import React from 'react'

export default function CheckList() {
  return (
    <div className="px-4 h-12 text-sm bg-gray-300 border-t border-gray-400 flex flex-wrap items-center text-gray-600">
        <p className="flex-1 order-1" data-testid="total-tasks-count">0 tasks</p>
        <p className="flex-1 order-2 text-center" data-testid="completed-tasks-count">0 complete</p>
        <p className="flex-1 order-last text-right" data-testid="open-tasks-count">0 open</p>
    </div>
  )
}
