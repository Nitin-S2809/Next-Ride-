import React, { useEffect, useState } from 'react';

const CaptainPage = () => {
  const [countdown, setCountdown] = useState(23);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      title: "Today's Earnings",
      amount: '₹4,230.50',
      subtitle: 'View Details',
      gradient: 'from-[#0375ff] via-[#0d6ff5] to-[#00c6ff]',
    },
    {
      title: 'Your Rating',
      amount: '4.9',
      subtitle: '235 Rides',
      gradient: 'from-[#ffbc00] via-[#ffd100] to-[#ffd600]',
    },
    {
      title: "Today's Rides",
      amount: '8',
      subtitle: 'View History',
      gradient: 'from-[#07d1ad] via-[#16d7b6] to-[#00e2bd]',
    },
    {
      title: 'Weekly Streak',
      amount: '3',
      subtitle: 'View Rewards',
      gradient: 'from-[#ff5e8f] via-[#ff4f76] to-[#ff6363]',
    },
  ];

  const recentActivities = [
    {
      from: 'Botanical Garden Metro',
      to: 'Laxmi Nagar',
      fare: 'INR 182.30',
      oldFare: 'INR 335.30',
    },
    {
      from: 'Anand Vihar',
      to: 'Central Park',
      fare: 'INR 225.80',
      oldFare: 'INR 382.90',
    },
  ];

  const circleDash = 282;
  const circleProgress = Math.max(0, circleDash - (countdown / 23) * circleDash);

  return (
    <div className="min-h-screen  text-slate-100 bg-[radial-gradient(circle_at_10%_20%,_rgb(18_10_45)_0%,_rgb(9_10_20)_45%,_rgb(4_4_12)_100%)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(10,13,42,0.45),rgba(40,8,70,0.6))] pointer-events-none" />
      <aside className="fixed inset-y-0 left-0 w-64 bg-[#080a21cc] border-r border-white/10 z-20 p-8 flex flex-col gap-6">
        <h2 className="text-3xl leading-tight font-bold">NextRide<br />
          <span className="text-[#7d9efe] text-base">Captain</span>
        </h2>
        <nav className="flex flex-col gap-2">
          <a href="#" className="bg-cyan-500/20 text-white rounded-xl px-3 py-2 font-semibold">🏠 Dashboard</a>
          <a href="#" className="text-slate-200 hover:bg-white/10 rounded-xl px-3 py-2">🚗 Rides</a>
          <a href="#" className="text-slate-200 hover:bg-white/10 rounded-xl px-3 py-2">💰 Earnings</a>
          <a href="#" className="text-slate-200 hover:bg-white/10 rounded-xl px-3 py-2">🏆 Rewards</a>
          <a href="#" className="text-slate-200 hover:bg-white/10 rounded-xl px-3 py-2">👤 Profile</a>
        </nav>
      </aside>

      <main className="relative z-10 ml-72 p-10 space-y-6">
        <header className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold">Welcome, Captain!</h1>
            <p className="text-slate-300 mt-1">Be ready for your next ride.</p>
          </div>
          <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">JD</div>
            <div>
              <div className="text-base font-semibold">John Doe</div>
              <div className="text-sm text-slate-300">NextRide Captain</div>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {cards.map((card) => (
            <article key={card.title} className={`rounded-2xl p-5 shadow-xl bg-gradient-to-r ${card.gradient} bg-clip-border text-white`}>
              <p className="text-sm opacity-90 font-semibold">{card.title}</p>
              <p className="text-3xl font-extrabold mt-2">{card.amount}</p>
              <p className="mt-3 text-sm opacity-80 font-semibold">{card.subtitle} &gt;</p>
            </article>
          ))}
        </section>

        <section className="grid lg:grid-cols-[1.8fr_1fr] gap-4 bg-[#05081e] border border-white/10 rounded-2xl p-6 shadow-[0_12px_36px_rgba(0,0,0,0.35)]">
          <div>
            <h2 className="text-2xl font-bold mb-4">New Ride Request</h2>
            <div className="flex items-center justify-between bg-white/5 border border-white/15 rounded-xl px-4 py-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-semibold">Connaught Place</p>
                  <p className="text-sm text-slate-300">Karawal Nagar</p>
                </div>
              </div>
              <p className="text-cyan-200 font-semibold">4.5 km away</p>
            </div>
            <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 mb-4">
              <p className="text-sm text-slate-300">Estimated Earnings</p>
              <p className="text-2xl font-bold">INR 228.50</p>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold py-2">Decline</button>
              <button className="flex-1 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-2">Accept</button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <svg className="w-36 h-36" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" className="fill-none stroke-white/15 stroke-[10]" />
              <circle
                cx="50"
                cy="50"
                r="45"
                className="fill-none stroke-cyan-300 stroke-[8] transition-[stroke-dashoffset] duration-300 ease-linear"
                style={{
                  strokeDasharray: circleDash,
                  strokeDashoffset: circleProgress,
                  transform: 'rotate(-90deg)',
                  transformOrigin: '50% 50%',
                }}
              />
              <text x="50" y="54" textAnchor="middle" dominantBaseline="middle" className="fill-white font-black text-[1.3rem]">
                00:{countdown.toString().padStart(2, '0')}
              </text>
            </svg>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Recent Activities</h2>
            <a href="#" className="text-cyan-300 font-semibold">View All &rarr;</a>
          </div>

          <div className="grid gap-2">
            {recentActivities.map((act, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-xl bg-slate-900/70 border border-cyan-600/20 px-4 py-3">
                <div>
                  <p className="font-semibold">{act.from}</p>
                  <p className="text-sm text-slate-300">{act.to}</p>
                </div>
                <div className="text-right">
                  <p className="text-cyan-200 font-bold">{act.fare}</p>
                  <p className="text-slate-400 text-sm line-through">{act.oldFare}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CaptainPage;
