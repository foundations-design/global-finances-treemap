import { defineStore } from 'pinia'

export const useAssetStore = defineStore('assets', {
   state: () => ({
      assetData: [
         {
            name: 'Global Assets',
            children: [
               { name: 'Equities', value: 122 },
               { name: 'Money Supply (M2)', value: 94.5 },
               { name: 'Bonds', value: 80 },
               { name: 'Gold', value: 22 },
               { name: 'Real Estate', value: 4.1 },
               { name: 'Bitcoin', value: 2.1 },
               { name: 'Crypto (ex-BTC)', value: 1.5 },
               { name: 'Cars, Art & Collectibles', value: 0.547 },
            ],
         },
      ],
   }),
})
