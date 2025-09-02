import Widget from './Widget'

export default function StatsWidget() {
  return (
    <Widget size="medium" className="fixed top-55 left-65">
      <div className="text-center h-full flex flex-col justify-center">
        <div className="text-white text-lxl font-semibold mb-1">Events</div>
        <div className="text-white text-xl font-bold mb-1">No Events to show today</div>
      </div>
    </Widget>
  )
}