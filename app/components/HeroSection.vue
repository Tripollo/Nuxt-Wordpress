<script setup lang="ts">
const props = defineProps<{
    hero: {
        title: string
        sub_title: string
        button_label: string
        button_link: string | null
    }
    imgUrl: string
}>()

</script>

<template>
    <div class="container mx-auto py-20">
      <div class="flex justify-between items-center max-w-[1280px] mx-auto">
        
        <!-- Left side -->
        <div>
            <h1 class="text-5xl font-bold mb-4">
                {{ hero.title }}
            </h1>
    
            <p class="text-lg text-gray-600 mb-6 uppercase">
                {{ hero.sub_title }}
            </p>
    
            <a
                
                href="/#"
                class="inline-block px-6 py-3 bg-[#ed2330] text-white uppercase rounded-lg hover:bg-black"
            >
                {{ hero.button_label }}
            </a>
          
        </div>
  
        <!-- Right side -->
        <div v-if="imgUrl">
          <img
            :src="imgUrl"
            alt="Hero Image"
            class="w-full rounded-lg"
          />
        </div>
  
      </div>
    </div>
  </template>