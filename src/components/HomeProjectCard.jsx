export default function HomeProjectCard({
  icon,
  title,
  description,
  duration,
}) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group cursor-pointer">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase text-gray-400 tracking-wider">
          {duration}
        </span>
        <span className="text-brand-blue font-bold group-hover:translate-x-2 transition-transform">
          →
        </span>
      </div>
    </div>
  );
}
