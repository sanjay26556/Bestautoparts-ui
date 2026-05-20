import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('orders');

  const userData = {
    name: "Sanjay Kumar",
    email: "sanjay.k@bestautoparts.in",
    phone: "+91 98765 43210",
    memberSince: "March 2024",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&fit=crop"
  };

  const savedVehicles = [
    {
      id: 1,
      make: "Tata",
      model: "Nexon",
      year: "2023",
      trim: "XZ+ (O) Petrol",
      engine: "1.2L Turbocharged Revotron",
      vin: "MA3NEXON7K5XXXXXX"
    },
    {
      id: 2,
      make: "Maruti Suzuki",
      model: "Swift",
      year: "2021",
      trim: "ZXI Petrol",
      engine: "1.2L DualJet K12N",
      vin: "MB8SWIFT2M4XXXXXX"
    }
  ];

  const orderHistory = [
    {
      id: "OD928374921",
      date: "May 12, 2026",
      total: "₹4,850",
      status: "Delivered",
      statusColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
      items: [
        { name: "Brembo Premium Front Brake Pads", qty: 1, price: "₹3,450" },
        { name: "Bosch Premium Oil Filter", qty: 2, price: "₹700" }
      ]
    },
    {
      id: "OD812739482",
      date: "April 18, 2026",
      total: "₹1,250",
      status: "Delivered",
      statusColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
      items: [
        { name: "NGK Laser Iridium Spark Plugs (Set of 4)", qty: 1, price: "₹1,250" }
      ]
    },
    {
      id: "OD734281903",
      date: "March 28, 2026",
      total: "₹14,990",
      status: "Delivered",
      statusColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
      items: [
        { name: "Monroe Front Suspension Strut Assembly", qty: 2, price: "₹14,990" }
      ]
    }
  ];

  const savedAddresses = [
    {
      id: 1,
      tag: "Home",
      name: "Sanjay Kumar",
      line1: "Flat 405, Block B, Green Glen Layout",
      line2: "Outer Ring Road",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560103",
      isDefault: true
    },
    {
      id: 2,
      tag: "Office",
      name: "Sanjay Kumar",
      line1: "Prestige Tech Park, Jupiter Block",
      line2: "Marathahalli-Sarjapur Outer Ring Rd",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560103",
      isDefault: false
    }
  ];

  return (
    <main className="min-h-screen pt-20 bg-background text-on-surface">
      {/* Profile Overview Banner */}
      <section className="bg-surface-container-lowest border-b border-outline-variant/30 py-12">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 shadow-md">
                <img src={userData.avatar} alt={userData.name} className="w-full h-full object-cover" />
              </div>
              <span className="absolute bottom-1 right-1 w-6 h-6 bg-secondary text-on-secondary rounded-full flex items-center justify-center border-2 border-surface-container-lowest">
                <span className="material-symbols-outlined text-[14px]">verified</span>
              </span>
            </div>
            
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                <h1 className="font-display-md text-display-md text-primary">{userData.name}</h1>
                <span className="inline-flex self-center md:self-auto items-center px-3 py-0.5 bg-secondary-fixed text-on-secondary-fixed rounded-full text-xs font-semibold uppercase tracking-wider">
                  Pro Garage Account
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-1 justify-center md:justify-start text-on-surface-variant font-body-sm text-body-sm">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">mail</span> {userData.email}</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">phone</span> {userData.phone}</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> Joined {userData.memberSince}</span>
              </div>
            </div>

            <div className="flex gap-stack-md w-full md:w-auto">
              <Link to="/marketplace" className="flex-1 md:flex-initial bg-secondary text-on-secondary px-6 py-2.5 rounded-lg font-label-md text-label-md hover:bg-secondary/90 transition-all text-center flex items-center justify-center gap-2 active:scale-95 shadow">
                <span className="material-symbols-outlined text-[18px]">shopping_bag</span> Order Parts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Navigation & Tabs */}
      <section className="max-w-container-max mx-auto px-margin-desktop py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-gutter items-start">
          {/* Side Menu Navigation */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden sticky top-36">
            <div className="p-4 border-b border-outline-variant/30 bg-surface-container-low/50">
              <span className="font-label-sm text-label-sm text-on-surface-variant/80 uppercase font-semibold">My Account Area</span>
            </div>
            <nav className="flex flex-col">
              <button 
                onClick={() => setActiveTab('orders')}
                className={`flex items-center gap-3 px-6 py-4 text-left font-label-md text-label-md transition-all border-l-4 ${activeTab === 'orders' ? 'border-primary bg-primary/5 text-primary' : 'border-transparent text-on-surface-variant hover:bg-surface-container-low'}`}
              >
                <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                Order History
              </button>
              <button 
                onClick={() => setActiveTab('garage')}
                className={`flex items-center gap-3 px-6 py-4 text-left font-label-md text-label-md transition-all border-l-4 ${activeTab === 'garage' ? 'border-primary bg-primary/5 text-primary' : 'border-transparent text-on-surface-variant hover:bg-surface-container-low'}`}
              >
                <span className="material-symbols-outlined text-[20px]">directions_car</span>
                My Garage
              </button>
              <button 
                onClick={() => setActiveTab('addresses')}
                className={`flex items-center gap-3 px-6 py-4 text-left font-label-md text-label-md transition-all border-l-4 ${activeTab === 'addresses' ? 'border-primary bg-primary/5 text-primary' : 'border-transparent text-on-surface-variant hover:bg-surface-container-low'}`}
              >
                <span className="material-symbols-outlined text-[20px]">home_pin</span>
                Saved Addresses
              </button>
            </nav>
          </div>

          {/* Tab Content Panels */}
          <div className="lg:col-span-3">
            {activeTab === 'orders' && (
              <div className="space-y-gutter">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-headline-md text-headline-md text-primary">Previous Order Details</h2>
                  <span className="text-body-sm text-on-surface-variant">{orderHistory.length} orders total</span>
                </div>
                
                {orderHistory.map((order) => (
                  <div key={order.id} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm hover:shadow transition-shadow">
                    <div className="bg-surface-container-low/50 px-6 py-4 border-b border-outline-variant/30 flex flex-col sm:flex-row justify-between sm:items-center gap-y-2">
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
                        <div>
                          <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold block">Order ID</span>
                          <span className="font-mono text-body-md text-primary font-bold">{order.id}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold block">Date Placed</span>
                          <span className="text-body-md font-medium text-on-surface">{order.date}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold block">Order Total</span>
                          <span className="text-body-md font-medium text-secondary">{order.total}</span>
                        </div>
                      </div>
                      <span className={`self-start sm:self-auto px-3 py-1 rounded-full border text-xs font-semibold uppercase ${order.statusColor}`}>
                        {order.status}
                      </span>
                    </div>

                    <div className="p-6 divide-y divide-outline-variant/20">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="py-4 first:pt-0 last:pb-0 flex justify-between items-center gap-4">
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 bg-surface-container-high rounded flex items-center justify-center">
                              <span className="material-symbols-outlined text-[20px] text-outline">build</span>
                            </span>
                            <div>
                              <p className="font-body-md text-body-md text-primary font-semibold">{item.name}</p>
                              <span className="text-body-sm text-on-surface-variant">Qty: {item.qty}</span>
                            </div>
                          </div>
                          <span className="text-body-md font-medium text-primary">{item.price}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-surface-container-low/20 px-6 py-3 border-t border-outline-variant/20 flex justify-end gap-stack-md">
                      <button className="px-4 py-1.5 border border-outline hover:bg-surface-container-high text-primary rounded-lg font-label-sm text-label-sm transition-colors">
                        Invoice
                      </button>
                      <Link to="/marketplace" className="px-4 py-1.5 bg-primary text-on-primary hover:bg-secondary rounded-lg font-label-sm text-label-sm transition-all">
                        Buy Again
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'garage' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-primary mb-1">My Garage</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Manage your vehicles to instantly filter exact-fit parts catalog.</p>
                  </div>
                  <button className="flex items-center gap-1 px-4 py-2 bg-primary text-on-primary hover:bg-secondary rounded-lg font-label-md text-label-md transition-all shadow active:scale-95">
                    <span className="material-symbols-outlined text-[18px]">add</span> Add Vehicle
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  {savedVehicles.map((vehicle) => (
                    <div key={vehicle.id} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                      <div className="p-stack-lg">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <span className="text-body-sm text-on-surface-variant/80 font-semibold">{vehicle.year} Model</span>
                            <h3 className="font-headline-md text-headline-md text-primary mt-1">
                              {vehicle.make} {vehicle.model}
                            </h3>
                          </div>
                          <span className="w-10 h-10 bg-primary/5 text-primary border border-primary/10 rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-[22px]">directions_car</span>
                          </span>
                        </div>

                        <div className="space-y-2 mt-4 bg-surface-container-low/30 rounded-lg p-3 border border-outline-variant/20">
                          <div className="flex justify-between text-body-sm">
                            <span className="text-on-surface-variant">Trim Level:</span>
                            <span className="font-medium text-primary">{vehicle.trim}</span>
                          </div>
                          <div className="flex justify-between text-body-sm">
                            <span className="text-on-surface-variant">Engine Spec:</span>
                            <span className="font-medium text-primary">{vehicle.engine}</span>
                          </div>
                          <div className="flex justify-between text-body-sm">
                            <span className="text-on-surface-variant">VIN Code:</span>
                            <span className="font-mono text-primary">{vehicle.vin}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-stack-lg pt-0 flex gap-2">
                        <Link 
                          to={`/models/${vehicle.make.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex-1 py-2.5 bg-surface-container-high hover:bg-secondary hover:text-on-secondary transition-all rounded-lg font-label-md text-label-md text-center flex justify-center items-center gap-1.5"
                        >
                          Show Compatible Parts
                        </Link>
                        <button className="p-2.5 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/20 transition-all">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-primary mb-1">Shipping Addresses</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Set default delivery and workshop shipping endpoints.</p>
                  </div>
                  <button className="flex items-center gap-1 px-4 py-2 bg-primary text-on-primary hover:bg-secondary rounded-lg font-label-md text-label-md transition-all shadow active:scale-95">
                    <span className="material-symbols-outlined text-[18px]">add</span> Add Address
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  {savedAddresses.map((address) => (
                    <div key={address.id} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-stack-lg flex flex-col justify-between hover:shadow transition-shadow">
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-full font-label-sm text-label-sm font-semibold uppercase">
                              {address.tag}
                            </span>
                            {address.isDefault && (
                              <span className="text-[10px] text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                                Default Delivery
                              </span>
                            )}
                          </div>
                          <span className="material-symbols-outlined text-outline text-[20px]">home_pin</span>
                        </div>

                        <div className="text-body-md leading-relaxed text-on-surface font-medium mb-1">{address.name}</div>
                        <div className="text-body-sm leading-relaxed text-on-surface-variant font-normal">
                          {address.line1}, <br />
                          {address.line2 && <>{address.line2}, <br /></>}
                          {address.city}, {address.state} - {address.pincode}
                        </div>
                      </div>

                      <div className="flex gap-stack-md mt-6 pt-4 border-t border-outline-variant/10">
                        <button className="flex-1 py-2 border border-outline hover:bg-surface-container-high text-primary rounded-lg font-label-sm text-label-sm transition-colors flex items-center justify-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">edit</span> Edit
                        </button>
                        {!address.isDefault && (
                          <button className="flex-1 py-2 border border-outline-variant hover:bg-surface-container-high text-on-surface-variant rounded-lg font-label-sm text-label-sm transition-colors flex items-center justify-center gap-1">
                            Make Default
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
