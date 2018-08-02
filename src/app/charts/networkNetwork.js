import simpleModel from '../processors/simpleModel'
import { renameMetric, defaultTitleAndKeylabel, mapInstanceDomains, cumulativeTransform, filterInstanceIncludesFilterText } from '../processors/transforms'
import { integer } from '../processors/formats'

import FilterModal from '../components/FilterModal/FilterModal.jsx'

export default [
  {
    group: 'Network',
    title: 'Network Drops (In)',
    processor: simpleModel,
    metricNames: [
      'network.interface.in.drops',
    ],
    transforms: [
      mapInstanceDomains,
      defaultTitleAndKeylabel,
      cumulativeTransform,
    ],
    yTickFormat: integer,
  },

  {
    group: 'Network',
    title: 'Network Drops (In + Out)',
    processor: simpleModel,
    metricNames: [
      'network.interface.in.drops',
      'network.interface.out.drops',
    ],
    transforms: [
      mapInstanceDomains,
      defaultTitleAndKeylabel,
      cumulativeTransform,
    ],
    yTickFormat: integer,
  },

  {
    group: 'Network',
    title: 'Network Drops (Out)',
    processor: simpleModel,
    metricNames: [
      'network.interface.out.drops',
    ],
    transforms: [
      mapInstanceDomains,
      defaultTitleAndKeylabel,
      cumulativeTransform,
    ],
    yTickFormat: integer,
  },

  {
    group: 'Network',
    title: 'Network Packets',
    processor: simpleModel,
    metricNames: [
      'network.interface.in.packets',
      'network.interface.out.packets',
    ],
    transforms: [
      mapInstanceDomains,
      filterInstanceIncludesFilterText,
      defaultTitleAndKeylabel,
      cumulativeTransform,
    ],
    settingsComponent: FilterModal,
    filter: '',
    yTickFormat: integer,
  },

  {
    group: 'Network',
    title: 'Network Retransmits',
    processor: simpleModel,
    metricNames: [
      'network.tcp.retranssegs',
      'network.tcp.timeouts',
      'network.tcp.listendrops',
      'network.tcp.fastretrans',
      'network.tcp.slowstartretrans',
      'network.tcp.synretrans',
    ],
    transforms: [
      cumulativeTransform,
      renameMetric({
        'network.tcp.retranssegs': 'retranssegs',
        'network.tcp.timeouts': 'timeouts',
        'network.tcp.listendrops': 'listendrops',
        'network.tcp.fastretrans': 'fastretrans',
        'network.tcp.slowstartretrans': 'slowstartretrans',
        'network.tcp.synretrans': 'synretrans',
      }),
      defaultTitleAndKeylabel,
    ],
    yTickFormat: integer,
  },

  {
    group: 'Network',
    title: 'Network Throughput (kB)',
    processor: simpleModel,
    metricNames: [
      'network.interface.in.bytes',
      'network.interface.out.bytes',
    ],
    transforms: [
      mapInstanceDomains,
      filterInstanceIncludesFilterText,
      defaultTitleAndKeylabel,
      cumulativeTransform,
    ],
    settingsComponent: FilterModal,
    filter: '',
    yTickFormat: integer,
  }
]
