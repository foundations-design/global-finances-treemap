<template>
  <div>
    <h2>Global Asset Values Treemap (2025 Estimate)</h2>
    <div id="chartdiv" style="width: 100%; height: 80vh"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAssetStore } from '../stores/assets'
import * as am5 from '@amcharts/amcharts5'
import * as am5hierarchy from '@amcharts/amcharts5/hierarchy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

const store = useAssetStore()

onMounted(() => {
  const root = am5.Root.new('chartdiv')
  root.setThemes([am5themes_Animated.new(root)])

  const container = root.container.children.push(
    am5.Container.new(root, {
      width: am5.percent(100),
      height: am5.percent(100),
      layout: root.verticalLayout,
    })
  )

  const series = container.children.push(
    am5hierarchy.Treemap.new(root, {
      downDepth: 1,
      upDepth: 1,
      initialDepth: 1,
      valueField: 'value',
      categoryField: 'name',
      childDataField: 'children',
    })
  )

  const data = [
    {
      name: 'Global Assets',
      children: [
        {
          name: 'Equities',
          children: [
            { name: 'Apple', value: 3.1 },
            { name: 'Microsoft', value: 2.8 },
            { name: 'Saudi Aramco', value: 2.2 },
            { name: 'Alphabet', value: 1.9 },
            { name: 'Amazon', value: 1.8 },
            { name: 'NVIDIA', value: 1.7 },
            { name: 'Meta', value: 1.2 },
            { name: 'Tesla', value: 0.95 },
            { name: 'Berkshire Hathaway', value: 0.75 },
            { name: 'TSMC', value: 0.65 },
          ],
        },
        { name: 'Money Supply (M2)', value: 94.5 },
        { name: 'Bonds', value: 80 },
        { name: 'Gold', value: 22 },
        { name: 'Real Estate', value: 4.1 },
        { name: 'Bitcoin', value: 2.1 },
        { name: 'Crypto (ex-BTC)', value: 1.5 },
        { name: 'Cars, Art & Collectibles', value: 0.547 },
      ],
    },
  ]

  series.data.setAll(data)
  series.set('selectedDataItem', series.dataItems[0])

  container.children.unshift(
    am5hierarchy.BreadcrumbBar.new(root, {
      series: series,
    })
  )
})
</script>

<style scoped>
#chartdiv {
  width: 100%;
  height: 100%;
}
</style>