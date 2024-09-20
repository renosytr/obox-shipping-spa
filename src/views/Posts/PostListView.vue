<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import DetailIcon from '@/assets/images/icons/eye.svg'
import EditIcon from '@/assets/images/icons/pencil-write.svg'
import DelteIcon from '@/assets/images/icons/bin.svg'
import Table from '@/components/TableData.vue'
import Enum from '@/types/enum.js'

const dataHeader = [
  'thumbnail', 
  'title', 
  'tags', 
  'category', 
  'writter', 
  'actions'
]

const dataBody = [
  {
    thumbnail: 'https://img.daisyui.com/images/profile/demo/2@94.webp',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error autem quam iste itaque ratione vitae corrupti laboriosam asperiores voluptatibus nostrum aliquid perspiciatis eligendi, sunt velit odio nemo et doloribus sed.',
    tags: ['Desktop', 'Support', 'Technician', 'Desktop Suppor', 'Support', 'Technician'],
    category: ['Purple'],
    writter: 'Jhon Doe Stefanus'
  },
  {
    thumbnail: 'https://img.daisyui.com/images/profile/demo/2@94.webp',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error autem quam iste itaque ratione vitae corrupti laboriosam asperiores voluptatibus nostrum aliquid perspiciatis eligendi, sunt velit odio nemo et doloribus sed.',
    tags: ['Desktop', 'Support', 'Technician', 'DesktopSupportSupport', 'Support', 'Technician'],
    category: ['Purple', 'Orange'],
    writter: 'Jhon Doe Stefanus'
  },
  {
    thumbnail: 'https://img.daisyui.com/images/profile/demo/2@94.webp',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error autem quam iste itaque ratione vitae corrupti laboriosam asperiores voluptatibus nostrum aliquid perspiciatis eligendi, sunt velit odio nemo et doloribus sed.',
    tags: ['Desktop', 'Support', 'Technician', 'DesktopSupportSupport', 'Support', 'Technician'],
    category: ['Purple', 'Orange'],
    writter: 'Jhon Doe Stefanus'
  },
  {
    thumbnail: 'https://img.daisyui.com/images/profile/demo/2@94.webp',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error autem quam iste itaque ratione vitae corrupti laboriosam asperiores voluptatibus nostrum aliquid perspiciatis eligendi, sunt velit odio nemo et doloribus sed.',
    tags: ['Desktop', 'Support', 'Technician', 'Desktop Suppor', 'Support', 'Technician'],
    category: ['Purple'],
    writter: 'Jhon Doe Stefanus'
  },
  {
    thumbnail: 'https://img.daisyui.com/images/profile/demo/2@94.webp',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error autem quam iste itaque ratione vitae corrupti laboriosam asperiores voluptatibus nostrum aliquid perspiciatis eligendi, sunt velit odio nemo et doloribus sed.',
    tags: ['Desktop', 'Support', 'Technician', 'DesktopSupportSupport', 'Support', 'Technician'],
    category: ['Purple', 'Orange'],
    writter: 'Jhon Doe Stefanus'
  },
  {
    thumbnail: 'https://img.daisyui.com/images/profile/demo/2@94.webp',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error autem quam iste itaque ratione vitae corrupti laboriosam asperiores voluptatibus nostrum aliquid perspiciatis eligendi, sunt velit odio nemo et doloribus sed.',
    tags: ['Desktop', 'Support', 'Technician', 'DesktopSupportSupport', 'Support', 'Technician'],
    category: ['Purple', 'Orange'],
    writter: 'Jhon Doe Stefanus'
  },
]

const tableData = {
  header: dataHeader,
  body: dataBody,
  filter: {
    field: {
      title: null,
      tags: null,
      category: null,
      writter: null
    },
    onSubmit(fields){
      onSearch(fields)
    }
  },
  quickSearch: {
    isVisible: true,
    onSubmit(fields){
      onSearch(fields)
    }
  },
  column: [
    {
      label: "thumbnail",
      field: "thumbnail",
      sortable: true,
      type: Enum.IMAGE,
    },
    {
      label: "title",
      field: "title",
      sortable: true,
      type: Enum.STRING,
    },
    {
      label: "tags",
      field: "tags",
      type: Enum.LIST,
    },
    {
      label: "category",
      field: "category",
      type: Enum.LIST,
    },
    {
      label: "writter",
      field: "writter",
      sortable: true,
      type: Enum.STRING,
    },
    {
      label: "actions",
      field: "actions",
      type: Enum.ACTION,
      actions: [
        {
          label: "detail",
          icon: DetailIcon,
          onClick(row){
            onDetail(row)
          }
        },
        {
          label: "edit",
          icon: EditIcon,
          onClick(row){
            onEdit(row)
          }
        },
        {
          label: "deltete",
          icon: DelteIcon,
          onClick(row){
            onDelete(row)
          }
        },
      ]
    },
  ]
}

const onDetail = (row) => {
  console.log("onDetail", row)
}

const onEdit = (row) => {
  console.log("onEdit", row)
}

const onDelete = (row) => {
  console.log("onDelete", row)
}

const onSearch = (fields) => {
  console.log("onSearch", fields)
}
</script>
<template>
  <DashboardLayout>
    <div class="text-3xl mb-3 item-slide-in">Posts</div>
    <div class="bg-white p-6 rounded-xl item-slide-in animate-delay-half">
      <Table 
        :table-data="tableData"
        :is-selectable="true"
      >
      </Table>
    </div>
  </DashboardLayout>
</template>
