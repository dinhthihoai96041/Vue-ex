<template>
  <div class="h-screen w-screen bg-gradient-to-b from-[#64decd] to-[#4483d1] flex flex-col">
    
    <!-- Navbar -->
    <nav class="w-full  bg-gradient-to-bt from-[#6cc5b9] to-[#4483d1] shadow-md">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex justify-between items-center h-16 drop-shadow">
          
          <!-- Logo -->
          <div class="text-white font-bold text-2xl">
            MyLogo
          </div>

          <!-- Navigation Links -->
          <div>
            <router-link 
              to="/" 
              class="hover:text-gray-200 font-semibold px-4 py-2 transition" 
              active-class="text-blue-900 ">
              Todo
            </router-link>
            <router-link 
              to="/weather" 
              class="hover:text-gray-200 px-4 py-2 font-semibold transition" 
              active-class="text-blue-900 ">
              Weather
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main content -->
    <main class="flex-1 flex justify-center items-start overflow-y-auto p-6">
      <router-view />
    </main>

  </div>
</template>
