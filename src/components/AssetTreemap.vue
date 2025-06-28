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
import * as am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

const store = useAssetStore()

onMounted(() => {
  const root = am5.Root.new('chartdiv')
  root.setThemes([am5themes_Animated.default.new(root)])
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
      upDepth: 0,
      initialDepth: 1,
      valueField: 'value',
      categoryField: 'name',
      childDataField: 'children',
      nodePaddingOuter: 20,
      nodePaddingInner: 10,
    })
  )

  series.data.setAll(store.assetData)
  series.set('selectedDataItem', series.dataItems[0])

  container.children.unshift(
    am5hierarchy.BreadcrumbBar.new(root, {
      series: series,
    })
  )
})
</script>
