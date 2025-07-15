<script setup>
const team = [
  { name: "Andrew Johnston", role: "Top Trader", img: "https://i.pravatar.cc/40?img=1" },
  { name: "Anna Atkinsons", role: "Manager", img: "https://i.pravatar.cc/40?img=2" },
  { name: "Mark Atkinsons", role: "Top Trader", img: "https://i.pravatar.cc/40?img=3" },
  { name: "Johanna Tairons", role: "Manager", img: "https://i.pravatar.cc/40?img=4" },
]
</script>

<template>
  <div class="flex min-h-screen bg-gray-50 pt-24">

    <!-- Sidebar -->
    <aside class="w-20 md:w-60 bg-white shadow flex flex-col items-center py-6 space-y-6">
      <div class="text-blue-600 text-2xl font-bold">D</div>
      <nav class="space-y-6 mt-10 text-gray-500 flex flex-col items-center md:items-start">
        <div class="flex items-center space-x-2 hover:text-blue-600 cursor-pointer">
          <i class="fas fa-tachometer-alt"></i><span class="hidden md:inline">Dashboard</span>
        </div>
        <div class="flex items-center space-x-2 hover:text-blue-600 cursor-pointer">
          <i class="fas fa-chart-line"></i><span class="hidden md:inline">Analytics</span>
        </div>
        <div class="flex items-center space-x-2 hover:text-blue-600 cursor-pointer">
          <i class="fas fa-dollar-sign"></i><span class="hidden md:inline">Trading</span>
        </div>
        <div class="flex items-center space-x-2 hover:text-blue-600 cursor-pointer">
          <i class="fas fa-bell"></i><span class="hidden md:inline">Notifications</span>
        </div>
      </nav>
      <a href="/" class="mt-auto text-gray-400 hover:text-red-600 cursor-pointer">
        <i class="fas fa-sign-out-alt"></i> <span class="hidden md:inline">Logout</span>
      </a>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6 md:p-10 space-y-8">

      <!-- Top stats -->
      <div class="flex justify-between items-center">
        <div>
          <h2 class="text-2xl font-bold">Dashboard</h2>
          <p class="text-gray-500">Welcome back, Andrew</p>
        </div>
        <div class="flex items-center space-x-4">
          <button class="bg-blue-600 text-white px-4 py-2 rounded">+ Add Unit</button>
          <img src="https://i.pravatar.cc/40" class="rounded-full" alt="profile"/>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p class="text-gray-500">Balance</p>
          <p class="text-xl font-bold">$5900.00</p>
        </div>
        <div>
          <p class="text-gray-500">Profits</p>
          <p class="text-xl font-bold">$950.00 <span class="text-blue-600 text-sm">+56%</span></p>
        </div>
        <div>
          <p class="text-gray-500">Losses</p>
          <p class="text-xl font-bold">$450.00 <span class="text-red-600 text-sm">-56%</span></p>
        </div>
        <div>
          <p class="text-gray-500">Currencies</p>
          <div class="space-x-2 text-blue-600 text-xl">
            <i class="fab fa-btc"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-euro-sign"></i><i class="fas fa-yen-sign"></i>
          </div>
        </div>
      </div>

      <!-- Country stats -->
      <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
        <div class="bg-white p-4 rounded shadow text-center">
          <p>Italy</p><p class="font-bold">475 <span class="text-green-600">▲</span></p>
        </div>
        <div class="bg-white p-4 rounded shadow text-center">
          <p>United States</p><p class="font-bold">431 <span class="text-green-600">▲</span></p>
        </div>
        <div class="bg-white p-4 rounded shadow text-center">
          <p>Canada</p><p class="font-bold">174 <span class="text-red-600">▼</span></p>
        </div>
        <div class="bg-white p-4 rounded shadow text-center">
          <p>Spain</p><p class="font-bold">475 <span class="text-green-600">▲</span></p>
        </div>
        <div class="bg-white p-4 rounded shadow text-center">
          <p>Japan</p><p class="font-bold">134 <span class="text-green-600">▲</span></p>
        </div>
        <div class="bg-white p-4 rounded shadow text-center">
          <p>South Africa</p><p class="font-bold">471 <span class="text-red-600">▼</span></p>
        </div>
      </div>

      <!-- Bottom section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Team Members -->
        <div class="bg-white p-6 rounded shadow">
          <div class="flex justify-between mb-4">
            <h3 class="text-lg font-bold">Team Members</h3>
            <a class="text-blue-600 cursor-pointer">View All</a>
          </div>
          <div class="space-y-4">
            <div v-for="(member, i) in team" :key="i" class="flex items-center space-x-4">
              <img :src="member.img" class="w-10 h-10 rounded-full" />
              <div class="flex-1">
                <p class="font-semibold">{{ member.name }}</p>
              </div>
              <span class="text-sm bg-gray-100 px-2 py-1 rounded">{{ member.role }}</span>
            </div>
          </div>
        </div>

        <!-- Comparison -->
        <div class="bg-white p-6 rounded shadow">
          <div class="flex justify-between mb-4">
            <h3 class="text-lg font-bold">Comparison</h3>
            <a class="text-blue-600 cursor-pointer">View All</a>
          </div>
          <div class="space-y-4">
            <div>
              <p class="flex justify-between"><span>🇺🇸 United States</span><span>93%</span></p>
              <div class="h-2 bg-blue-100 rounded">
                <div class="w-[93%] h-2 bg-blue-600 rounded"></div>
              </div>
            </div>
            <div>
              <p class="flex justify-between"><span>🇮🇹 Italy</span><span>73%</span></p>
              <div class="h-2 bg-blue-100 rounded">
                <div class="w-[73%] h-2 bg-blue-600 rounded"></div>
              </div>
            </div>
            <div>
              <p class="flex justify-between"><span>🇪🇸 Spain</span><span>13%</span></p>
              <div class="h-2 bg-blue-100 rounded">
                <div class="w-[13%] h-2 bg-blue-600 rounded"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </main>
  </div>
</template>

<style scoped>
/* optionally adjust icons if using FontAwesome */
i {
  font-size: 1.2rem;
}
</style>
